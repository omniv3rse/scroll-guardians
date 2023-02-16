# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

## Setup instructions

```
mkdir epic-game
cd epic-game
npm init -y
npm install --save-dev hardhat@latest
```

```
npx hardhat
```
Choose the option Create a JavaScript project. Say yes to everything.

Go ahead and install these other dependencies just in case it didn't do it automatically.
```
npm install --save-dev chai @nomiclabs/hardhat-ethers ethers @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-chai-matchers
```

You'll also want to install something called OpenZeppelin which is another library that's used a lot to develop secure smart contracts. We'll learn more about it later. For now, just install it :).
```
npm install @openzeppelin/contracts
```

Then run:
```
npx hardhat run scripts/deploy.js
```

## Characters

Characters created with [Dreamstudio](https://beta.dreamstudio.ai/dream).

Prompts:
- [A **Swordsman** character in an RPG, by Studio Ghibli, matte painting trending on artstation HQ](https://i.imgur.com/Bix5oBT.png)
- [An **Archer** character with a Bow in an RPG, by Studio Ghibli, matte painting trending on artstation HQ](https://i.imgur.com/LZRkouX.png)
- [Full-body portrait of a **Wizard** character with a Wand in an RPG, by Studio Ghibli, matte painting trending on artstation HQ](https://i.imgur.com/L7IA4pp.png)

## dotenv

https://www.npmjs.com/package/dotenv

.env file format:
```
QUICKNODE_API="YOUR_API_KEY_HERE"
PRIVATE_KEY="YOUR_PRIVATE_KEY_HERE"
```

**IMPORTANT**: Add `.env` to your `.gitignore` file!!

To be safe, use a fresh metamask account with no real-world assets.

For Ethereum network node, use [Quicknode](https://www.quicknode.com/endpoints), Infura, or Alchemy etc.

## Deploying on Goerli testnet

```
npx hardhat run scripts/deploy.js --network goerli
```

## Deploying on Hardhat testnet - will show `console.log`
```
npx hardhat run scripts/run.js
```

## Web App

```
npm install
```

```
npm run start
```

## If new smart contract deployed, do this!

So, what you'll need to do is:

1. Deploy again using `npx hardhat run scripts/deploy.js --network goerli`

2. Change `contractAddress` in `constants.js` to be the new contract address we got from the step above in the terminal (just like we did before the first time we deployed).

3. Get the updated abi file from `artifacts` and copy-paste it into your web app just like we did above.


## Verify on Etherscan

- https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan

1. Install 
```
npm install --save-dev @nomiclabs/hardhat-etherscan
```

2. Add to hardhat.config.js:
```
require("@nomiclabs/hardhat-etherscan");

...

networks: {
    ...
},
etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY"
}
```

3. Create `arguments.js` for complex arguments.

4. Verify
```
npx hardhat verify --network arbitrumTestnet --constructor-args ./scripts/arguments.js 0x4174a2635Cd36C1730A1238d6eB0b6a4AA36f9aC
```


## PUSH TO PRODUCTION

1. Update network in `./client/src/App.js`.
2. Update url to minted nft in `./client/src/SelectCharacter/index.js`.

3. Use correct account key in `.env`

4. To deploy, run `npx hardhat run scripts/deploy.js --network arbitrum`.

5. Update ABI file copy from `./artifacts/contracts/VanillaRaiders.sol/VanillaRaiders.json` to `./client/src/utils/VanillaRaiders.json`.

6. Update Contract address to `./client/src/constants.js`.

7. To verify, run `npx hardhat verify --network arbitrum --constructor-args ./scripts/arguments.js 0x17db58eb9598F3c798700b9099961Da09ebbba0E`.