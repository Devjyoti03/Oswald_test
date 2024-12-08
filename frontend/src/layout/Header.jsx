import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../assets/logo.png";
import { SiPolygon, SiSolidity } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Web3 from "web3";
// import Backup from "../components/Backup"; 
  import Home from "../screens/Home";

const Header = () => {
  const address = "0xc500Ea677F14Eb13BeC6FF39aFC24501496aF372"; // Static address for testing
  const [walletAddress, setWalletAddress] = useState("");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [contractData, setContractData] = useState([]); // State to store contract data
  const [web3, setWeb3] = useState(null);
  const [loadingBackups, setLoadingBackups] = useState(false); // Add loading state

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // const address = accounts[0];
        setWalletAddress(address);
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        fetchBackups(web3Instance, address); // Fetch data after wallet connection
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  const fetchBackups = async (web3Instance, address) => {
    console.log("1")
    if (!web3Instance) {
      console.error('Web3 not initialized');
      return;
    }

    try {
      setLoadingBackups(true); // Set loading to true when fetching backups

      const contractAddress = '0x0bC497a90F7162DF42978B7c3a6014083393680E';
      const contractABI = [
          {
              "inputs": [
                  {
                      "internalType": "string",
                      "name": "cid",
                      "type": "string"
                  }
              ],
              "name": "addBackup",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
          },
          {
              "anonymous": false,
              "inputs": [
                  {
                      "indexed": true,
                      "internalType": "address",
                      "name": "user",
                      "type": "address"
                  },
                  {
                      "indexed": false,
                      "internalType": "string",
                      "name": "cid",
                      "type": "string"
                  },
                  {
                      "indexed": false,
                      "internalType": "uint256",
                      "name": "timestamp",
                      "type": "uint256"
                  }
              ],
              "name": "BackupAdded",
              "type": "event"
          },
          {
              "inputs": [
                  {
                      "internalType": "address",
                      "name": "user",
                      "type": "address"
                  }
              ],
              "name": "getBackups",
              "outputs": [
                  {
                      "components": [
                          {
                              "internalType": "uint256",
                              "name": "timestamp",
                              "type": "uint256"
                          },
                          {
                              "internalType": "string",
                              "name": "cid",
                              "type": "string"
                          }
                      ],
                      "internalType": "struct BackupStorage.Backup[]",
                      "name": "",
                      "type": "tuple[]"
                  }
              ],
              "stateMutability": "view",
              "type": "function"
          }
      ];

      const contract = new web3Instance.eth.Contract(contractABI, contractAddress);
      const backups = await contract.methods.getBackups(address).call();
      console.log(backups)
      setContractData(backups); // Store backups data in state
      setLoadingBackups(false); // Set loading to false once data is fetched
    } catch (error) {
      console.error('Error fetching backups', error);
      setLoadingBackups(false); // Set loading to false in case of error
    }
    console.log("2")
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="text-white flex flex-col relative">
      <div className="max-w-[1320px] px-4 flex items-center justify-between py-[10px] mx-auto w-full relative">
        <div className="flex items-center gap-x-9">
          <Link
            to="/"
            className="max-w-[120px] lg:max-w-[160px] md:max-w-[140px]"
          >
            <img src={Icon} alt="OSWALD" />
          </Link>
        </div>

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
                  <SiSolidity fontSize={50} color="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Pass contractData as props to Backup */}
        {contractData && <Home contractData={contractData} />}
      {/* </div> */}
    </header>
  );
};

export default Header;
