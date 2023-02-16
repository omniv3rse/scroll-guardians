require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: '0.8.17',
  networks: {
    scrollPrealpha: {
      url: `https://scroll-prealpha.blockpi.network/v1/rpc/${process.env.BLOCKPI_API}`,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  }
};