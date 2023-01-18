// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };

// 6ebaaa5fc48a45c28ecdc2982901b795 INFURA
// https://eth-goerli.g.alchemy.com/v2/2TCZEXJ7_x_Ejf7slN7767irV3cmhnfG


require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/2TCZEXJ7_x_Ejf7slN7767irV3cmhnfG",
      accounts: [ "5f4f82f75c2af102d5ffec56ddb366756ad177ab5ef911ed078630ec9ee5b80e" ]
    }
  }
}