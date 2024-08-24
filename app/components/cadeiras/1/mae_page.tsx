import React from 'react';
<<<<<<< HEAD:app/components/mae_page.tsx
import DefaultProps from './default_props';
import Sidebar from './sidebar';
import { IDocente } from './interface_docente';   // Import the interface
=======
import DefaultProps from '../../default_props';

>>>>>>> 7c6c4b9d1426006cd365fcee1167773ef4710904:app/components/cadeiras/1/mae_page.tsx

const MAEPage = () => {

  const docente: IDocente = {
    name: 'Professor John Doe',
    rating: 4.5,
    description: 'John Doe is an experienced professor with a strong background in mathematics and engineering.',
  };

  const scrollToDiv = (divId: string) => {
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <div className="container mx-auto p-8">
      {/* Navigation Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => scrollToDiv('div2')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Prática
        </button>
        <button
          onClick={() => scrollToDiv('div3')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Teórica
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex">
        {/* Left Side Content */}
        <div className="w-3/4 flex flex-col">
          {/* Div 1 */}
          <div id="div1" className="h-full">
            <DefaultProps
              title="Matemática Aplicada às Engenharias"
              description="This is the first part of the course."
            />
          </div>

          {/* Div 2 */}
          <div id="div2" className="h-full">
            <DefaultProps
              title="Prática"
              description="This is the second part of the course."
            />
          </div>

          {/* Div 3 */}
          <div id="div3" className="h-full">
            <DefaultProps
              title="Teórica"
              description="This is the third part of the course."
            />
          </div>
        </div>
        {/* Right Sidebar */}
        <Sidebar
          title="Docentes"
          description="This sidebar can contain additional information, links, or anything else you'd like to include."
          docente={docente}
          />
      </div>
    </div>
    </>
  );
};

export default MAEPage;