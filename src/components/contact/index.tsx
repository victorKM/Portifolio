"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const Contact = () => {
  return (
    <div className="px-10 py-10 flex flex-row justify-center font-poppins">
      <ul className="flex flex-row space-x-14 space-y-0 space-y-4 transition duration-300">
        <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
          <a href="https://www.linkedin.com/in/victorkmac/">
            <Image src="./linkedin.png" width={44} height={44} alt="Linkedin"/>
          </a>
        </li>
        <li className="transition duration-300 hover:translate-y-[-3px] hover:cursor-pointer">
          <a href="https://github.com/victorKM">
            <Image src="./github.png" width={44} height={44} alt="Github"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;
