<div align="center">

# ERC721 Staking

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

## Overview

The repository contains contracts for yield farming with any ERC721 compatible NFTs. Any specified ERC-721 can be used to farm any ERC-20 compatible tokens, by
depositing/locking them into the ERC721Staking contract that uses ERC-721 instead of the normal ERC-20 token.
The basis of the staking contract is the stripped down version of
Synthetix's [StakingRewards](https://solidity-by-example.org/defi/staking-rewards/) contract and modified version of EnterDAO's [LandWorks-YF-Contracts](https://github.com/EnterDAO/LandWorks-YF-Contracts). Credit to [EnterDAO](https://enterdao.xyz/) and [Synthetix](https://synthetix.io/).

NFT owners can stake or withdraw his/hers NFTs at any time.

## Development

**Prerequisites**

- [hardhat](https://hardhat.org/) - framework used for the development and testing of the contracts
- `node version >= 14.14.0`

1. After cloning, run:

```
cd ERC721Staking
npm install
```

2. Set up the config file by executing:

```bash
cp config.sample.ts config.ts
``` 

### Compilation

Before you deploy the contracts, you will need to compile them using:

```
npx hardhat compile
```

### Deployment

**Prerequisite**

Before running the deployment `npx hardhat` script, you need to create and populate the `config.ts` file. You can use
the `config.sample.ts` file and populate the following variables:

```markdown
YOUR-INFURA-API-KEY YOUR-ETHERSCAN-API-KEY
```

**ERC721 Staking**

* Deploys the `ERC721Staking` contract

```shell
npx hardhat deploy-erc721-staking \
    --network <network name> \
    --staking-token <address of the staking token> \
    --rewards-token <address of the rewards token> \
    --duration <duration of farming in seconds> \
```

### Tests

#### Unit Tests

```bash
npx hardhat test
```

#### Coverage

```bash
npm run coverage
```

or

```bash
npx hardhat coverage --solcoverjs .solcover.ts
```
