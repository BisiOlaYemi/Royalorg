import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { useInView } from 'react-intersection-observer';

const ImageCard = () => {
  const images = [
    'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyNHx8TG9zZ2lzdGljcyUyQyUyMGhhdWxhZ2UlMkMlMjB0ZWxlY29tJTIwc2VydmljZXMlMkMlMjBldmVudCUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNjkyNTQ1NTA5fDA&ixlib=rb-4.0.3&q=80&w=1080', 
    'https://images.unsplash.com/photo-1559297434-fae8a1916a79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxvZ2lzdGljc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/id/175754723/photo/businessman-with-digital-tablet-in-warehouse.jpg?s=612x612&w=0&k=20&c=WkdVbm7XRKDGnmX-YU4FtO-Wgl3Xq2slIbBNqKJHhGI=',
    'https://media.istockphoto.com/id/1346348369/photo/telecommunication-tower-with-connection-points.jpg?s=612x612&w=0&k=20&c=_MOmhOVa5FYJqwur28Zk6phuQOvRz7WBhXGfXE8bSdk=',
    'https://media.istockphoto.com/id/1385540374/photo/afro-woman-using-smartphone-on-avenida-paulista.jpg?s=612x612&w=0&k=20&c=NlBwvGn6c70hRd2lYbVP6Fes7ksA9YLUCYB3FiF19Os=',
    'https://media.istockphoto.com/id/1154232730/photo/wedding-decor-rustic-dining-table.jpg?s=612x612&w=0&k=20&c=5jkhCsCL5Jz6KapC_j4n9mOx2CoexcKQTjFVa1Td6-0=',
  ];
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="flex justify-center items-center mt-12">
      <motion.div
            className="p-6 transform hover:scale-105 transition-all"
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4"
          >
            <img src={image} alt="list of" className='rounded-lg hover:scale-105 transition-all duration-300' />
          </div>
        ))}
      </div>
      </motion.div>
    </div>
  );
};

export default ImageCard;
