// Header.jsx
import "./HeaderNavigation.css";
// import personal from "../../images/personal.png";

const HeaderNavigation = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-amber-100 border-b border-amber-100">
        <div className="flex flex-row justify-between px-3 py-4 sm:px-8 xl:px-12 lg:py-5">
            <span>KS Portfolio</span>
            <div className="flex items-center space-x-6">
                <a className="hidden font-semibold md:inline">About us</a>
                <a className="hidden font-semibold md:inline">Projects</a>
                <a className="hidden font-semibold md:inline">Technical Specfications</a>
                <a className="hidden font-semibold md:inline">Contact us</a>
            </div>
        </div>
    </div>
  );
};



export default HeaderNavigation;
