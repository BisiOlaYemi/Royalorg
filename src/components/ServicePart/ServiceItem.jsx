import React from 'react';

const services = [
  { title: 'Logistics', description: 'Efficient transportation and supply chain solutions.' },
  { title: 'Haulage', description: 'Safe and reliable transportation of goods.' },
  { title: 'Telecom', description: 'Cutting-edge communication technology services.' },
  { title: 'Event Management', description: 'Expert planning and execution of events.' },
];

const Services = () => {
  return (
    <div className=" py-10 mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
