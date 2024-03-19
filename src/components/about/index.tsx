"use client";

import React from "react";

const About = () => {
  const handleDownload = (pdfUrl: string) => {
    // Criar um link temporário
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "VictorKikutiCV.pdf";
    link.click();
  };

  return (
    <div className="absolute w-full z-[-2] bg-white p-20">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:space-x-0 md:space-x-8 md:space-y-0 space-y-10">
        <div className="flex md:justify-end justify-center items-center lg:pr-40 md:pr-10">
          <img
            src="https://media.licdn.com/dms/image/C4D03AQGRH8cRF2jytA/profile-displayphoto-shrink_200_200/0/1649117623973?e=1716422400&v=beta&t=Y5Sf4VPuciAoeJ3SSjXy7oWuZqotvfo0i0OnPpSUA-w"
            alt=""
            className="md:w-96 md:h-96 w-80 h-80 rounded-full"
          />
        </div>
        <div className="space-y-6 lg:w-4/5 md:w-11/12 flex flex-col justify-center">
          <div className="lg:text-xl md:text-lg text-lg text-gray">
            Computer Science Student
          </div>
          <div className="lg:text-5xl md:text-3xl text-3xl">
            {" "}
            I'm <strong>Victor Kikuti Maceron</strong>
          </div>
          <div className="lg:text-xl md:text-lg text-lg">
            I am a Computer Science student at the University of São Paulo. I
            enjoy working in teams, as well as being proactive and curious to
            learn new technologies.
          </div>
          <div className="font-bold hover:cursor-pointer space-x-4">
            <div
              className="bg-light-blue inline-block px-6 py-3 rounded-md transition-transform transform hover:scale-105 hover:text-white"
              onClick={() => handleDownload("https://drive.usercontent.google.com/u/0/uc?id=1WIQ_u-YvxuW56ItIA4m_AcmgPMUJM5qy&export=download")}
            >
              Download CV
            </div>
            <div
              className="bg-light-blue inline-block px-6 py-3 rounded-md transition-transform transform hover:scale-105 hover:text-white"
              onClick={() => handleDownload("https://drive.usercontent.google.com/u/0/uc?id=1tnHBffDHDy8zA1YZnYw1G6DlTLfs8bpz&export=download")}
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
