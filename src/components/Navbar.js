import React from 'react';
import Logo from './Logo';
export default function Navbar() {
  return (
    <>
      <div className="w-full w-screen mx-auto bg-darkgrey ">
        <nav className="flex justify-between">
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
      <div className="w-full h-1 bg-red-500"></div>
      <div className="w-full h-1 bg-green-500"></div>
      <div className="w-full h-1 bg-purple-500"></div>
      <div className="w-full h-1 bg-yellow-500"></div>
    </>
  );
}
