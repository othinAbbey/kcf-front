import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from './header';

const Home = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8" style={{
      backgroundImage: "url('/background.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      {router.pathname !== '/' && <Header />}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">
          Welcome to KCF-Online Shopping
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Discover a wide range of products at your fingertips.
        </p>
      </section>

      {/* Features Section */}
      <section className="mt-12 grid gap-8 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2 text-green-700">
            Create an Account
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Easily create an account to access exclusive features and follow up on your shoppings.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2 text-purple-700">
            Explore Products
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Browse through a diverse range of products with detailed information.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2 text-orange-700">
            Easy Shopping Cart
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Effortlessly manage your shopping cart and orders.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Ready to get started?
        </p>
        <a
          href="/signup"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition inline-block"
        >
          Sign Up Now
        </a>

        <br />

        <p className="mt-6">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-blue-500 hover:underline transition"
          >
            Log In
          </a>
        </p>
      </section>
    </main>
  );
};

export default Home;
