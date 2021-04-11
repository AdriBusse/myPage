import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="p-1 mx-2 duration-500 transform bg-black hover:text-red-700 hover:scale-125">
      {children}
    </div>
  );
};
export default function SocialMediaBar() {
  return (
    <div className="flex justify-start px-5 py-5">
      <Card>
        <i class="fab fa-instagram"></i>
        <p className="hover:text-red-700">Instagram</p>
      </Card>
      <Card>
        <i class="fab fa-twitter"></i>
        <p className="hover:text-red-700">Twitter</p>
      </Card>
      <Card>
        <i class="fab fa-github"></i>
        <p className="">GitHub</p>
      </Card>
      <Card>
        <i class="fab fa-reddit"></i>
        <p className="hover:text-red-700">Facebook</p>
      </Card>
    </div>
  );
}
