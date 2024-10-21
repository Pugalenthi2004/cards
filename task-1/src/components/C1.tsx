import { useState } from 'react';

export default function C1() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full mx-auto shadow-sm border rounded-md p-10 mt-4 hover:shadow-none hover:border-none transition-opacity duration-300 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className='absolute inset-0 w-full h-fit hover:bg-white hover:z-40 rounded-lg p-5 hover:border'>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Title C1</h1>
        <p
          className={`text-gray-600 mt-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
         
        >
          This is the description that appears on hover.
          This is the description that appears on hover.
          This is the description that appears on hover.
        </p>
      </div>
    </div>
  );
};

