"use client"

import { IoMenu } from "react-icons/io5";
import React, { useState } from 'react';

const Navbar = () => {

  let [open,setOpen] = useState(false);

  return (
    <div>
      <div className="bg-dark-blue px-10 py-10 flex md:flex-row md:items-center flex-col justify-between">
        <div className="text-white text-lg font-bold flex flex-row justify-between">
          <div>
              Victor
          </div>
          <div  className='text-3xl cursor-pointer md:hidden'>
              <IoMenu className="text-white" onClick={()=>setOpen(!open)}/>
          </div>
        </div>
        <div className={`text-white text-lg font-bold md:block hidden`}>
            <ul className="text-white text-lg font-bold flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-4 md:mt-0 mt-8 transition duration-300">
              <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
                <a href="">About Me</a>
              </li>
              <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
                <a href="">Projects</a>
              </li>
              <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
                <a href="">Technologies</a>
              </li>
              <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
                <a href="">Contact</a>
              </li>
            </ul>
        </div>
      </div>

      <div className={`bg-mid-blue text-white text-lg font-bold px-10 py-10 md:hidden transition-all ease-in duration-300 absolute w-full z-[-1] ${open ? '' : 'transform -translate-y-full'}`}>
        <ul className={`text-white text-lg font-bold flex flex-col md:space-x-8 md:space-y-0 space-y-4 md:mt-0`}>
          <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
            <a href="">About Me</a>
          </li>
          <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
            <a href="">Projects</a>
          </li>
          <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
            <a href="">Technologies</a>
          </li>
          <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
