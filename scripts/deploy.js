const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('ScrollGuardians');
  const gameContract = await gameContractFactory.deploy(
    ["Valkyrie", "Archer", "Sorceress"],       // Names
    ["QmRZDADWp8vhWDP9X1TiNTS4AKBhMqXdEZu94Bc2QuzxGD/valkyrie.png", // Images
    "QmRZDADWp8vhWDP9X1TiNTS4AKBhMqXdEZu94Bc2QuzxGD/archer.png", 
    "QmRZDADWp8vhWDP9X1TiNTS4AKBhMqXdEZu94Bc2QuzxGD/sorceress.png"],
    [4200, 3333, 1690], // HP values
    [150, 200, 300], // Attack damage values
    "Moloch", // Boss name
    "QmRZDADWp8vhWDP9X1TiNTS4AKBhMqXdEZu94Bc2QuzxGD/moloch.png", // Boss image
    169000, // Boss hp
    420 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();