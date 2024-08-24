import React from 'react';
import Docente from './docente';
import { IDocente } from './interface_docente';  // Import the interface

interface SidebarProps {
  title: string;
  description: string;
  docente: IDocente;
}

const Sidebar: React.FC<SidebarProps> = ({ title, description, docente}) => {
  return (
    <div className="w-1/4 pl-12 mb-10">
      <div className="sticky top-0 bg-gray-400 p-4 rounded-lg h-full">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p>{description}</p>
        <div className="mt-8">
          <Docente
            name={docente.name}
            rating={docente.rating}
            description={docente.description}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;