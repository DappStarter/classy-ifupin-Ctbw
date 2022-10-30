require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name regret oil puppy harvest immense army gaze'; 
let testAccounts = [
"0x65cea8db11805b3c1eb9226e39f83153c8d595339388baec6896e97b08696403",
"0xf9cc5200615b60fff8802f61fb890ba4c0b6371f9eb6753937f277bdb6aede66",
"0x84abc1b654d52814b969fe776272fcbc1d24a3b30939dccb67ddb548a5d13a38",
"0x35f9c745580405d0e3679b92e08ff740d786e8912a6f95e979ed46bd89ab67be",
"0x4f574e682bbaf4240f42fba7e6f3384c022a5e51fab5c8ade7b37850a5513063",
"0x88855abe85cc3f52277ed5c72ad67bbf41be3c23a3087e0043f4b1f649ffe568",
"0x553bc757af23ec19a2d4e8ea0d8c3a0b95e6ef143848f0ac123a0fa41f2d06c8",
"0x7809397776923352e721d267ad3d01cf4e096ab846bda0aeed47324d883c0c62",
"0x135a0b5dc3baf13e6027b220d5b49ebb806135f5f1bafe35f23c41dc748b9690",
"0xf9987d499ea781325c39164f37cc8544a8799d0e5bc3592f54e1c8bf7c9de31b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

