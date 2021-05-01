import React from 'react';
import FourLines from './parts/FourLines';
import SocialMediaBar from './parts/SocialMediaBar';
export default function Footer() {
  return (
    <div className="mt-10">
      <FourLines></FourLines>
      <footer className="text-gray-200 bg-darkgrey">
        <SocialMediaBar></SocialMediaBar>
      </footer>
    </div>
  );
}
