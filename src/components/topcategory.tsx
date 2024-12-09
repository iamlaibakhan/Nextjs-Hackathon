import React from 'react';


interface Category {
  image: string;
  name: string;
  product: string;
}

export default function Topcategory() {
  const Data: Category[] = [
    {
      image: '/topcategory/Category1.png',
      name: 'Wing Chair',
      product: '1334',
    },
    {
      image: '/topcategory/Category2.png',
      name: 'Wooden Chair',
      product: '23432',
    },
    {
      image: '/topcategory/Category3.png',
      name: 'Desk Chair',
      product: '3232',
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-48 py-8">
      <div>
        <h1 className="text-2xl font-bold mb-4 pl-4">Top Categories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {Data.map((val: Category, i: number) => (
            <div
              key={i}
              className="group relative h-80 bg-cover bg-center flex flex-col items-center rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${val.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-opacity duration-300"></div>

              
              <div className="absolute bottom-0 left-0 w-full h-1/4 px-4 py-2 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                <h2 className="font-semibold text-base truncate">{val.name}</h2>
                <span className="text-sm font-medium truncate">{val.product} products</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}