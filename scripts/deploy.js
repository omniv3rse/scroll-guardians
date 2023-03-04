const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('BufficornBattle');
  const gameContract = await gameContractFactory.deploy(
    ["Eclipse", "Trinity", "Helios"],       // Names
    ["Qmf2Mqq1DXWgina8ouWxqQe9zCAPH8FnkJpWcfniMxzJBH/bufficorn3.jpeg", // Images
    "Qmf2Mqq1DXWgina8ouWxqQe9zCAPH8FnkJpWcfniMxzJBH/bufficorn2.jpeg", 
    "Qmf2Mqq1DXWgina8ouWxqQe9zCAPH8FnkJpWcfniMxzJBH/bufficorn1.jpeg"],
    [1000, 700, 500], // HP values
    [75, 100, 150], // Attack damage values
    "Bearwhale", // Boss name
    "Qmf2Mqq1DXWgina8ouWxqQe9zCAPH8FnkJpWcfniMxzJBH/bearwhale.jpg", // Boss image
    1000000, // Boss hp
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