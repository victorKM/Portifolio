"use client";

import React, { useEffect, useState } from "react";
import SwipeCarousel from '@/components/global/SwipeCarousel'

const imgs = [
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
  "./image.png",
];

const Proj = () => {
  return (
    <div className="w-full pb-20 lg:px-17 md:px-15 px-10">
      <div className="text-center md:text-3xl text-2xl font-bold mb-10">
        Projects
      </div>
      <div className="flex justify-center lg:w-5/6 w-full m-auto">
          <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-96 lg:gap-34 md:gap-28 gap-12">
              <div>
                <div className="text-xl font-bold mb-2">
                  Historical Museum of the Ribeirão Preto Medical School Site
                </div>
                <div>
                   <SwipeCarousel images={imgs}></SwipeCarousel>
                </div>
                <div className="text-xl">
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
                <div className="text-xl font-bold mb-2">
                  Solar Energy Company
                </div>
                <div>

                </div>
                <div className="text-xl">
                  <div className="mb-3">
                    Collaborate on the creation of the frontend of a website for a solar energy company, 
                    using the following technologies:
                  </div>
                  <ul className="list-disc px-8">
                    <li>Used Next.js framework for interface</li>
                    <li>Used Tailwind for style</li>
                    <li>Used Typescript for frontedn</li>
                  </ul>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Proj;
