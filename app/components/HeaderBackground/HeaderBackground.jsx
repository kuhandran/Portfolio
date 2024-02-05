// Header.js
import React from 'react';
import './HeaderBackground.css';
import {WaterSplash} from "../WaterSplash/tester";
import HeaderPage from "../HeaderPage/HeaderPage";


const HeaderBackground = () => {
  return (
    <div>
         <WaterSplash/>
        <div>
            <HeaderPage/>
        </div>
        
    </div>
  );
};

export default HeaderBackground;
