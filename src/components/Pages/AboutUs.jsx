import React from 'react';
import MainLayout from '../Layouts/MainLayouts';
import { Fa500Px, FaAccessibleIcon, FaAccusoft, FaAd } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row h-screen">
        {/* Left Banner Image */}
        <div className="md:w-1/2">
          <img src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg?size=626&ext=jpg&ga=GA1.2.149556823.1683788678&semt=ais" alt='about' className="w-full h-full object-cover" />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 p-5 md:p-10 mt-5 md:mt-24">
          <div className="mb-4">
            <Fa500Px className="inline-block mr-2" />
            Content 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="mb-4">
            <FaAccessibleIcon className="inline-block mr-2" />
            Content 2 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="mb-4">
            <FaAccusoft className="inline-block mr-2" />
            Content 3 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <div>
            <FaAd className="inline-block mr-2" />
            Content 4 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUs;
