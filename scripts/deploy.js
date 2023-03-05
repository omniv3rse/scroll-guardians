const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('ScrollGuardians');
  const gameContract = await gameContractFactory.deploy(
    ["Elvira", "Theodora", "Hemera"],       // Names
    ["QmW1rERG4XreNfA4wGQXxyJderZkUuWAnox6P1mtMKaUD2/Elvira.jpg", // Images
    "QmW1rERG4XreNfA4wGQXxyJderZkUuWAnox6P1mtMKaUD2/Theodora.jpg", 
    "QmW1rERG4XreNfA4wGQXxyJderZkUuWAnox6P1mtMKaUD2/Hemera.jpg"],
    [4200, 3333, 1690], // HP values
    [150, 200, 300], // Attack damage values
    "Moloch", // Boss name
    "QmRSknGBPS9afQxT2gvjAZERqQV3NwGGx3X7JGrVcM6DSL/Moloch.jpg", // Boss image
    690420, // Boss hp
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