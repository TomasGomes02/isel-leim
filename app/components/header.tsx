import React from 'react';

interface Header {
    title: string;
    icon_path: string;
  }

const Head: React.FC<Header> = ({title, icon_path}) => {
  return (
    <>
    <title>{title}</title>
    <p>{icon_path}</p>
    <link rel="icon" href={icon_path} />
   </>
  );
};

export default Head;