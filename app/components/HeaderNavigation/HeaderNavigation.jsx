// Header.jsx
import "./HeaderNavigation.css";
// import personal from "../../images/personal.png";

const HeaderNavigation = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-amber-100 border-b border-amber-100">
            <div className="flex flex-row justify-between px-3 py-4 sm:px-8 xl:px-12 lg:py-5">
                <span>KS Portfolio</span>
                {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">main menu</span>
                    
                </button> */}
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                        <a className="hidden font-semibold md:inline">About us</a>
                        </li>
                        <li>
                        <a className="hidden font-semibold md:inline">Projects</a>
                        </li>
                        <li>
                        <a className="hidden font-semibold md:inline">Technical Specfications</a>
                        </li>
                        <li>
                        <a className="hidden font-semibold md:inline">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};



export default HeaderNavigation;
