// Header.js
import React from 'react';
import './HeaderBackground.css';
import WaterSplash from "../WaterSplash/WaterSplash";
import HeaderPage from "../HeaderPage/HeaderPage";
import ImageContainer from "../ImageContainer/ImageContainer";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";




const HeaderBackground = () => {
  return (
    <article className='flex flex-col overflow-x-hidden'>
       <div className='relative px-6 pt-60 pb-80 overflow-hidden lg:py-72 xl:py-80 sm:px-8 xl:px-12 bg-gradient-to-t from-amber-50 to-amber-100'>
      <HeaderPage />
      <ImageContainer/>
    </div>
    </article>
  );
};

export default HeaderBackground;
