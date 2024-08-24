import React from 'react';

interface DefaultProps {
  title: string;
  description: string;
}

const DefaultProps: React.FC<DefaultProps> = ({ title, description }) => {
  return (
    <div className="p-8 bg-gray-300 rounded-lg shadow-lg mx-auto mb-10">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default DefaultProps;
