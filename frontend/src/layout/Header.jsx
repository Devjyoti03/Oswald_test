import routesConstants from "../constants/routeConstants";
import { Link } from "react-router-dom";
// import { Icons } from "../assets/icons";
// import { IoMdClose } from "react-icons/io";
// import { MdMenu } from "react-icons/md";
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
      <div className="max-w-[1320px] px-4 flex items-center justify-between py-[30px] mx-auto w-full relative">
        <div className="flex items-center gap-x-9">
          <Link
            to={routesConstants.ROOT}
            className="max-w-[120px] lg:max-w-[160px] md:max-w-[140px]"
          >
            {/* <img src={Icons.logo} alt="site logo" /> */}
            OSWALD
          </Link>
          <nav
            className={`lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 bg-errie-black h-full z-50 p-5 sm:w-[300px] w-full translate-alls ease-in-out duration-300 shadow-navbar lg:shadow-none lg:translate-x-0 ${
              isNavbarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out">
              <button type="button" onClick={toggleNavbar}>
              </button>
            </div>
          </nav>
        </div>
        <div className="lg:flex items-center xl:gap-x-7 lg:gap-x-6 gap-x-5 hidden">
          <button
            to=""
            className="capitalize text-base font-semibold text-white transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap w-full"
          >
            Connect
          </button>
        </div>
        <div className="connect-wallet">
      {!walletAddress ? (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Connect MetaMask Wallet
        </button>
      ) : (
        <p className="mt-4 text-green-600">
        {walletAddress}
        </p>
      )}
    </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative z-10 mt-[50px] px-4">
        <h1 className="text-white font-bold xl:text-[64px] lg:text-5xl text-4xl leading-[1.25]">
          SECURE YOUR FILES WITH{" "}
          <span className="gradi-theme-text">OSWALD CI-CD.</span>
        </h1>
        <p className="lg:text-xl md:text-lg text-base my-[46px]">
          Never lose your codes! .....to be written later.
        </p>
      </div>
    </header>
  );
};

export default Header;
