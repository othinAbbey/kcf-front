
// import React, { useEffect, useState } from 'react';
// import CategoryList from "../components/categories";

// const ShoppingCartItem = ({ item, onRemove, onIncrement, onDecrement }) => (
//   <div key={item.id} className="border-b border-gray-300 pb-4 mb-4">
//     <p className="text-lg font-semibold mb-2">{item.name}</p>
//     <p className="text-gray-700 mb-2">Price: ${item.price}</p>
//     <div className="flex items-center mb-2">
//       <button
//         className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition"
//         onClick={() => onDecrement(item)}
//       >
//         -
//       </button>
//       <p className="text-gray-700 mb-0">{item.quantity}</p>
//       <button
//         className="bg-blue-500 text-white px-3 py-1 rounded ml-2 hover:bg-blue-600 transition"
//         onClick={() => onIncrement(item)}
//       >
//         +
//       </button>
//     </div>
//     <button
//       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//       onClick={() => onRemove(item)}
//     >
//       Remove
//     </button>
//   </div>
// );

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [categories, setCategories] = useState([]);
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
//     const fetchCategories = async () => {
//       try {
//         const response = await fetch('https://kcf-onlineshop.onrender.com/categories');
  
//         if (!response.ok) {
//           throw new Error('Failed to fetch categories');
//         }
  
//         const data = await response.json();
//         setCategories(data);
//       } catch (error) {
//         console.error('Error fetching categories:', error.message);
//       }
//     };
//     fetchCategories();
//     fetchProducts();
//   }, []);


  
//   const fetchCategories = async () => {
//     try {
//       const response = await fetch('https://kcf-onlineshop.onrender.com/categories');

//       if (!response.ok) {
//         throw new Error('Failed to fetch categories');
//       }

//       const data = await response.json();
//       setCategories(data);
//     } catch (error) {
//       console.error('Error fetching categories:', error.message);
//     }
//   };

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleModalClose = () => {
//     setSelectedProduct(null);
//   };

//   const handleOrder = (product) => {
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       existingProduct.quantity += 1;
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }

//     setTotalPrice((prevTotal) => prevTotal + product.price);
//   };

