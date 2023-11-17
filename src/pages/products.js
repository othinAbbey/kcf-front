import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://kcf-onlineshop.onrender.com/products');

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    // Set the selectedProduct state when a product is clicked
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    // Clear the selectedProduct state when the modal is closed
    setSelectedProduct(null);
  };

  const handleOrder = (product) => {
    // Add the product to the cart and update the total price
    setCart([...cart, product]);
    setTotalPrice((prevTotal) => prevTotal + product.price);
  };

  const handleRemoveFromCart = (product) => {
    // Remove the product from the cart and update the total price
    setCart(cart.filter((item) => item.id !== product.id));
    setTotalPrice((prevTotal) => prevTotal - product.price);
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} onClick={() => handleProductClick(product)}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleOrder(product)}>Order</button>
        </div>
      ))}

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <p>Description: {selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <p>Number in Stock: {selectedProduct.stock}</p>
            <p>Category: {selectedProduct.category}</p>
            <button onClick={() => handleOrder(selectedProduct)}>Order</button>
          </div>
        </div>
      )}

      {/* Shopping Cart */}
      <div>
        <h2>Shopping Cart</h2>
        {cart.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </div>
        ))}
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Products;
