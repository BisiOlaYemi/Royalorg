import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import heritage1 from '../../assets/heritage1.png';
import heritage2 from '../../assets/heritage2.png';
import heritage3 from '../../assets/heritage3.png';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full sm:m12 mt-24" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6 p-8">
        <p className="text-[2.5rem] text-center md:text-left lg:text-[3.5rem] font-bold tracking-wide text-headingColor md:w-[85%] md:leading-tight">
          <span className="bg-gradient-to-r from-purple-500 to-amber-500 text-transparent bg-clip-text text-[3rem] lg:text-[4rem]">Streamline</span>  Your Logistics
        </p>
        <p className="text-center md:text-justify text-black text-lg md:w-[85%] flex flex-wrap gap-1 font-medium">
        Efficiently manage your haulage, telecom services, and events with Royal heritage Intl Enterprise's comprehensive solutions.
        </p>
        <div className="text-center md:w-[85%] flex flex-wrap gap-1 md:gap-3">
          <Link to="">
            <button className="bg-blue-950 text-white md:px-7 px-4 py-3 text-lg rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300">Get Started</button>
          </Link>
          <Link to="">
            <button className="border text-gray-950 font-semibold md:px-7 px-4 py-3 text-lg rounded-full hover:bg-gray-400 hover:scale-105 transition-all duration-300">Our Services</button>
          </Link>
        </div>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <Carousel
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          stopOnHover={false}
          transitionTime={500}
          className="w-full h-auto md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto"
        >
          <div>
            <img src={heritage1} alt="Slide 1" />
          </div>
          <div>
            <img src={heritage2} alt="Slide 2" />
          </div>
          <div>
            <img src={heritage3} alt="Slide 3" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
