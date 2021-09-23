const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    "inf_MRHB-Token_goerli": {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('/Users/denizdalkilic/Documents/MarhabaDeFi/mrhb-token/MRHBTestMnemonics.env', 'utf-8'), 
      "https://goerli.infura.io/v3/35956f1a502e469084de846c33be1ad2")
    }
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: false,
          runs: 400
        },
        evmVersion: "byzantium"
      }
    }
  }
};
