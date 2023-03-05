const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('ScrollGuardians');
  const gameContract = await gameContractFactory.deploy(
    ["Elvira", "Theodora", "Hemera"],       // Names
    ["QmbVDAqzCG3HRgjJkjchmgotwJWuFGxY1RHRrAPywNsS3W/Elvira.jpg", // Images
    "QmbVDAqzCG3HRgjJkjchmgotwJWuFGxY1RHRrAPywNsS3W/Theodora.jpg", 
    "QmbVDAqzCG3HRgjJkjchmgotwJWuFGxY1RHRrAPywNsS3W/Hemera.jpg"],
    [4200, 3333, 1690], // HP values
    [150, 200, 300], // Attack damage values
    "Moloch", // Boss name
    "QmbVDAqzCG3HRgjJkjchmgotwJWuFGxY1RHRrAPywNsS3W/Moloch.jpg", // Boss image
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