import React, { useState } from 'react';

const Header = ({ user, onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 p-4 text-white flex justify-between items-center">
      <div>
        <button className="text-white font-bold">Home</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white">
          Cart
        </button>
        {user ? (
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white">
              {user.name}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-10 right-0 bg-white p-2 rounded shadow-md">
                <button onClick={onLogout} className="block text-gray-800 hover:bg-gray-200 w-full text-left">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            <button className="text-white">Create Account</button>
            <button className="text-white" >Login</button>
            <button className="text-white">Sign Out</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;