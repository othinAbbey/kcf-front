import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://kcf-onlineshop.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }

      // Clear the form after successful login
      setFormData({
        email: '',
        password: '',
      });

      // You may want to handle the success response here (e.g., store the token or redirect to a different page)
    } catch (error) {
      console.error('Error logging in:', error.message);
      // You may want to handle the error here (e.g., show an error message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ... (unchanged code) */}
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 w-full transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
