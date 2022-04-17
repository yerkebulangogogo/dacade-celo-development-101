// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const celoNft = await ethers.getContractFactory("celoNft");
  const celoNftDeploy = await Greeter.deploy();

  await celoNftDeploy.deployed();

  console.log("celoNftDeploy deployed to:", celoNftDeploy.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });