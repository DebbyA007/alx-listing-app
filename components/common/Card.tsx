import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="font-bold text-lg mt-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
