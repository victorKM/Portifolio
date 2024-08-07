'use client';

import React from 'react';
import Image from 'next/image'

const About = () => {
  const handleDownload = (pdfUrl: string) => {
    // Criar um link temporário
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'VictorKikutiCV.pdf';
    link.click();
  };

  return (
    <div id="about" className='pb-20 pt-36 md:px-4 px-6 font-poppins'>
      <div className='grid md:grid-cols-2 grid-cols-1 lg:space-x-0 md:space-x-8 md:space-y-0 space-y-10'>
        <div className='flex lg:justify-end justify-center items-center lg:pr-20'>
          <Image
            src='./avatar.jpeg'
            alt=''
            width={0}
            height={0}
            className='md:w-96 md:h-96 w-56 h-56 rounded-full'
          />
        </div>
        <div className='space-y-6 lg:w-4/5 w-11/12 flex flex-col justify-center'>
          <div className='lg:text-xl md:text-lg text-lg text-black text-opacity-40'>
            Computer Science Student
          </div>
          <div className='lg:text-5xl md:text-3xl text-3xl'>
            I&apos;m <strong className='text-mid-blue'>Victor Kikuti Maceron</strong>
          </div>
          <div className='lg:text-xl md:text-lg text-lg'>
            I am a Computer Science student at the University of São Paulo. I
            enjoy working in teams, as well as being proactive and curious to
            learn new technologies.
          </div>
          <div className='font-bold hover:cursor-pointer lg:space-x-4 md:space-x-2 space-x-1'>
            <div
              className='bg-light-blue md:text-md text-sm inline-block lg:px-6 md:px-5 px-3 md:py-3 py-3 rounded-md transition-transform transition duration-500 
              transform hover:scale-105 text-white'
              onClick={() => handleDownload('https://drive.usercontent.google.com/u/1/uc?id=1b3mbzEYDQOga_o1bac0T8kVIJGLAwBNe&export=download')}
            >
              Download CV
            </div>
            <div
              className='bg-light-blue md:text-md text-sm inline-block lg:px-6 md:px-5 px-3 md:py-3 py-3 rounded-md transition-transform 
              transition duration-500 transform hover:scale-105 text-white'
              onClick={() => handleDownload('https://drive.usercontent.google.com/u/1/uc?id=1nsqbKwxZkPcPLLgOItykyJ3oq0hkwZor&export=download')}
            >
              Download CV(en)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
