import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("LockModule", (m) => {
  const tokenAddress = 0xB8044557BE5Ec91Eaa9eBD92101dCD116D62e6Cc;
  const merkleRoot = ;

  const merkleAirdrop = m.contract("MerkleAirdrop", tokenAddress, merkleRoot);

  return { merkleAirdrop };
});

export default MerkleAirdropModule;
