pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PBXToken is Ownable, ERC20Burnable {
  string private constant _name = "Marhaba DeFi";
  string private constant _symbol = "MRHB";

  constructor(uint256 initialSupply) public ERC20(_name, _symbol) {
    _mint(owner(), initialSupply);
  }
}