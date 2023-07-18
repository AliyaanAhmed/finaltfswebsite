import React from 'react';
import './partners.css'; // Import the CSS file for the component

import instagramLogo from '../img/instagram-logo.png';
import nikeLogo from '../img/nike.png';
import googleLogo from '../img/google-logo.png';
import uberLogo from '../img/uber.png';
import youtubeLogo from '../img/youtube-logo.png';
import zameenLogo from '../img/Zameen-Logo.jpg';
import amazonLogo from '../img/Amazon-Logo.png';
import fordLogo from '../img/Ford-logo.jpg';
import facebookLogo from '../img/facebook-logo.png';
import pumaLogo from '../img/puma-logo.jpg';
import { useEffect } from 'react';
const logos = [nikeLogo, instagramLogo, googleLogo, uberLogo, youtubeLogo, zameenLogo, amazonLogo, fordLogo, facebookLogo, pumaLogo];

const Partners = () => {

  useEffect(() => {
    const copy = document.querySelector('.logos-slide').cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);

  return (
  <>
  <h1 className="vmyservicesheading">OUR PARTNERS</h1>
    <div className="logos">
    <div className="logos-slide">
    
      <img src={nikeLogo} alt="3M" />
      <img src={uberLogo} alt="Barstool Store" />
      <img src={youtubeLogo} alt="Budweiser" />
      <img src={pumaLogo} alt="Buzzfeed" />
      <img src={facebookLogo} alt="Forbes" />
      <img src={amazonLogo} alt="Macy's" />
      <img src={fordLogo} alt="Men's Health" />
      <img src={uberLogo} alt="MrBeast" />
    </div>
  </div>
  </>
  );
};

export default Partners;