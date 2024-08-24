import React from 'react';
import { IDocente } from './interface_docente';  // Import the interface

const Docente: React.FC<IDocente> = ({ name, rating, description }) => {
  return (
    <div className="bg-gray-300 p-4 mb-6 rounded-lg">
      <h3 className="text-lg">{name}</h3>
      <div className="text-yellow-500 font-bold mb-2">Rating: {rating}/5</div>
      <p>{description}</p>
    </div>
  );
};

export default Docente;