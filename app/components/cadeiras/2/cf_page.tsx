import React from 'react';
import { IDocente } from '../../interface_docente';
import Sidebar from '../../sidebar';
import DefaultProps from '../../default_props';
import ContentSections from '../../content_sections';

const CFPage = () => {
  const docentes: IDocente[] = [
    {
      name: 'Professor John Doe',
      rating: 4.5,
      description: 'John Doe is an experienced professor with a strong background in mathematics and engineering.',
    },
    // Add more docentes as needed
  ];

  const sections = [
    {
      id: 'div1',
      title: 'Computação Física',
      description: 'This is the first part of the course.',
      uc: '',
      ctx: '',
    },
    {
      id: 'div2',
      title: 'Prática',
      description: 'This is the second part of the course.',
      uc: '',
      ctx: '',
    },
    {
      id: 'div3',
      title: 'Teórica',
      description: 'This is the third part of the course.',
      uc: '',
      ctx: '',
    },
  ];

  return (
    <>
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
    </>
  );
};

export default CFPage;
