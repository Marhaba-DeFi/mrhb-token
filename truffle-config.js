const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
const BSCSCANAPIKEY = require('./env.json').BSCSCANAPIKEY;

module.exports = {
  networks: {
    "goerli": {
      network_id: 5,
      provider: () => new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/35956f1a502e469084de846c33be1ad2'),
    },
    "bsc_testnet": {
      network_id: 97,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true,
      provider: () => new HDWalletProvider(mnemonic, "https://data-seed-prebsc-1-s1.binance.org:8545"),
    },
    "bsc_mainnet": {
      network_id: 56,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true,
      production: true ,
      provider: () => new HDWalletProvider(mnemonic, "https://bsc-dataseed1.binance.org"),
    }
  },
  api_keys: {
    bscscan: BSCSCANAPIKEY,
  },
  plugins: ['truffle-plugin-verify'],
  mocha: {},
  compilers: {
    solc: {
      version: "^0.6.12",
      settings: {
        optimizer: {
          enabled: false,
          runs: 500
        },
        evmVersion: "byzantium"
      }
    }
  }
};
