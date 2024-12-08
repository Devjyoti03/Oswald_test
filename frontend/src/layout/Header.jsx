import routesConstants from "../constants/routeConstants";
import { Link } from "react-router-dom";
import Icon from "../assets/logo.png";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { SiPolygon, SiSolidity } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";

const Header = () => {

  const [walletAddress, setWalletAddress] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0]; // Get the first account
        setWalletAddress(address); // Set the address in state
        console.log("Connected Wallet Address:", address);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="text-white flex flex-col relative after:content-[''] after:bg-grad-theme-135 after:absolute xl:after:w-[520px] xl:after:h-[520px] md:after:w-[300px] md:after:h-[300px] after:w-[200px] after:h-[200px] after:top-[90%] after:left-0 after:blur-[70px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute xl:before:w-[520px] xl:before:h-[520px] md:before:w-[300px] md:before:h-[300px] before:w-[200px] before:h-[200px] before:top-[60%] before:right-0 before:blur-[70px] before:rounded-full">
      <div className="max-w-[1320px] px-4 flex items-center justify-between py-[10px] mx-auto w-full relative">
        <div className="flex items-center gap-x-9">
          <Link
            to={routesConstants.ROOT}
            className="max-w-[120px] lg:max-w-[160px] md:max-w-[140px]"
          >
            <img src={Icon} alt="OSWALD" />
          </Link>
          <nav
            className={`lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 bg-errie-black h-full z-50 p-5 sm:w-[300px] w-full translate-alls ease-in-out duration-300 shadow-navbar lg:shadow-none lg:translate-x-0 ${
              isNavbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out">
              <button type="button" onClick={toggleNavbar}>
                {/* <IoMdClose size={32} /> */}
              </button>
            </div>
          </nav>
        </div>
        {/* <div className="lg:flex items-center xl:gap-x-7 lg:gap-x-6 gap-x-5 hidden">
          <button
            to=""
            className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap w-full"
          >
            Connect
          </button>
        </div> */}
        {/* <button
          type="button"
          className="lg:hidden hover:opacity-80 duration-300 ease-in-out translate-all"
          onClick={toggleNavbar}
        >
          <MdMenu size={32} />
        </button> */}
        <div className="connect-wallet">
      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap w-full"
        >
          Connect Wallet
        </button>
      ) : (
        <p className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap w-full">
        {/* {walletAddress} */}
        Connected
        </p>
      )}
    </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative z-10 mt-[0px] px-4">
        <h1 className="text-white font-bold xl:text-[64px] lg:text-5xl text-4xl leading-[1.25]">
          SECURE YOUR FILES WITH{" "}
          <span className="gradi-theme-text">OSWALD CI-CD.</span>
        </h1>
        <p className="lg:text-xl md:text-lg text-base my-[30px]">
          Secure your files and streamline your processes with Oswald CI/CD. Experience seamless integration, robust automation, and the power of 8 commands ensuring efficient, reliable, and secure deployments every time
        </p>
      </div>

      <div className="flex flex-col flex-1 items-center justify-start w-full h-full mf:mt-0 mt-0 full-card z-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-20 h-20 rounded-full border-2 border-white flex justify-center items-center">
                  <SiPolygon fontSize={30} color="#fff" />
                </div>
                <BsInfoCircle fontSize={25} color="#fff" />
              </div>
              <div>
                <p className="text- metamask-text font-semibold text-xl">
                  {walletAddress
                    ? `Connected account: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                    : "Account address of user from Metamask"}
                </p>
                <div className="flex justify-between items-end">
                  <div className="metamask-text text-white font-semibold text-2xl mt-3 mb-1 flex justify-center items-center">
                    Metamask Wallet
                  </div>
                  <SiSolidity fontSize={50} color="#fff " />
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
};

export default Header;
