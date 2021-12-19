const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = require('./env.json').PRIVATEKEY;
const BSCSCANAPIKEY = require('./env.json').BSCSCANAPIKEY;

module.exports = {
  networks: {
    "goerli": {
      network_id: 5,
      provider: () => new HDWalletProvider(mnemonic, 'https://goerli.infura.io/v3/35956f1a502e469084de846c33be1ad2'),
    },
    "bsc_testnet": {
      network_id: 97,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      provider: () => new HDWalletProvider(mnemonic, "https://data-seed-prebsc-1-s1.binance.org:8545"),
    },
    "bsc_mainnet": {
      network_id: 56,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 3000000,
      gasPrice: 10000000000,
      networkCheckTimeout: 1000000000,
      provider: () => new HDWalletProvider(mnemonic, "https://apis-sj.ankr.com/bde66c1254a54cd6b3a3a629f14bc70f/8f3dd4631ef832efadf6d81c4cc21311/binance/full/main"),
    }
  },
  api_keys: {
    bscscan: BSCSCANAPIKEY,
  },
  plugins: ['truffle-plugin-verify'],
  mocha: {
    timeout: 100000
  },
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  }
};
