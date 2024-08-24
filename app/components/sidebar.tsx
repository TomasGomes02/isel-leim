import React from 'react';
import Docente from './docente';
import { IDocente } from './interface_docente';  // Import the interface

interface SidebarProps {
  title: string;
  description: string;
  docentes: IDocente[];  // Changed to accept single or array
}

const Sidebar: React.FC<SidebarProps> = ({ title, description, docentes }) => {
  return (
    <div className="w-1/4 pl-12">
      <div className="top-0 bg-gray-400 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p>{description}</p>
        <div className="mt-8  mb-4">
          {docentes.map((docente, index) =>
            <Docente
              key={index}
              name={docente.name}
              rating={docente.rating}
              description={docente.description}
            />
          ) 
          }
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
