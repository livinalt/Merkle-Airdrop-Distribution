import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {

  const tokenAddress = "0xB8044557BE5Ec91Eaa9eBD92101dCD116D62e6Cc";
  const merkleRoot = "0x8741a333ebe4b3abbc7e896be9dbfce9b6e3792e1d0f5594f26b5fe8f3f075c2";

  const merkleAirdrop = m.contract("MerkleAirdrop", [tokenAddress, merkleRoot]);

  return { merkleAirdrop };
});

export default MerkleAirdropModule;
