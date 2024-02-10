// Header.js
import React from 'react';
import './HeaderBackground.css';
import WaterSplash from "../WaterSplash/WaterSplash";
import HeaderPage from "../HeaderPage/HeaderPage";
import ImageContainer from "../ImageContainer/ImageContainer"


const HeaderBackground = () => {
  return (
    <div className='relative px-6 py-48 overflow-hidden lg:py-72 xl:py-80 sm:px-8 xl:px-12 bg-gradient-to-t from-amber-50 to-amber-100'>
      <HeaderPage />
      <ImageContainer/>
    </div>
  );
};

export default HeaderBackground;
