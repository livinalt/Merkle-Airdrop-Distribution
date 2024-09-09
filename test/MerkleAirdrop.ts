import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("MerkleAirdrop", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function MerkleAirdropFixture() {
    const mixarToken = "0xd28F5a6dB5EF6597eE7C644999e041E357A27a75";
    const MerkleRoot = "0x8741a333ebe4b3abbc7e896be9dbfce9b6e3792e1d0f5594f26b5fe8f3f075c2";

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, addr1, addr2] = await hre.ethers.getSigners();

    const MerkleAirdrop = await hre.ethers.getContractFactory("MerkleAirdrop");
    const merkleAirdrop = await MerkleAirdrop.deploy(mixarToken, MerkleRoot);

    return { merkleAirdrop, mixarToken, MerkleRoot, owner, addr1, addr2, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { merkleAirdrop, owner } = await loadFixture(MerkleAirdropFixture);
      expect(await merkleAirdrop.owner()).to.equal(owner.address);
    });
  });

  describe("merkleTree", function () {
    it("Should claim airdrop", async function () {
      const { merkleAirdrop, addr1, merkleTree } = await loadFixture(MerkleAirdropFixture);

      const amount = "10000000000000000000";
      const proof = merkleTree.getHexProof(keccak256(`${addr1.address}${amount}`));

      await expect(merkleAirdrop.connect(addr1).claimAirdrop(amount, proof))
        .to.emit(merkleAirdrop, "AirdropClaimed")
        .withArgs(addr1.address, amount);
    });
  });

  describe("withdrawTokens", function () {

  });

  describe("update merkle root", function () {

  });

  describe("check qualification", function () {

  });
});
