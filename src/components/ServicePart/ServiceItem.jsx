import React from 'react';
import { RiTruckFill, RiCalendarEventFill } from 'react-icons/ri';
import { BsAirplaneFill } from 'react-icons/bs';
import { FaSatelliteDish } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceItem = () => {
  return (
    <div className="py-16 mt-8">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Services</h2>
        <p className="text-black font-medium text-xl text-center mb-12">
        We have a proven track record of success in these industries, and we believe that we can offer you a valuable partnership.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-pink-200 rounded-lg shadow-md p-6 hover:bg-gray-50 transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center justify-center h-full">
                <RiTruckFill className="text-3xl mb-2 text-sky-700" />
              <h3 className="text-xl text-sky-700 font-semibold mb-4">Logistics </h3>
              <ul className="text-green-600 list-disc pl-4">
                <li>Part Loads & Full Loads</li>
                <li>Multimodal Solutions</li>
                <li>Intermodal Solutions</li>
                <li>Land Transport</li>
                <li>Inventory management</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-200 rounded-lg shadow-md p-6 hover:bg-gray-50 transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center justify-center h-full">
                <BsAirplaneFill className="text-3xl mb-2 text-sky-700" />
              <h3 className="text-xl text-sky-700 font-semibold mb-4">Haulage </h3>
              <ul className="text-green-600 list-disc pl-4">
                <li>General Air Freight Products</li>
                <li>Charter Services</li>
                <li>Air Cargo Solutions</li>
                <li>Intermodal Solutions</li>
                <li>Hauling waste to landfills</li>
              </ul>
            </div>
          </div>

          <div className="bg-pink-200 rounded-lg shadow-md p-6 hover:bg-gray-50 transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center justify-center h-full">
                <FaSatelliteDish className="text-3xl mb-2 text-sky-700" />
              <h3 className="text-xl text-sky-700 font-semibold mb-4">Telecom</h3>
              <ul className="text-green-600 list-disc pl-4">
                <li>Voice services</li>
                <li>Cloud-based telecoms</li>
                <li>Internet-based services</li>
                <li>Internet-based services</li>
              </ul>
            </div>
          </div>
          <div className="bg-pink-200 rounded-lg shadow-md p-6 hover:bg-gray-50 transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center justify-center h-full">
                <RiCalendarEventFill className="text-3xl mb-2 text-sky-700" />
              <h3 className="text-xl text-sky-700 font-semibold mb-4">Event Management</h3>
              <ul className="text-green-600 list-disc pl-4">
                <li>On-site management</li>
                <li>Evaluation</li>
                <li>Event Planning</li>
                <li>booking vendors</li>
                <li>venue rental & catering</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
      <Link to="/contact">
            <button className="bg-blue-950 text-white md:px-7 px-4 py-2 text-lg rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 mt-8">Get Service</button>
          </Link>
      </div>
    </div>
  );
};

export default ServiceItem;
