# Merkle-Airdrop-Distribution


## Overview

This project is an implementation of Merkle Airdrop smart contract using Solidity, which enables the distribution of tokens to eligible addresses using a Merkle Tree. This allows users to claim their airdrop allocation in a gas-efficient way. 

The project includes:

- A Solidity smart contract for managing the token airdrop.
- Merkle tree generation for validating claims.
- Tests written using **Hardhat** to ensure the correct functionality of the contract.

## Features

- **Merkle Proof Verification**: Efficient verification of token claim eligibility using Merkle Trees.
- **Token Airdrop**: Eligible users can claim their airdrop based on their inclusion in the Merkle Tree.
- **Security Features**: Protection against double claims using internal tracking.

## Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/download/) v14+ 
- [Hardhat](https://hardhat.org/getting-started/) v2.0+
- [Solidity](https://soliditylang.org/) v0.8.x
- [npm](https://www.npmjs.com/) v6+

## Getting Started

Follow the steps below to set up the project and start testing locally.

### 1. Clone the repository

```bash
git clone https://github.com/livinalt/Merkle-Airdrop-Distribution
cd Merkle-Airdrop-Distribution
```

### 2. Install dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

### 3. Compile the smart contracts

Compile the Solidity smart contracts using Hardhat:

```bash
npx hardhat compile
```

### 4. Run Tests

The tests for this project ensure that the airdrop process works correctly, including verifying Merkle proofs and claiming tokens.

```bash
npx hardhat test
```

## Smart Contract Overview

The primary contract is `MerkleAirdrop.sol`, which has the following key functions:

- **`claimAirdrop(uint256 amount, bytes32[] calldata proof)`**: Allows eligible users to claim their allocated tokens by submitting a valid Merkle proof.
- **`withdrawTokens()`**: Allows the contract owner to withdraw remaining tokens after the airdrop ends.
- **`updateMerkleRoot(bytes32 newMerkleRoot)`**: Allows the owner to update the Merkle root to modify the airdrop.

### Merkle Airdrop Process

1. The contract owner initializes the airdrop by deploying the contract with the token address and the Merkle root.
2. Eligible addresses and their corresponding token allocations are hashed into a Merkle Tree.
3. Users can generate a Merkle proof from the tree, which they use to claim their airdrop allocation via the `claimAirdrop` function.


## Deployment

You can deploy the contract to a test network. This contract was specifically deployed on Lisk testnet. You can configure the deployment script `npx hardhat ignition deploy ./ignition/modules/MerkleAirdrop.sol`.

1. Set up your `.env` file with the following environment variables:

```env
PRIVATE_KEY=<your_private_key>
INFURA_API_KEY=<your_infura_key>
```

2. Run the deployment script:

```bash
npx hardhat ignition deploy ./ignition/modules/MerkleAirdrop.ts --network lisk-sepolia
```

## Running the Tests

Unit tests are written to ensure the correct functionality of the `MerkleAirdrop` contract. The tests verify:

- Deployment of the contract.
- Correct ownership setting.
- Correct token claim based on Merkle proof.
- Security checks to prevent multiple claims.

To run the tests, execute:

```bash
npx hardhat test
```


## License

This project is licensed under the MIT License

