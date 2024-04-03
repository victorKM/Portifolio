"use client";

import React from "react";
import Image from 'next/image'

const Technologies = () => {
  return (
    <div className="w-full pb-20 lg:px-17 md:px-15 px-10 font-poppins">
      <div className="text-center md:text-3xl text-2xl font-bold mb-10">
        Technologies
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap lg:w-11/12 justify-center lg:space-x-0 md:space-y-0 space-y-4 -mx-2">
            <div className="lg:w-1/3 md:w-1/2 w-full lg:px-8 md:px-4">
              <div className="px-4 py-5 rounded-lg bg-white bg-opacity-100 text-center h-full shadow-2xl">
                  <div className="md:text-2xl text-lg font-bold mb-5">
                    Web
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-7">
                      <Image src="./javascript.png" width={48} height={48} alt="JavaScript"/>
                      <Image src="./typescript.png" width={48} height={48} alt="TypeScript"/>
                      <Image src="./node.png" width={48} height={48} alt="Node.js"/>
                      <Image src="./react.png" width={48} height={48} alt="React"/>
                      <Image src="./next.png" width={48} height={48} alt="Next.js"/>
                      <Image src="./tailwind.png" width={48} height={48} alt="Tailwind"/>
                      <Image src="./html.png" width={48} height={48} alt="HTML"/>
                      <Image src="./css.png" width={48} height={48} alt="CSS"/>
                    </div>
                  </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full lg:px-8 md:px-4">
              <div className="px-4 py-5 rounded-lg bg-white bg-opacity-100 text-center h-full shadow-2xl">
                  <div className="md:text-2xl text-lg font-bold md:mb-14 mb-10">
                    Database
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-12">
                        <Image src="./postgre.png"  width={128} height={128} alt="PostgreSQL"/>
                        <Image src="./mysql.png"  width={128} height={128} alt="MySQL"/>
                    </div>
                  </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full lg:px-8 md:px-4">
              <div className="px-4 py-5 rounded-lg bg-white bg-opacity-100 text-center h-full lg:mt-0 md:mt-8 mt-0 shadow-2xl"> 
                  <div className="md:text-2xl text-lg font-bold mb-6">
                    Application
                  </div>
                  <div className="flex justify-center items-center pb-2">
                    <div className="grid grid-cols-3 gap-7 pb-4">
                        <Image src="./C.png" width={64} height={64} alt="C"/>
                        <Image src="./C++.png" alt="C++" width={64} height={64}/>
                        <Image src="./python.png" width={64} height={64} alt="Python"/>
                        <Image src="./java.png" alt="Java" width={64} height={64}/>
                        <Image src="./Csharp.png" width={64} height={64} alt="C#"/> 
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Technologies;
