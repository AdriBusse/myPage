import React from 'react';
import Logo from './Logo';
import FourLines from './parts/FourLines';
export default function Navbar() {
  return (
    <>
      <div className="w-full mx-auto bg-darkgrey ">
        <nav className="flex items-center justify-between content-evenly">
          <div className="ml-1 ">
            <Logo className=""></Logo>
          </div>
          <div className="p-5">
            <ul className="flex flex-row mr-5">
              <li className="p-2 mx-2 font-medium text-gray-200 transition duration-500 rounded hover:bg-gray-600">
                <a> Services </a>
              </li>
              <li className="p-2 mx-2 font-medium text-gray-200 transition duration-500 rounded hover:bg-gray-600">
                <a>Porfolio</a>
              </li>
              <li className="p-2 mx-2 font-medium text-gray-200 transition duration-500 rounded hover:bg-gray-600">
                <a>About</a>
              </li>
              <li className="p-2 mx-2 font-medium text-gray-200 transition duration-500 rounded hover:bg-gray-600">
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <FourLines></FourLines>
      <div className="flex flex-row justify-center w-full text-white bg-black h-7">
        <p>This page is still ugnder Construction</p>
        <i class="mx-2 mt-1 fas fa-tools"></i>
      </div>
    </>
  );
}
