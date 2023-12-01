// import React, { useState } from 'react';
// import Link from 'next/link';

// const Header = ({ user, onLogout }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const loggedIn = user !== null; // Assuming `user` is an object or null

//   return (
//     <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
//       <div>
//         <Link href="/products">
//           <button className="text-white font-bold">Home</button>
//         </Link>
//       </div>
//       <div className="flex items-center space-x-4">
//         <Link href="/products">
//           <button className="text-white">Cart</button>
//         </Link>
//         {loggedIn ? (
//           <div className="relative">
//             <button onClick={toggleDropdown} className="text-white">
//               {user.name}
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute top-10 right-0 bg-white p-2 rounded shadow-md">
//                 <button onClick={onLogout} className="block text-gray-800 hover:bg-gray-200 w-full text-left">
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <Link href="/login">
//             <button className="text-white">Login</button>
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import Link from 'next/link';
import { AuthProvider } from './authContext';
import { useAuth } from "./authContext";

const Header = () => {
  const auth = useAuth();
  console.log('Auth context:', auth);
  const user = useAuth();
  const logout = useAuth();
  // const { user, logout } = useAuth(); 

  const isDropdownOpen = false; 

  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>
        <Link href="/products">
          <button className="text-white font-bold">Home</button>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="/products">
          <button className="text-white">Cart</button>
        </Link>
        {user ? (
          <div className="relative">
            <button onClick={() => { /* Add your logic for toggling dropdown */ }} className="text-white">
              {user.name}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-10 right-0 bg-white p-2 rounded shadow-md">
                <button onClick={logout} className="block text-gray-800 hover:bg-gray-200 w-full text-left">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <button className="text-white">Login</button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;

