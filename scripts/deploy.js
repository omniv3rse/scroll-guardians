const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('ScrollGuardians');
  const gameContract = await gameContractFactory.deploy(
    ["Valkyrie", "Archer", "Sorceress"],       // Names
    ["QmbRJACveMUERtQC4qPj8i8pErFWdCeTYrku1D1iejwxZp/valkyrie.png", // Images
    "QmbRJACveMUERtQC4qPj8i8pErFWdCeTYrku1D1iejwxZp/archer.png", 
    "QmbRJACveMUERtQC4qPj8i8pErFWdCeTYrku1D1iejwxZp/sorceress.png"],
    [1000, 700, 500], // HP values
    [75, 100, 150], // Attack damage values
    "Shadowbeast", // Boss name
    "QmbRJACveMUERtQC4qPj8i8pErFWdCeTYrku1D1iejwxZp/boss.png", // Boss image
    250000, // Boss hp
    100 // Boss attack damage
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