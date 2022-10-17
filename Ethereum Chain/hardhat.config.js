require('dotenv').config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

// _____/\\\\\\\\\\\__________________/\\\______________        
//  ___/\\\/////////\\\_______________\/\\\______________       
//   __\//\\\______\///________________\/\\\_________/\\\_      
//    ___\////\\\_____________/\\\\\____\/\\\________\///__     
//     ______\////\\\________/\\\///\\\__\/\\\\\\\\\___/\\\_    
//      _________\////\\\____/\\\__\//\\\_\/\\\////\\\_\/\\\_   
//       __/\\\______\//\\\__\//\\\__/\\\__\/\\\__\/\\\_\/\\\_  
//        _\///\\\\\\\\\\\/____\///\\\\\/___\/\\\\\\\\\__\/\\\_ 
//         ___\///////////________\/////_____\/////////___\///__




//   |\     /|(  ____ \( \      ( \      (  ___  )  |\     /|(  ___  )(  ____ )( \      (  __  \ 
//   | )   ( || (    \/| (      | (      | (   ) |  | )   ( || (   ) || (    )|| (      | (  \  )
//   | (___) || (__    | |      | |      | |   | |  | | _ | || |   | || (____)|| |      | |   ) |
//   |  ___  ||  __)   | |      | |      | |   | |  | |( )| || |   | ||     __)| |      | |   | |
//   | (   ) || (      | |      | |      | |   | |  | || || || |   | || (\ (   | |      | |   ) |
//   | )   ( || (____/\| (____/\| (____/\| (___) |  | () () || (___) || ) \ \__| (____/\| (__/  )
//   |/     \|(_______/(_______/(_______/(_______)  (_______)(_______)|/   \__/(_______/(______/ 

module.exports = {
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.MAINNET_API_KEY}`,
      accounts: [`${process.env.RINKEBY_PRIVATE_KEY}`]
    }
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
    apiKey : {
      goerli : process.env.EtherScanAPI,
      mainnet : process.env.EtherScanAPI
    } 
  }
}


