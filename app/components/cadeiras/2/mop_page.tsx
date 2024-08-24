import React from 'react';
import ContentSections from '../../content_sections';  // Adjust import path as needed
import Sidebar from '../../sidebar';  // Ensure the import path is correct
import { IDocente } from '../../interface_docente';  // Ensure the import path is correct

const CPSPage: React.FC = () => {
  const docentes: IDocente[] = [
    {
      name: 'Professor John Doe',
      rating: 4.5,
      description: 'John Doe is an experienced professor with a strong background in mathematics and engineering.',
    },
    {
      name: 'Professor Jane Smith',
      rating: 4.7,
      description: 'Jane Smith specializes in theoretical mathematics and has several publications.',
    },
    // Add more docentes as needed
  ];

  const sections = [
    {
      id: 'div1',
      title: 'Modelação e Programação',
      description: 'This is the first part of the course.',
      uc: 'mop',    // Unique code for URL
      ctx: 'geral',      // Context for URL
    },
    {
      id: 'div2',
      title: 'Prática',
      description: 'This is the second part of the course.',
      uc: 'mop',    // Unique code for URL
      ctx: 'pratica',      // Context for URL
    },
    {
      id: 'div3',
      title: 'Teórica',
      description: 'This is the third part of the course.',
      uc: 'mop',    // Unique code for URL
      ctx: 'teorica',      // Context for URL
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="flex">

        {/* Left Side Content */}
        <ContentSections sections={sections} />

        {/* Right Sidebar */}
          <Sidebar
            title="Docentes"
            description="This sidebar can contain additional information, links, or anything else you'd like to include."
            docentes={docentes}
          />
        
      </div>
    </div>
  );
};

export default CPSPage;
