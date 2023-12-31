import React from 'react';
import { motion } from 'framer-motion';
import Heri from '../../assets/Heri.png';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const Royal = () => {
  const [containerRef, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-0 px-4 md:px-24 mt-16'>
      <motion.div
        className="flex justify-center items-center"
        variants={imageVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} 
        ref={containerRef} 
      >
        <img src={Heri} alt='heritage' className="max-w-full h-auto w-64 md:w-full rounded-lg hover:scale-105 transition-all duration-300" />
      </motion.div>

      <motion.div
        className="md:pr-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"} 
        ref={containerRef} 
      >
        <h2 className="text-center bg-gradient-to-r from-rose-800 to-blue-800 text-transparent font-bold bg-clip-text text-[3rem] lg:text-[4rem] mb-2">Royal Heritage International Enterprises</h2>
        <p className="text-center md:text-left font-[Open Sans] font-medium"> 
          is one of the leading provider of logistics, haulage, telecom services in Nigeria, including event management solutions - we specialize in delivering
          top-notch services to our clients, helping them streamline their operations and achieve their business goals. With our extensive industry experience and
          a dedicated team of professionals, we pride ourselves on delivering exceptional results and exceeding customer expectations. Whether you need efficient
          transportation solutions, reliable telecom services, or expert event management, Royal is your trusted partner for all your business needs. At the heart of our operational philosophy lies an
          unwavering dedication to supporting diverse industries. We comprehend the intricacies of various sectors and tailor our services to their unique demands. From the dynamic realm of technology to
          the intricate tapestry of fashion, from the essentials of food to the complexities of machinery.
        </p>
        <div className='mt-12'>
          <Link to="">
            <button className="bg-blue-950 text-white md:px-7 px-4 py-2 text-lg rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300">Learn More</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Royal;
