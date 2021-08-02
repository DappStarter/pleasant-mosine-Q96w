require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember pupil inflict enter off genre'; 
let testAccounts = [
"0x5705372ef8d2eeec0ba56ee411a6839670965e09c5c2ad3648e0ed8b9188e55b",
"0x5b183e6fdba582b699e911d22c06ce34dfd331af76d3f817f32473508f26b8f9",
"0xeeb24f0b62e44f9e9e93489f129111a5530bc333591ff588072277e601a956de",
"0x35fe85afce78894f1baa43b2bc04d6bccfdc0116e75587d3c6f4be74b173911e",
"0x0cdc556cc895d83c7e5dc7b6d0581ef13a28a2750ab9a6e573d1342c705fc2b1",
"0x011cb596910d03db6ec9a98e3849857c0950d736cd4b68f5d73e7ef9e667f09b",
"0xaa87b40fca1c4bbc2c8ecd29c9d0f39e7107daeca257527d98302d0551667f8d",
"0x98050a0393d35c1fcfa55a4581a3cbe5e40546e5271927b13d426633d48be17c",
"0x3438c00ad21b595c044c1fa45c690fd65a53b8e355195b0313c0749ad2f93be9",
"0x447abcc92e2acf4568b8b696a3bc2e5c36c73494a574cc6e62d17453e891a555"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

