// Header.jsx

import personal from "../../images/personal.png";

const ImageContainer = () => {
    return (

        <img className="lazy absolute top-0 right-0 object-cover object-right-bottom max-w-screen-xl translate-x-1/2 md:translate-x-1/4 2xl:translate-x-0 bg-clip-padding xl:h-full" src={personal} />

    );
};



export default ImageContainer;
