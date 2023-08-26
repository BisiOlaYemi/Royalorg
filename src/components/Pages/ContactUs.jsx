import React, { useState } from 'react';
import MainLayout from '../Layouts/MainLayouts';
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';



const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://getform.io/f/e3dd5f1d-3e5f-4d36-87b7-057185436ab7", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submission successful!");
          alert("Thank you for Contacting us, Your Message is sent, espect a feedback soon!");
        } else {
          console.log("Form submission failed.");
          alert("Form submission failed. Please try again later.");
        }
      })
      .catch((error) => {
        console.log("Error occurred while submitting the form:", error);
        alert("An error occurred while submitting the form. Please try again later.");
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
          <label htmlFor="user_name" className="block mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="user_email" className="block mb-2 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={8}
            value={formData.message}
            onChange={handleChange}
            className="block w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-indigo-800 font-semibold rounded-md hover:bg-green-800 focus:outline-none focus:border-indigo-800"
          >
            Send Message
          </button>
        </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
