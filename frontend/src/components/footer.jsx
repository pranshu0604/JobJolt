import React from 'react';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-800 text-white">
      <div className="space-y-2">
        <div className="font-bold text-lg">ABOUT</div>
        <a href="#" className="block hover:underline">Contact us</a>
        <a href="#" className="block hover:underline">About us</a>
        <a href="#" className="block hover:underline">Report Infringement</a>
        <a href="#" className="block hover:underline">Privacy Policy</a>
        <a href="#" className="block hover:underline">Terms of Use</a>
        <a href="#" className="block hover:underline">Copyright</a>
      </div>

      <div className="space-y-2">
        <div className="font-bold text-lg">CONNECT US</div>
        <a href="mailto:theshoppiemail@gmail.com" className="flex items-center space-x-2 hover:underline">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            height="30px"
            width="30px"
            alt="Gmail icon"
          />
          <span>theshoppiemail@gmail.com</span>
        </a>
        <a href="https://www.instagram.com/theshoppinghomiez" className="flex items-center space-x-2 hover:underline">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
            height="30px"
            width="30px"
            alt="Instagram icon"
          />
          <span>@theshoppinghomiez</span>
        </a>
        <a href="https://www.facebook.com/theshoppinghomiez" className="flex items-center space-x-2 hover:underline">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            height="30px"
            width="30px"
            alt="Facebook icon"
          />
          <span>@theshoppinghomiez</span>
        </a>
        <a href="https://twitter.com/theshoppinghomiez" className="flex items-center space-x-2 hover:underline">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
            height="30px"
            width="30px"
            alt="Twitter icon"
          />
          <span>@theshoppinghomiez</span>
        </a>
        <a href="https://www.youtube.com/theshoppinghomiez" className="flex items-center space-x-2 hover:underline">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
            height="26px"
            width="32px"
            alt="YouTube icon"
          />
          <span>@theshoppinghomiez</span>
        </a>
        <a href="https://www.reddit.com/r/theshoppinghomiez" className="flex items-center space-x-2 hover:underline">
          <img
            src="https://freelogopng.com/images/all_img/1658834095reddit-logo-png.png"
            height="30px"
            width="30px"
            alt="Reddit icon"
          />
          <span>r/theshoppinghomiez</span>
        </a>
        <a href="https://github.com/theshoppinghomies" className="flex items-center space-x-2 hover:underline">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            height="30px"
            width="30px"
            alt="GitHub icon"
          />
          <span>github.com/theshoppinghomies</span>
        </a>
      </div>

      <div className="space-y-2">
        <div className="font-bold text-lg">Registered Office Address</div>
        <a href="#" className="block hover:underline">Flat number 301, Madhu Chandan Apartments</a>
        <a href="#" className="block hover:underline">Vallabh Nagar, Indore</a>
        <a href="#" className="block hover:underline">Pin Code: 452003</a>
        <a href="#" className="block hover:underline">Madhya Pradesh, India</a>
      </div>
    </div>
  );
};

export default Footer;


