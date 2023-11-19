import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter(); // Get the router object
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   

    try {
        const response = await fetch('https://kcf-onlineshop.onrender.com/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
            role: 'admin',
          }),
        });
    
        if (!response.ok) {
          // Handle unsuccessful signup
        //   alert('Failed to sign up "Existing Email"');
        alert('Email already exists. Please use a different email.');

        } else {
          // Successful signup
          alert('Successfully signed up');
          // Clear the form after successful signup
          setFormData({
            username: '',
            email: '',
            password: '',
          });
          // Redirect to the login page using the router object
          router.push('/login');
        }
      } catch (error) {
        console.error('Error signing up:', error.message);
        // Show an alert if the error is related to an existing email
        if (error.message.toLowerCase().includes('email')) {
          alert('Email already exists. Please use a different email.');
        }
        // You may want to handle other types of errors here
      }
    };

  return (
  

    
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <div className="bg-white dark:bg-gray-700 p-8 rounded-md shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-black dark:text-white">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-black dark:text-white">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
  );
};

export default Signup;
