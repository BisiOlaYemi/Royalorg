import React from 'react';
import MainLayout from '../Layouts/MainLayouts';
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <MainLayout>
      <div className=''>
          <img 
            src='https://img.freepik.com/premium-photo/words-with-contact-us-business-concept-idea_352439-1250.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=ais'
            alt='banner' 
            className='w-full h-full object-fit'
          />
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-teal-100 p-8">
          <div className="relative">
            <img
              src="https://img.freepik.com/free-photo/scene-with-minimal-blue-podium_23-2149269983.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=ais"
              alt="Contact"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white p-4">
              <h2 className="text-2xl mb-2">Contact Information</h2>
              <div className="flex items-center mb-2">
                <FaPhone className="mr-2" />
                <span>123-456-7890</span>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarker className="mr-2" />
                <span>123 Main St, City</span>
              </div>
              <div className="flex">
                <FaFacebook className="mr-2" />
                <FaTwitter className="mr-2" />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2  p-8">
          <h1 className="text-3xl mb-4">Get in Touch</h1>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                placeholder="Your Message"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
