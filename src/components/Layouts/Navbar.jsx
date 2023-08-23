import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="relative z-50">
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="RoyalHeritage" style={{ width: '170px', height: 'auto' }} />
        </Link>
        <HiMenuAlt3
          onClick={handleNavToggle}
          className="z-20 text-gray-950 font-bold cursor-pointer lg:hidden"
          size={25}
        />
        <ul className="hidden lg:flex space-x-8">
          <li className="font-semibold font-[Open Sans] text-xl text-gray-800">
            <Link to="/" className="hover:text-gray-800">
              Home
            </Link>
          </li>
          <li className="font-semibold font-[Poppins] text-xl text-gray-800">
            <Link to="/Aboutus" className="hover:text-gray-800">
              About Us
            </Link>
          </li>
          <li className="font-semibold font-[Poppins] text-xl text-gray-800">
            <Link to="/services" className="hover:text-gray-800">
              Services
            </Link>
          </li>
          <li className="font-semibold font-[Poppins] text-xl text-gray-800">
            <Link to="/contact" className="hover:text-gray-800">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      {navOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
          <ul className="flex flex-col space-y-4">
            <li className="font-semibold text-xl text-white">
              <Link to="/" className="hover:text-green-800">
                Home
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/AboutUs" className="hover:text-green-800">
                About Us
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/services" className="hover:text-green-800">
                Services
              </Link>
            </li>
            <li className="font-semibold text-xl text-white">
              <Link to="/contact" className="hover:text-green-800">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
