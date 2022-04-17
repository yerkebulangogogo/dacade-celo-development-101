require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const CELO_API_KEY = process.env.CELO_TESTNET_API_KEY
const DEPLOY_ADDRESS_PK = process.env.DEPLOY_ADDRESS_PK


 module.exports = {
  compilers: {
    solc: {
      version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
  networks: {
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    alfajores: {
      provider: 'https://celo-alfajores--rpc.datahub.figment.io/apikey/'+ CELO_API_KEY, // CeloProvider
      network_id: 44787,  // latest Alfajores network id
      accounts: [`${DEPLOY_ADDRESS_PK}`],
    }
  }
};