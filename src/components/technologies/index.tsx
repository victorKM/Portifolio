"use client";

import React from "react";

const Technologies = () => {
  return (
    <div className="w-full pb-20 lg:px-17 md:px-15 px-10">
      <div className="text-center md:text-3xl text-2xl font-bold mb-10">
        Technologies
      </div>
      <div className="flex justify-center">
        <div className="flex flex-wrap lg:w-11/12 justify-center lg:space-x-0 md:space-y-0 space-y-4 -mx-2">
            <div className="lg:w-1/3 md:w-1/2 w-full lg:px-8 md:px-4">
              <div className="px-4 py-5 border-2 border-light-blue text-center h-full">
                  <div className="md:text-2xl text-lg font-bold mb-5">
                    Web
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-3 gap-7">
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" className="w-12 h-12"/>
                      <img src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="TypeScript" className="w-12 h-12" />
                      <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Node.js" className="w-12 h-12" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React" className="w-12 h-12" />
                      <img src="https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png" alt="Next.js" className="w-12 h-12" />
                      <img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="Tailwind" className="w-12 h-12" />
                      <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" className="w-12 h-12" />
                      <img src="https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png" alt="CSS" className="w-12 h-12" />
                    </div>
                  </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full lg:px-8 md:px-4">
              <div className="px-4 py-5 border-2 border-light-blue text-center h-full">
                  <div className="md:text-2xl text-lg font-bold mb-10">
                    Database
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-12">
                        <img src="https://static-00.iconduck.com/assets.00/postgresql-icon-497x512-at6qw0yb.png" alt="PostgreSQL" className="w-32 h-32" />
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-mysql-3628940-3030165.png?f=webp" alt="MySQL" className="w-32 h-32"/>
                    </div>
                  </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full lg:px-8 md:px-4">
              <div className="px-4 py-5 border-2 border-light-blue text-center h-full lg:mt-0 md:mt-8 mt-0"> 
                  <div className="md:text-2xl text-lg font-bold mb-6">
                    Application
                  </div>
                  <div className="flex justify-center items-center pb-2">
                    <div className="grid grid-cols-3 gap-7 pb-4">
                        <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/c_original_logo_icon_146611.png" alt="C" className="w-16 h-16" />
                        <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" alt="C++" className="w-16 h-16" />
                        <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" alt="Python" className="w-16 h-16"/>
                        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968282.png" alt="Java" className="w-16 h-16"/>
                        <img src="https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png" alt="C#" className="w-16 h-16"/> 
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
