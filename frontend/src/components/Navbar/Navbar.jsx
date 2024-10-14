import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp'

const Navbar = ({ isLoggedIn, userName }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Side: Logo and Navigation Links */}
        <div className="flex items-center">
          {/* Logo (Link to Home) */}
          <Link to="/" className="text-xl font-bold mr-6 flex items-center">
            <img src={logo} alt="TeleBotDev Logo" className="w-8 h-8 mr-2" />
            TeleBotDev
          </Link>
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-yellow-500">Home</Link>
            <Link to="/about" className="hover:text-yellow-500">About</Link>
            <Link to="/contact" className="hover:text-yellow-500">Contact Us</Link>
          </div>
        </div>

        {/* Right Side: User Information or Login Link */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <span className="text-lg">Welcome, {userName}!</span>
          ) : (
            <Link to="/login" className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 text-white">
          <div className="space-y-2 px-4 py-4">
            <Link to="/" className="block hover:text-yellow-500">Home</Link>
            <Link to="/about" className="block hover:text-yellow-500">About</Link>
            <Link to="/contact" className="block hover:text-yellow-500">Contact Us</Link>
            <div>
              {isLoggedIn ? (
                <span className="block mt-2">Welcome, {userName}!</span>
              ) : (
                <Link to="/login" className="block bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-md mt-2">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
