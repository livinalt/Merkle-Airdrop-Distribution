import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("LockModule", (m) => {
  const tokenAddress = ;
  const merkleRoot = ;

  const merkleAirdrop = m.contract("MerkleAirdrop", tokenAddress, merkleRoot);

  return { merkleAirdrop };
});

export default MerkleAirdropModule;
