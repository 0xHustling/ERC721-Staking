// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor() ERC20("MockERC20", "MOCK-ERC20") {}

    function mint(address _account, uint256 _amount) public {
        super._mint(_account, _amount);
    }
}
