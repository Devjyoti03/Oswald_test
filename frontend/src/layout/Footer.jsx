import { Link } from "react-router-dom";
import routesConstants from "../constants/routeConstants";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-errie-black relative border-t-[1px] border-t-white border-solid">
      <div className="px-4 max-w-[1320px] mx-auto lg:py-2 md:py-6 py-4 flex flex-col sm:flex-row gap-y-6 items-center justify-between w-full">
        <Link to={routesConstants.HOME}>
          <img src={Logo} className="lg:max-w-[100px] max-w-[120px]" />
        </Link>
        <div className="flex items-center lg:gap-x-7 md:gap-x-6 gap-x-5">
          <Link to = "" className="text-base font-semibold text-white hover:text-risd-blue transition-all duration-300 ease-in-out">
          Oswald: Where Commands Build Success.</Link>
          <Link to = "" className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] lg:min-h-[44px] min-h-[40px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135">Connect</Link>
        </div>
      </div>
      <Link to = "" className="text-base font-semibold text-white hover:text-risd-blue transition-all duration-300 ease-in-out">
          Build in EthIndia 2024.</Link>
    </footer>
  );
};

export default Footer;