//   const handleRemoveFromCart = (product) => {
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct && existingProduct.quantity > 1) {
//       existingProduct.quantity -= 1;
//     } else {
//       setCart(cart.filter((item) => item.id !== product.id));
//     }

//     setTotalPrice((prevTotal) => prevTotal - product.price);
//   };

//   const handleIncrement = (product) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//     setTotalPrice((prevTotal) => prevTotal + product.price);
//   };

//   const handleDecrement = (product) => {
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct && existingProduct.quantity > 1) {
//       setCart((prevCart) =>
//         prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//       );
//       setTotalPrice((prevTotal) => prevTotal - product.price);
//     }
//   };

//   return (
//     <div className="container mx-auto flex flex-wrap">
//        <CategoryList categories={categories} onSelectCategory={(categoryId) => console.log('Selected category:', categoryId)} />

//       <div className="w-full md:w-3/4 p-4">
//         <h2 className="text-3xl mb-8">Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="border border-gray-300 p-4 rounded cursor-pointer transition duration-300 transform hover:shadow-lg"
//               onClick={() => handleProductClick(product)}
//             >
//               <img src={product.image} alt={product.name} className="w-full h-auto mb-4 rounded" />
//               <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//               <p className="text-gray-700 mb-2">Price: ${product.price}</p>
//               <p className="text-gray-500">{product.description}</p>
//               <p className="text-sm text-gray-500 mt-2">Category: {product.category}</p>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition"
//                 onClick={() => handleOrder(product)}
//               >
//                 Order
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="w-full md:w-1/4 p-4">
//         <h2 className="text-3xl mb-4">Shopping Cart</h2>
//         {cart.map((item) => (
//           <ShoppingCartItem
//             key={item.id}
//             item={item}
//             onRemove={handleRemoveFromCart}
//             onIncrement={handleIncrement}
//             onDecrement={handleDecrement}
//           />
//         ))}
//         <div>
//           <h3 className="text-xl font-semibold mt-4">Delivery Locations</h3>
//           {/* Add your input fields, dropdowns, or any other components for delivery locations */}
//         </div>
//         <p className="text-xl font-semibold mt-4">Total Price: ${totalPrice}</p>
//       </div>

//       {selectedProduct && (
//         <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-8 rounded-lg">
//             <h2 className="text-3xl mb-4">{selectedProduct.name} Details</h2>
//             <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-auto mb-4 rounded" />
//             <p>Description: {selectedProduct.description}</p>
//             <p>Price: ${selectedProduct.price}</p>
//             <p>Number in Stock: {selectedProduct.stock}</p>
//             <p>Category: {selectedProduct.category}</p>
//             <div className="flex justify-between mt-4">
//               <button
//                 className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
//                 onClick={() => handleOrder(selectedProduct)}
//               >
//                 Order
//               </button>
//               <button
//                 className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition"
//                 onClick={handleModalClose}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;

import React, { useEffect, useState } from 'react';
import CategoryList from "../components/categories";

const ShoppingCartItem = ({ item, onRemove, onIncrement, onDecrement }) => (
  <div key={item.id} className="border-b border-gray-300 pb-4 mb-4">
    <p className="text-lg font-semibold mb-2">{item.name}</p>
    <p className="text-gray-700 mb-2">Price: ${item.price}</p>
    <div className="flex items-center mb-2">
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded mr-1 hover:bg-blue-600 transition"
        onClick={() => onDecrement(item)}
      >
        -
      </button>
      <p className="text-gray-700 mb-0">{item.quantity}</p>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded ml-1 hover:bg-blue-600 transition"
        onClick={() => onIncrement(item)}
      >
        +
      </button>
    </div>
    <button
      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
      onClick={() => onRemove(item)}
    >
      Remove
    </button>
  </div>
);

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [categories, setCategories] = useState([]);
  
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

    const fetchCategories = async () => {
      try {
        const response = await fetch('https://kcf-onlineshop.onrender.com/categories');
  
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
  
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };
    
    fetchCategories();
    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  const handleOrder = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setTotalPrice((prevTotal) => prevTotal + product.price);
  };

  const handleRemoveFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity -= 1;
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }

    setTotalPrice((prevTotal) => prevTotal - product.price);
  };

  const handleIncrement = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setTotalPrice((prevTotal) => prevTotal + product.price);
  };

  const handleDecrement = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct && existingProduct.quantity > 1) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
      setTotalPrice((prevTotal) => prevTotal - product.price);
    }
  };

  return (
    <div className="container mx-auto flex">
      <CategoryList categories={categories} onSelectCategory={(categoryId) => console.log('Selected category:', categoryId)} />

      <div className="flex-1 p-4">
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
                className="bg-blue-500 text-white px-2 py-1 mt-4 rounded hover:bg-blue-600 transition"
                onClick={() => handleOrder(product)}
              >
                Order
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/4 p-4">
        <h2 className="text-3xl mb-4">Shopping Cart</h2>
        {cart.map((item) => (
          <ShoppingCartItem
            key={item.id}
            item={item}
            onRemove={handleRemoveFromCart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
        <div>
          <h3 className="text-xl font-semibold mt-4">Delivery Locations</h3>
          {/* Add your input fields, dropdowns, or any other components for delivery locations */}
        </div>
        <p className="text-xl font-semibold mt-4">Total Price: ${totalPrice}</p>
      </div>

      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-3xl mb-4">{selectedProduct.name} Details</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-auto mb-4 rounded" />
            <p>Description: {selectedProduct.description}</p>
            <p>Price: ${selectedProduct.price}</p>
            <p>Number in Stock: {selectedProduct.stock}</p>
            <p>Category: {selectedProduct.category}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => handleOrder(selectedProduct)}
              >
                Order
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;


