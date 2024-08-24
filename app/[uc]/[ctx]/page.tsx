import React from 'react';
import Head from '../../components/header';

export default function Page({ params }: { params: { uc: string, ctx: string } }) {
  
  const { uc, ctx } = params;
  
  return (
    <>
      <Head title={`${uc.toUpperCase()} 2022`} icon_path="../icon.png"/>

      <div className='text-black'>
        My UC: {uc}
        <p className='text-black'>My Ctx: {ctx}</p>
      </div>
    </>
  );
}
