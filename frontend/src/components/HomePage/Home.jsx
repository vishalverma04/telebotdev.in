import React from 'react';
import HeaderImage from '../../assets/telebotdev.webp'; // Sample image path
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 flex flex-col md:flex-row items-center justify-between px-10 md:px-20">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900">Automate Your Telegram Bots Easily with TeleBotDev</h1>
          <p className="text-lg text-gray-600">Manage, deploy, and monitor your Telegram bots seamlessly with our intuitive platform.</p>
          <Link to="/plans" className="bg-yellow-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-yellow-600">Get Started for Free</Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src={HeaderImage} alt="TeleBotDev Automation" className="w-full" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-900">Why Choose TeleBotDev?</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Easy to Use</h3>
            <p className="mt-4 text-gray-600">Create, deploy, and manage bots with a user-friendly interface.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Secure & Reliable</h3>
            <p className="mt-4 text-gray-600">Ensure safe communication and data protection for all your bot needs.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-blue-600">Real-Time Analytics</h3>
            <p className="mt-4 text-gray-600">Track and analyze bot performance with real-time data.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-blue-900">How It Works</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">1</div>
            <p className="mt-4 text-lg text-gray-600">Sign up for an account</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">2</div>
            <p className="mt-4 text-lg text-gray-600">Create or connect your Telegram bot</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl font-bold">3</div>
            <p className="mt-4 text-lg text-gray-600">Configure and launch your bot</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <Link to="/signup" className="mt-8 bg-yellow-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-yellow-600">Sign Up Now</Link>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-center text-white">
        <p>© 2024 TeleBotDev. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
