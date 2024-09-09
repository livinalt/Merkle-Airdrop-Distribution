import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {

  const mixarTokenAddress = "0xd28F5a6dB5EF6597eE7C644999e041E357A27a75";
  const merkleRoot = "0x8741a333ebe4b3abbc7e896be9dbfce9b6e3792e1d0f5594f26b5fe8f3f075c2";

  const merkleAirdrop = m.contract("MerkleAirdrop", [mixarTokenAddress, merkleRoot]);

  return { merkleAirdrop };
});

export default MerkleAirdropModule;

// mixarTokenAddress = 0xd28F5a6dB5EF6597eE7C644999e041E357A27a75;
// MerkleAirDropAddress = 0x9CE9910118C56650c47eeF9Ea7a4c7b0F7aa65b5;
