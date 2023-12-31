import React from 'react';
import MainLayout from '../Layouts/MainLayouts';
import { Link } from 'react-router-dom';
import Include from '../AboutSub/Include';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';


const AboutUs = () => {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row md:h-screen">
        {/* Left Banner Image */}
        <div className="md:w-1/2">
          <img src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=ais"
          alt='about' 
          className="w-full h-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 p-5 md:p-10 mt-5 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className=" p-4"
          >
            <h1 className='text-3xl text-gray-800 mb-2 font-bold'>Core Expertise</h1>
          <p className=''>
          Providing logistics, haulage, telecom services and event management solutions in Nigeria are the main obligation of RHIE, - we specialize in delivering top-notch services to businesses, helping
          our clients to streamline their operations and achieve their business goals. With our extensive industry experience
          and a dedicated team of professionals, we pride ourselves on delivering exceptional results and exceeding
          customer expectations. Whether you need efficient transportation solutions, reliable telecom services, or
          expert event management, Royal is your trusted partner for all your business needs. At the heart of our
          operational philosophy lies an unwavering dedication to supporting diverse industries. We comprehend the
          intricacies of various sectors and tailor our services to their unique demands. From the dynamic realm of
          technology to the intricate tapestry of fashion, from the essentials of food to the complexities of
          machinery.
          </p>
          <Link to="/services">
            <button className="bg-blue-950 text-white md:px-7 px-4 py-2 text-lg rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 mt-12">Learn more</button>
          </Link>
          </motion.div>
        </div>
      </div>
      <Include />
    </MainLayout>
  );
};

export default AboutUs;
