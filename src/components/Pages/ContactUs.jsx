import React from 'react';
import MainLayout from '../Layouts/MainLayouts';
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import emailjs from 'emailjs-com';


const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const serviceId = 'service_v9hahs9'; // Replace with your actual service ID from emailjs
    const templateId = 'template_q62qdcq'; // Replace with your actual template ID from emailjs
    const userId = 'VQcVUnmX0u_VPZ4v8'; // Replace with your actual user ID from emailjs
  
    const formElement = e.target; // Get the form element
  
    emailjs.sendForm(serviceId, templateId, formElement, userId) // Pass the form element
      .then((response) => {
        console.log('Email sent successfully:', response);
        // You can add further actions here, such as showing a success message to the user
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        // You can add further actions here, such as showing an error message to the user
      });
  };
  
  
  return (
    <MainLayout>
      <div className=''>
          <img 
            src='https://media.istockphoto.com/id/1418045846/photo/email-phone-website-contact-us-website-banner-marketing.webp?b=1&s=170667a&w=0&k=20&c=Ln3XGXD1qDcQOu5igbrB7TY2_T-pOI2lGy0y-RHu87Y='
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
              <div className="flex items-center mb-4 mt-12">
                <FaPhone className="mr-2" />
                <span>+234 906 267 9510</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-2" />
                <span>info@royalheritageintenterprises.com</span>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarker className="mr-2" />
                <p>Elephant Cement House Complex, Alausa </p> 
                <p> Wing A, 5th Floor, Ikeja, Lagos State</p>
              </div>
              <div className="flex mt-4">
                <FaFacebook className="mr-2 w-6 h-6" />
                <FaTwitter className="mr-2  w-6 h-6" />
                <FaInstagram className=' w-6 h-6'/>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2  p-8">
          <h1 className="text-3xl mb-4">Get in Touch</h1>
          <form onSubmit={handleSubmit}>
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
                placeholder="me@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="10"
                placeholder="Your Message"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-teal-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
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
