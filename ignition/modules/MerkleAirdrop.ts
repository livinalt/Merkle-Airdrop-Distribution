import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {

  const mixarTokenAddress = "0x91df53EbBD20bcd0A13Bb2033f1A8418b0884e6f";
  const merkleRoot = "0x8741a333ebe4b3abbc7e896be9dbfce9b6e3792e1d0f5594f26b5fe8f3f075c2";

  const merkleAirdrop = m.contract("MerkleAirdrop", [mixarTokenAddress, merkleRoot]);

  return { merkleAirdrop };
});

export default MerkleAirdropModule;

// mixarTokenAddress = 0x91df53EbBD20bcd0A13Bb2033f1A8418b0884e6f;
// https://sepolia-blockscout.lisk.com/address/0x91df53EbBD20bcd0A13Bb2033f1A8418b0884e6f#code


// MerkleAirDropAddress = 0x8CA740C6Df4B4B047afe0E3553fD781421AA374c;
//https://sepolia-blockscout.lisk.com/address/0x8CA740C6Df4B4B047afe0E3553fD781421AA374c#code

