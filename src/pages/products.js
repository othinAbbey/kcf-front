// import React, { useEffect, useState } from 'react';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://kcf-onlineshop.onrender.com/products');

//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }

//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error.message);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleProductClick = (product) => {
//     // Set the selectedProduct state when a product is clicked
//     setSelectedProduct(product);
//   };

//   const handleModalClose = () => {
//     // Clear the selectedProduct state when the modal is closed
//     setSelectedProduct(null);
//   };

//   const handleOrder = (product) => {
//     // Add the product to the cart and update the total price
//     setCart([...cart, product]);
//     setTotalPrice((prevTotal) => prevTotal + product.price);
//   };

//   const handleRemoveFromCart = (product) => {
//     // Remove the product from the cart and update the total price
//     setCart(cart.filter((item) => item.id !== product.id));
//     setTotalPrice((prevTotal) => prevTotal - product.price);
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       {products.map((product) => (
//         <div key={product.id} onClick={() => handleProductClick(product)}>
//           <img src={product.image} alt={product.name} />
//           <h3>{product.name}</h3>
//           <p>Price: ${product.price}</p>
//           <button onClick={() => handleOrder(product)}>Order</button>
//         </div>
//       ))}

//       {/* Product Details Modal */}
//       {selectedProduct && (
//         <div className="modal">
//           <div className="modal-content">
//             <span className="close" onClick={handleModalClose}>
//               &times;
//             </span>
//             <h2>{selectedProduct.name}</h2>
//             <img src={selectedProduct.image} alt={selectedProduct.name} />
//             <p>Description: {selectedProduct.description}</p>
//             <p>Price: ${selectedProduct.price}</p>
//             <p>Number in Stock: {selectedProduct.stock}</p>
//             <p>Category: {selectedProduct.category}</p>
//             <button onClick={() => handleOrder(selectedProduct)}>Order</button>
//           </div>
//         </div>
//       )}

//       {/* Shopping Cart */}
//       <div>
//         <h2>Shopping Cart</h2>
//         {cart.map((item) => (
//           <div key={item.id}>
//             <p>{item.name}</p>
//             <p>Price: ${item.price}</p>
//             <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
//           </div>
//         ))}
//         <p>Total Price: ${totalPrice}</p>
//       </div>
//     </div>
//   );
// };

// export default Products;

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
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  const handleOrder = (product) => {
    setCart([...cart, product]);
    setTotalPrice((prevTotal) => prevTotal + product.price);
  };

  const handleRemoveFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    setTotalPrice((prevTotal) => prevTotal - product.price);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl mb-8">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 p-4 rounded cursor-pointer transition duration-300 transform hover:shadow-lg"
            onClick={() => handleProductClick(product)}
          >
            <img src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2">Price: ${product.price}</p>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition"
              onClick={() => handleOrder(product)}
            >
              Order
            </button>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2 className="text-3xl mb-4">{selectedProduct.name} Details</h2>
            {/* <h2>{selectedProduct.name}</h2> */}
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-auto mb-4 rounded" />
            <p>Description: {selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <p>Number in Stock: {selectedProduct.stock}</p>
            <p>Category: {selectedProduct.category}</p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded" onClick={() => handleOrder(selectedProduct)}>
              Order
            </button>
          </div>
        </div>
      )}

      {/* Shopping Cart */}
      <div className="mt-8">
        <h2 className="text-3xl mb-4">Shopping Cart</h2>
        {cart.map((item) => (
          <div key={item.id} className="border-b border-gray-300 pb-4 mb-4">
            <p className="text-lg font-semibold mb-2">{item.name}</p>
            <p className="text-gray-700 mb-2">Price: ${item.price}</p>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              onClick={() => handleRemoveFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))}
        <p className="text-xl font-semibold mt-4">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Products;

