import React from 'react';

const ImageCard = () => {
  const images = [
    'https://images.unsplash.com/photo-1511578314322-379afb476865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyNHx8TG9zZ2lzdGljcyUyQyUyMGhhdWxhZ2UlMkMlMjB0ZWxlY29tJTIwc2VydmljZXMlMkMlMjBldmVudCUyMG1hbmFnZW1lbnR8ZW58MHx8fHwxNjkyNTQ1NTA5fDA&ixlib=rb-4.0.3&q=80&w=1080', 
    'https://media.istockphoto.com/id/1371705328/photo/3d-illustration-of-truck-on-the-road-sea-cargo-and-air-cargo-isolated-all-means-of-cargo.webp?b=1&s=170667a&w=0&k=20&c=VKAQOfxlbugQfelUUMc3T4BuVDKpE6620rZXXACD30Q=',
    'https://media.istockphoto.com/id/1391824162/photo/smart-augmented-reality-ar-warehouse-management-system.webp?b=1&s=170667a&w=0&k=20&c=TW-Wii2OPxigPsW7VAXeBpDhiRIiCrVBe7TT6ASMPG0=',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <div className="flex justify-center items-center mt-12">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4"
          >
            <img src={image} alt="list of" className='rounded-lg' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
