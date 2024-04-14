"use client";

import React, { useEffect, useState } from "react";
import SwipeCarousel from '@/components/global/SwipeCarousel'

const fsolar = [
  "./fsolar1.jpeg",
  "./fsolar2.jpeg",
  "./fsolar3.jpeg",
  "./fsolar4.jpeg",
  "./fsolar5.jpeg",
  "./fsolar6.jpeg",
  "./fsolar7.jpeg",
  "./fsolar8.jpeg",
];

const museu = [
  "./museu1.jpeg",
  "./museu2.jpeg",
  "./museu3.jpeg",
  "./museu4.jpeg",
  "./museu5.jpeg",
  "./museu6.jpeg",
  "./museu7.jpeg",
]

const Proj = () => {
  return (
    <div id="projects" className="w-full pt-40 pb-20 lg:px-17 md:px-15 px-10 font-poppins">
      <div className="text-center md:text-3xl text-2xl font-bold mb-10">
        Projects
      </div>
      <div className="flex justify-center lg:w-5/6 md:w-11/12 w-full m-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-34 lg:gap-34 md:gap-14">
              <div>
                <div className="text-xl font-bold mb-2">
                  Historical Museum of the Ribeirão Preto Medical School
                </div>
                <div className="">
                   <SwipeCarousel images={museu}></SwipeCarousel>
                </div>
                <div className="text-xl md:mb-0 mb-8">
                  <div className="mb-3">
                    Collaborate on the creation of website for the Historical Museum Of Ribeirão Preto Medical School, that allows
                    people see items of the museum.
                  </div>
                  <ul className="list-disc px-8">
                    <li>Developed a Database to store items and admins users informations, using PostgreSQL</li>
                    <li>Used MySQL for database modeling</li>
                    <li>Implemented React framework for interface</li>
                    <li>Used SCSS for style</li>
                    <li>Used JavaScript for frontend and backend</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold lg:mb-2 md:mb-9">
                  Solar Energy Company
                </div>
                <div>
                  <SwipeCarousel images={fsolar}></SwipeCarousel>
                </div>
                <div className="text-xl">
                  <div className="mb-3">
                    Collaborate on the creation of the frontend of a website for a solar energy company, 
                    using the following technologies:
                  </div>
                  <ul className="list-disc px-8">
                    <li>Used Next.js framework for interface</li>
                    <li>Used Tailwind for style</li>
                    <li>Used Typescript for frontend</li>
                  </ul>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Proj;
