require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


module.exports = {
  defaultNetwork: "goerli",
  defaultNetwork: "mumbai",
  defaultNetwork: "mumbai",
  networks: {
      hardhat: {},
      mumbai: {
          url: process.env.STAGING_ALCHEMY_KEY,
          accounts: [process.env.PRIVATE_KEY]
      }
  },

  solidity: "0.8.4",
  
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },

}