import React, { useEffect, useState } from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import banner from './assets/banner.png'
import './App.css';
import SelectCharacter from './Components/SelectCharacter';
import { CONTRACT_ADDRESS, transformCharacterData } from './constants';
import ScrollGuardians from './utils/ScrollGuardians.json';
import { ethers } from 'ethers';
import Arena from './Components/Arena';
import LoadingIndicator from './Components/LoadingIndicator';

// Constants
const TWITTER_HANDLE = 'adv3nturers';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  /*
   * Just a state variable we use to store our user's public wallet. Don't forget to import useState.
   */
  const [currentAccount, setCurrentAccount] = useState(null);
  const [characterNFT, setCharacterNFT] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /*
   * This runs our function when the page loads.
   */
  useEffect(() => {
    setIsLoading(true);
    checkIfWalletIsConnected();
  }, []);

  /*
   * Add this useEffect right under the other useEffect where you are calling checkIfWalletIsConnected
   */
  useEffect(() => {
    /*
    * The function we will call that interacts with our smart contract
    */
    const fetchNFTMetadata = async () => {
      console.log('Checking for Character NFT on address:', currentAccount);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const gameContract = new ethers.Contract(
        CONTRACT_ADDRESS,
        ScrollGuardians.abi,
        signer
      );

      const characterNFT = await gameContract.checkIfUserHasNFT();
      if (characterNFT.name) {
        console.log('User has character NFT');
        setCharacterNFT(transformCharacterData(characterNFT));
      } else {
        console.log('No character NFT found');
      }
      setIsLoading(false);
    };

    const checkNetwork = async () => {
      try { 
        if (window.ethereum.networkVersion !== '5') {
          alert("Please connect to Ethereum Goerli testnet!")
        }
      } catch(error) {
        console.log(error)
      }
    }
    

    /*
    * We only want to run this, if we have a connected wallet
    */
    if (currentAccount) {
      console.log('CurrentAccount:', currentAccount);
      fetchNFTMetadata();
      checkNetwork();
    }


  }, [currentAccount]);

  /*
   * Start by creating a new action that we will run on component load
   */
  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      /*
       * First make sure we have access to window.ethereum
       */
      const { ethereum } = window;
  
      if (!ethereum) {
        console.log('Make sure you have MetaMask!');
        setIsLoading(false);
        return;
      } else {
        console.log('We have the ethereum object', ethereum);

        /*
         * Check if we're authorized to access the user's wallet
         */
        const accounts = await ethereum.request({ method: 'eth_accounts' });

        /*
         * User can have multiple authorized accounts, we grab the first one if its there!
         */
        if (accounts.length !== 0) {
          const account = accounts[0];
          console.log('Found an authorized account:', account);
          setCurrentAccount(account);
        } else {
          console.log("No authorized account found");
        }
      } 
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // Render Methods
  const renderContent = () => {
    /*
     * If the app is currently loading, just render out LoadingIndicator
     */
    if (isLoading) {
      return <LoadingIndicator />;
    }
    /*
     * Scenario #1: If user has has not connected to your app - Show Connect To Wallet Button
     */
    if (!currentAccount) {
      return (
        <div className="connect-wallet-container">
          <img
            src={banner}
            alt="Scroll Guardians by Adv3nture.xyz"
          />
          <button
            className="cta-button connect-wallet-button"
            onClick={connectWalletAction}
          >
            Connect Wallet To Get Started
          </button>
        </div>
      );
      /*
       * Scenario #2: If user has connected to your app AND does not have a character NFT - Show `SelectCharacter` Component
       */
    } else if (currentAccount && !characterNFT) {
      return <SelectCharacter setCharacterNFT={setCharacterNFT} />;
    } else if (currentAccount && characterNFT) {
      // If there is a connected wallet and characterNFT, it's time to battle!
      return <Arena characterNFT={characterNFT} setCharacterNFT={setCharacterNFT} currentAccount={currentAccount} />;
    }
  };

  /*
   * Implement your connectWallet method here
   */
  const connectWalletAction = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      /*
       * Fancy method to request access to account.
       */
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      /*
       * Boom! This should print out public address once we authorize Metamask.
       */
      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header gradient-text">📜 Scroll Guardians ⚔️</p>
          <p className="sub-text">Team up to protect the Metaverse!</p>
          {renderContent()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`@${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
