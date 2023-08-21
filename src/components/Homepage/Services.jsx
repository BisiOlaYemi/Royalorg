import React from 'react';

const Services = () => {
  return (
    <div className="py-16 mt-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Explore Our Services</h2>
        <p className="text-gray-600 text-center mb-12">
          Transmax is the world's leading global logistics supplier. We support industry and trade in the global exchange of merchandise through land, air, and ocean transport.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-xl font-semibold mb-4">Land Transport</h3>
              <ul className="text-gray-600 list-disc pl-4">
                <li>Part Loads & Full Loads</li>
                <li>Multimodal Solutions</li>
                <li>Intermodal Solutions</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-xl font-semibold mb-4">Air Freight</h3>
              <ul className="text-gray-600 list-disc pl-4">
                <li>General Air Freight Products</li>
                <li>Charter Services</li>
                <li>Air Cargo Solutions</li>
                <li>Intermodal Solutions</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-xl font-semibold mb-4">Ocean Freight</h3>
              <ul className="text-gray-600 list-disc pl-4">
                <li>Less-than-container Load</li>
                <li>Full Container Load</li>
                <li>Intermodal Solutions</li>
                <li>Intermodal Solutions</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 transform hover:scale-105 transition-all">
            <div className="flex flex-col items-center justify-center h-full">
              <h3 className="text-xl font-semibold mb-4">Ocean Freight</h3>
              <ul className="text-gray-600 list-disc pl-4">
                <li>Less-than-container Load</li>
                <li>Full Container Load</li>
                <li>Intermodal Solutions</li>
                <li>Intermodal Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
