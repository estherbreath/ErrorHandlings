## Smart Contract Management Overview

### Purpose:
The ErrorHandlings contract is designed to manage a numeric value with controlled modification, ensuring security and integrity through various error-handling mechanisms. It employs the require, assert, and revert statements to enforce specific conditions and prevent unintended behavior during state changes.

## Functions


setValue(uint256 _newValue) external onlyOwner: Allows the owner to set a new value with specified conditions:

Uses require to check if the new value is greater than zero.
Uses assert to ensure there are no internal errors during the state change.
Utilizes revert to explicitly revert the transaction if the new value exceeds 100.
increaseValue(uint256 _increaseAmount) external onlyOwner: Enables the owner to increase the value:

Employs require to ensure the increase amount is greater than zero.
Uses assert to verify there are no internal errors during the state change.
Applies revert to explicitly revert the transaction if the resulting value would exceed 100.
decreaseValue(uint256 _decreaseAmount) external onlyOwner: Permits the owner to decrease the value:

Utilizes require to check if the decrease amount is greater than zero.
Implements assert to validate there are no internal errors during the state change.
Employs revert to explicitly revert the transaction if the resulting value would be less than zero.

### Deployment
The contract was deployed and verified on mumbai testnet, and the abi used accordingly.

### Contract Address
0xa6beCdC508FF233c51885FFD58fE3A1a3b6d6Da9

### UI

It implements a UI with buttons to set, increase and decrease value

## Authors

Esther Breath
[@metacraftersio](https://twitter.com/EstherBreath10)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
