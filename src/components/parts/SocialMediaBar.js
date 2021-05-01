import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-16 h-16 p-1 mx-2 text-2xl duration-500 transform rounded-full bg-lightgraymedia hover:scale-125">
      {children}
    </div>
  );
};
export default function SocialMediaBar() {
  return (
    <div className="flex justify-start px-5 py-5">
      <a href="https://www.instagram.com/adri_busse/">
        <Card>
          <i className="fab fa-instagram hover:text-instagrampink"></i>
        </Card>
      </a>
      <a href="https://twitter.com/AdrianBusse2">
        <Card>
          <i className="fab fa-twitter hover:text-twitterblue"></i>
        </Card>
      </a>
      <a href="https://github.com/AdriBusse">
        <Card>
          <i className="fab fa-github"></i>
        </Card>
      </a>
      <a href="https://www.facebook.com/adri.busse">
        <Card className="">
          <i className="fab fa-facebook hover:text-facebookblue"></i>
        </Card>
      </a>
    </div>
  );
}
