const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('VanillaRaiders');
  const gameContract = await gameContractFactory.deploy(
    ["Swordsman", "Archer", "Wizard"],       // Names
    ["QmRQLXwSLKqkE2p9ATum14jEVearEvku1QnB1qpdnD15rN/swordsman.png", // Images
    "QmRQLXwSLKqkE2p9ATum14jEVearEvku1QnB1qpdnD15rN/archer.png", 
    "QmRQLXwSLKqkE2p9ATum14jEVearEvku1QnB1qpdnD15rN/wizard.png"],
    [1000, 700, 500], // HP values
    [75, 100, 150], // Attack damage values
    "Bearwhale", // Boss name
    "QmVMvYLnhvx7dj5BidKUNovWfvoTkoCJgc4hV8w3zTEQtK", // Boss image
    100000, // Boss hp
    100 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);
  
  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

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