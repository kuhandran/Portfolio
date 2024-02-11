// Header.js
import { lazy } from 'react';
import './HeaderBackground.css';
import HeaderPage from "../HeaderPage/HeaderPage";

const ImageContainer = lazy(() => import('../ImageContainer/ImageContainer'));



const HeaderBackground = () => {
  return (
    <article className='flex flex-col overflow-x-hidden'>
       <div className='relative px-6 pt-40 overflow-hidden lg:py-72 xl:py-80 sm:px-8 xl:px-12 bg-gradient-to-t from-amber-50 to-amber-100'>
      <HeaderPage />
      <ImageContainer/>
    </div>
    </article>
  );
};

export default HeaderBackground;
