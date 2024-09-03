// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MixaToken is ERC20 {

    address owner;

    uint256 public constant maxTotalSupply = 50000000 * 10 ** 18;

    constructor() ERC20("Mixar", "MXR") {}

    function mint(uint256 _amount) public {
        _mint(msg.sender, _amount);
    }
}