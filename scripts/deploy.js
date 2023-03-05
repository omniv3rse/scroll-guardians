const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('BufficornBattle');
  const gameContract = await gameContractFactory.deploy(
    ["Eden", "Titan", "Harmony"],       // Names
    ["QmZBcF7HyHwxNxq7oRLbiM3YdWBP6rkJMoEXbiiHbZXZrs/Eden.jpeg", // Images
    "QmZBcF7HyHwxNxq7oRLbiM3YdWBP6rkJMoEXbiiHbZXZrs/Titan.jpeg", 
    "QmZBcF7HyHwxNxq7oRLbiM3YdWBP6rkJMoEXbiiHbZXZrs/Harmony.jpeg"],
    [6900, 5700, 4200], // HP values
    [288, 333, 420], // Attack damage values
    "Gary G.", // Boss name
    "QmZBcF7HyHwxNxq7oRLbiM3YdWBP6rkJMoEXbiiHbZXZrs/Boss.jpeg", // Boss image
    1000000, // Boss hp
    1000 // Boss attack damage
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