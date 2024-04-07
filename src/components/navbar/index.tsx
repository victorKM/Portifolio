"use client"

import { IoMenu } from "react-icons/io5";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll/modules';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); // Define a media query para telas maiores que 768px

    const handleResize = () => {
      if (mediaQuery.matches) { // Se a tela atender à condição da media query
        setOpen(false); // Defina open como false
      }
    };

    // Adiciona um listener de evento para redimensionamento da janela
    window.addEventListener("resize", handleResize);

    // Remove o listener de evento quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return (
    <div>
      <div className="fixed top-0 w-full z-50 bg-gray shadow px-10 pt-10 pb-5 flex md:flex-row md:items-center flex-col justify-between font-poppins">
        <div className="text-black lg:text-3xl text-xl font-bold flex flex-row justify-between">
          <div>
              Victor K. Maceron
          </div>
          <div  className='text-3xl cursor-pointer md:hidden'>
              <IoMenu className="text-black" onClick={()=>setOpen(!open)}/>
          </div>
        </div>
        <div className={`md:block hidden`}>
          <ul className="lg:text-xl text-lg font-bold flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-4 md:mt-0 mt-8">
            <li className="pb-2 border-b-2 border-gray border-opacity-70 hover:border-opacity-100 hover:border-mid-blue hover:cursor-pointer text-black transition duration-500">
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                  About me
                </Link>
            </li>
            <li className="pb-2 border-b-2 border-gray border-opacity-70 hover:border-opacity-100 hover:border-mid-blue hover:cursor-pointer text-black transition duration-500">
                <Link activeClass="active" to="technologies" spy={true} smooth={true} duration={500}>
                  Technologies
                </Link>
            </li>
            <li className="pb-2 border-b-2 border-gray border-opacity-70 hover:border-opacity-100 hover:border-mid-blue hover:cursor-pointer text-black transition duration-500">
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                  Projects
                </Link>
            </li>
            <li className="pb-2 border-b-2 border-gray border-opacity-70 hover:border-opacity-100 hover:border-mid-blue hover:cursor-pointer text-black transition duration-500">
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={700}>
                  Contact
                </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={`fixed top-16 bg-gray bg-opacity-95 text-white text-lg font-bold px-10 py-10 md:hidden transition-all ease-in duration-300 w-full z-10 ${open ? '' : 'transform -translate-y-full'}`}>
        <ul className={`text-lg text-black font-bold flex flex-col md:space-x-8 md:space-y-0 space-y-4 md:mt-0`}>
          <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
              <Link activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                About me
              </Link>
          </li>
          <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
              <Link activeClass="active" to="technologies" spy={true} smooth={true} duration={500}>
                  Technologies
              </Link>
          </li>
          <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
              <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                Projects
              </Link>
          </li>
          <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
              <Link activeClass="active" to="contact" spy={true} smooth={true} duration={700}>
                Contact
              </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
