import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const MixarTokenModule = buildModule("MixarTokenModule", (m) => {

  const mixarToken = m.contract("MixarToken");

  return { mixarToken };
});

export default MixarTokenModule;
