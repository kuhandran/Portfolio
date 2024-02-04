// Header.js
import React from 'react';
import './HeaderBackground.css';
import WaterSplash from "../waterSplash/WaterSplash";
import HeaderPage from "../HeaderPage/HeaderPage";

const HeaderBackground = () => {
  return (
    <div>
        <WaterSplash/>
        <HeaderPage/>
    </div>
  );
};

export default HeaderBackground;
