"use client";

import React, { useState } from 'react';
import Image from 'next/image';

import MAEPage from './mae_page';
import SMIPage from './smi_page';
import AAPage from './aa_page';

const Navbar = () => {

    type Semester = '1º Semestre' | '2º Semestre' | '3º Semestre' | '4º Semestre' | '5º Semestre' | '6º Semestre';
    const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
    const [hoveredButton, setHoveredButton] = useState<Semester | null>(null);

      const handleOptionClick = (option: string) => {
        switch (option) {
          case 'MAE':
            setSelectedComponent('MAE');
            break;
          case 'SMI':
            setSelectedComponent('SMI');
            break;
          case 'AA':
            setSelectedComponent('AA');
            break;
          default:
            setSelectedComponent(null);
            break;
        }
      };
    
      const renderComponent = () => {
        switch (selectedComponent) {
          case 'MAE':
            return <MAEPage />;
          case 'SMI':
            return <SMIPage />;
          case 'AA':
            return <AAPage />;
          default:
            return <p>Select an option to view the component</p>;
        }
      };

      const options: { [key: string]: string[] } = {
      '1º Semestre': ['MAE', 'MDP', 'SA', 'MAV', 'TI'],
      '2º Semestre': ['MCG', 'RPS', 'PDS', 'CF', 'MOP'],
      '3º Semestre': ['CPS', 'FSO', 'PCM', 'MSSN', 'EGP'],
      '4º Semestre': ['RCP', 'CSM', 'IASA', 'IECD', 'AAV'],
      '5º Semestre': ['PIV', 'RI', 'SBD', 'AA', 'IPM'],
      '6º Semestre': ['SMI', 'DAM', 'IAV', 'Projeto'],
    };
  
    const menuItems = [
      'Página Inicial',
      '1º Semestre',
      '2º Semestre',
      '3º Semestre',
      '4º Semestre',
      '5º Semestre',
      '6º Semestre',
    ];
  
    return (
        <>
      <nav className="p-4 navbar text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          {/* Left Side: Logo and Menu Items */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Image
              src="/images/logo.png" // Path relative to the public directory
              alt="Logo"
              width={80}
              height={50}
              className="mr-14"
            />
  
            {/* Navigation Menu */}
            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="menu-item relative"
                  onMouseEnter={() => item !== 'Página Inicial' && setHoveredButton(item as Semester)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <a href="#" className="hover:text-gray-400">
                    {item}
                  </a>
                  {hoveredButton === item && options[item as Semester] && (
                    <ul className="submenu absolute left-0 bg-gray-700 text-gray-500 rounded shadow-lg">
                      {options[item as Semester]?.map((option, i) => (
                        <li
                        key={i}
                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                        onClick={() => handleOptionClick(option)} // Call the function on click
                      >
                        {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Right Side: Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Procurar UC..."
              className="bg-gray-400 text-white placeholder-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white-400"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
      </nav>
      {/* Render the active component */}
      <main className="p-4">
        {renderComponent()}
      </main>
      </>
    );
  };

export default Navbar;
