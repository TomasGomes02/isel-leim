// components/ContentSections.tsx
import React from 'react';
import Link from 'next/link';
import DefaultProps from './default_props';  // Ensure the import path is correct

interface Section {
  id: string;
  title: string;
  description: string;
  uc: string;  // Unique code or identifier for the URL
  ctx: string; // Context or additional information
}

interface ContentSectionsProps {
  sections: Section[];
}

const ContentSections: React.FC<ContentSectionsProps> = ({ sections }) => {
  return (
    <div className="w-3/4 flex flex-col max-h-2">
      {sections.map(section => (
        <Link
          key={section.id}
          target='_blank'
          href={`/${section.uc}/${section.ctx}`}
          className="flex-1 cursor-pointer"
        >
          <DefaultProps
            title={section.title}
            description={section.description}
          />
        </Link>
      ))}
    </div>
  );
};

export default ContentSections;
