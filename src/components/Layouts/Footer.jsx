import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white mt-24">
      <div className="absolute inset-0 opacity-80"></div>
      <div className="relative container mx-auto py-10">
        <div className="flex justify-center">
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="#" className="hover:text-gray-400">
              About Us
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="#" className="hover:text-gray-400">
              Services
            </Link>
            <span className="text-gray-400">|</span>
            <Link to="#" className="hover:text-gray-400">
              Contact Us
            </Link>
          </div>
        </div>
        <hr className="border-t border-gray-400 my-4" />
        <div className="flex justify-center items-center space-x-4 mt-12 mb-12 ">
          <Link to="#" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </Link>
          <Link to="#" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-400">
        All rights reserved &copy; 2023 Royal Heritage Intl Enterprises
      </div>
    </footer>
  );
};

export default Footer;
