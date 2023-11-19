import Image from 'next/image';

const Home = () => {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-800 p-8">
     
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to KCF-Online Shopping
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Discover a wide range of products at your fingertips.
        </p>
       
      </section>

      {/* Features Section */}
      <section className="mt-12 grid gap-8 lg:grid-cols-3">
        {/* Feature 1 */}
        <div className="text-center">
          {/* <Image
            src="/feature1.svg"
            alt="Feature 1"
            width={100}
            height={100}
            className="mb-4"
          /> */}
          <h2 className="text-xl font-semibold mb-2">Create an Account</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Easily create an account to access exclusive features.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="text-center">
          {/* <Image
            src="/feature2.svg"
            alt="Feature 2"
            width={100}
            height={100}
            className="mb-4"
          /> */}
          <h2 className="text-xl font-semibold mb-2">Explore Products</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Browse through a diverse range of products with detailed information.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="text-center">
          {/* <Image
            src="/feature3.svg"
            alt="Feature 3"
            width={100}
            height={100}
            className="mb-4"
          /> */}
          <h2 className="text-xl font-semibold mb-2">Easy Shopping Cart</h2>
          <p className="text-gray-600 dark:text-gray-400">
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
          href="/signup"  // Update with your signup page route
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
        >
          Sign Up Now
        </a>
        <br />
        <p>
          Already have an account?{' '}
          <a
            href="/login"  // Update with your login page route
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
