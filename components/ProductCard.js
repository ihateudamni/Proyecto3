import React from 'react';

const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition-transform">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-green-500 text-lg mb-2">${price.toFixed(2)}</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;