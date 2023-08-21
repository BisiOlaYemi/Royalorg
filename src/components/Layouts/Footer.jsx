import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-white">
      <div className="absolute inset-0 opacity-80"></div>
      <div className="relative container mx-auto py-10">
        <div className="flex justify-center">
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-400">
              About Us
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
            <span className="text-gray-400">|</span>
            <a href="#" className="hover:text-gray-400">
              Contact Us
            </a>
          </div>
        </div>
        <hr className="border-t border-gray-400 my-4" />
        <div className="flex justify-center items-center space-x-4 mt-12 mb-12 ">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-gray-400">
        All rights reserved &copy; 2023 Royal Heritage Intl Enterprises
      </div>
    </footer>
  );
};

export default Footer;
