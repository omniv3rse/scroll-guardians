require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: process.env.QUICKNODE_GOERLI_API,
      accounts: [process.env.PRIVATE_KEY],
    },
    arbitrum: {
      chainId: 42161,
      url: process.env.ALCHEMY_ARBI_API,
      accounts: [process.env.PRIVATE_KEY],
    },
    arbitrumTestnet: {
      chainId: 421613,
      url: process.env.ALCHEMY_ARBI_TEST_API,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_ARBI_KEY,
  }
};