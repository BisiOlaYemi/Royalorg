import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { useInView } from 'react-intersection-observer';


const Include = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
      <div className="bg-gray-300 flex flex-col md:flex-row h-screen">
        <div className="md:w-1/2 p-5 md:p-10 mt-5 md:mt-24">
          <motion.div
            className=" p-6 transform hover:scale-105 transition-all"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <h1 className='text-3xl text-gray-800 mb-2 font-bold'>Vision</h1>
          <p className=''>
          To be the leading event management company that provides comprehensive services,
          from planning and coordination to execution and post-event evaluation, with a focus on haulage, telecom,
          and logistics. We strive to create memorable and successful events that exceed our clients' expectations.
          We are a full-service event management company that can help you with every aspect of your event,
          from planning and coordination to execution and post-event evaluation. We have a team of experienced
          professionals who are experts in event planning and management, and we are committed to providing our
          clients with the highest level of service. We understand that every event is unique, and we tailor our
          services to meet the specific needs of our clients. We are committed to working with you to create an
          event that is both memorable and successful.
          </p>
          <Link to="/contact">
            <button className="bg-blue-950 text-white md:px-7 px-4 py-2 text-lg rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 mt-12">Connect</button>
          </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2">
          <img src="https://img.freepik.com/free-photo/beautiful-pink-decorated-wedding-serving-with-centerpiece-lightening-candles_8353-10052.jpg?size=626&ext=jpg&ga=GA1.1.149556823.1683788678&semt=ais"
          alt='about' 
          className="w-full h-full object-cover" />
        </div>

      </div>
    
  );
};

export default Include;
