// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MockERC721 is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter internal _total;

    constructor() ERC721("MockERC721", "MOCK-ERC721") {}

    function mint(address _to, uint256 _tokenId) public {
        _safeMint(_to, _tokenId);
    }

    function generateTestAssets(uint256 amount, address receiver) external {
        for (uint256 i = 0; i < amount; i++) {
            _total.increment();
            mint(receiver, _total.current());
        }
    }
}
