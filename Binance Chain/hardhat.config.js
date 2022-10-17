require('dotenv').config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");



module.exports = {
  defaultNetwork: "testnet",
  networks: {
    hardhat: {
    },
    // goerli: {
    //   url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
    //   accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`]
    // },
    // mainnet: {
    //   url: `https://mainnet.infura.io/v3/${process.env.MAINNET_API_KEY}`,
    //   accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`]
    // },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`]
    },
  },
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    coinmarketcap: process.env.Coinmarketcap
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan : {
    apiKey : process.env.BNBSCANAPI
  }
}
// {
//   rinkeby : process.env.EtherScanAPI,
//   mainnet : process.env.EtherScanAPI,
//   testnet : process.env.BNBSCANAPI
// } 



