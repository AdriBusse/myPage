import React from 'react';
import FourLines from './parts/FourLines';
import SocialMediaBar from './parts/SocialMediaBar';
export default function Footer() {
  return (
    <div className="mt-10">
      <FourLines></FourLines>
      <footer className="flex flex-row items-center text-gray-200 bg-darkgrey ">
        <SocialMediaBar></SocialMediaBar>
        <div className="flex flex-row mx-auto text-xs">
          <p>This website is powered by </p>
          <i className="mx-2 mt-1 fab fa-react hover:text-facebookblue"></i>
        </div>
      </footer>
    </div>
  );
}
