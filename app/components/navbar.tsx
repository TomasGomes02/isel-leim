"use client";

import React, { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import MAEPage from './cadeiras/1/mae_page';
import MAVPage from './cadeiras/1/mav_page';
import MDPPage from './cadeiras/1/mdp_page';
import SAPage from './cadeiras/1/sa_page';
import TIPage from './cadeiras/1/ti_page';
import CFPage from './cadeiras/2/cf_page';
import MCGPage from './cadeiras/2/mcg_page';
import MOPPage from './cadeiras/2/mop_page';
import PDSPage from './cadeiras/2/pds_page';
import RPSPage from './cadeiras/2/rps_page';
import CPSPage from './cadeiras/3/cps_page';
import EGPPage from './cadeiras/3/egp_page';
import FSOPage from './cadeiras/3/fso_page';
import MSSNPage from './cadeiras/3/mssn_page';
import PCMPage from './cadeiras/3/pcm_page';
import AAVPage from './cadeiras/4/aav_page';
import CSMPage from './cadeiras/4/csm_page';
import IASAPage from './cadeiras/4/iasa_page';
import IECDPage from './cadeiras/4/iecd_page';
import RCPPage from './cadeiras/4/rcp_page';
import AAPage from './cadeiras/5/aa_page';
import IPMPage from './cadeiras/5/ipm_page';
import PIVPage from './cadeiras/5/piv_page';
import RIPage from './cadeiras/5/ri_page';
import SBDPage from './cadeiras/5/sbd_page';
import DAMPage from './cadeiras/6/dam_page';
import IAVPage from './cadeiras/6/iav_page';
import ProjetoPage from './cadeiras/6/projeto_page';
import SMIPage from './cadeiras/6/smi_page';
import HomePage from './home_page';

const Navbar = ({ setSelectedComponent } : {setSelectedComponent: Dispatch<SetStateAction<string | null>>}) => {

    type Semester = 'Página Inicial' | '1º Semestre' | '2º Semestre' | '3º Semestre' | '4º Semestre' | '5º Semestre' | '6º Semestre';
    //const [selectedComponent, setSelectedComponent] = useState<string | null>('Home');
    const [hoveredButton, setHoveredButton] = useState<Semester | null>(null);

    const handleOptionClick = (option: string) => {
      setSelectedComponent(option);
    }

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
                  onClick={() => item === 'Página Inicial' && handleOptionClick('Home')}
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
      </>
    );
  };

export default Navbar;
