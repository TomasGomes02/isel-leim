import React from 'react';
import DefaultProps from '../../default_props';

const IPMPage = () => {
  const scrollToDiv = (divId: string) => {
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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

      {/* Div 1 */}
      <div id="div1">
        <DefaultProps
          title="Sensores e Atuadores"
          description="This is the first part of the course."
        />
      </div>

      {/* Div 2 */}
      <div id="div2">
        <DefaultProps
          title="Prática"
          description="This is the second part of the course."
        />
      </div>

      {/* Div 3 */}
      <div id="div3">
        <DefaultProps
          title="Teórica"
          description="This is the third part of the course."
        />
      </div>
    </div>
  );
};

export default IPMPage;
