# ⚙️ SemaTell Smart Contract Architecture MVP

This document outlines the Solidity contracts necessary for the **SemaTell** Minimum Viable Product (MVP). We are targeting an **EVM-compatible blockchain** (e.g., Ethereum, Polygon, BNB Chain).

## 1. Design Philosophy

The core logic must support two key gamification features:
1.  **The Knowledge Point (KP) System:** Requires a stable, ERC-20 compliant token for all staking.
2.  **The Early Bird Bonus:** Requires a dynamic **Weighted Stake** mechanism built directly into the prediction market contract.

---

## 2. Contract 1: KnowledgePointToken (KP Token)

**File:** `KnowledgePointToken.sol`

### Goal
A standard ERC-20 token that serves as the single fungible asset for all staking and reward activity. It must be highly controlled to prevent abuse.

### Key Features and Functions

| Feature | Description | Implementation Notes |
| :--- | :--- | :--- |
| **Standard ERC-20** | Implements the full ERC-20 standard (e.g., `transfer`, `balanceOf`). | Use OpenZeppelin's `ERC20` for audited security. |
| **Controlled Minting** | Only the central `MarketFactory` address can create new KP. | Uses a `onlyMinter` modifier to restrict calls to the Factory contract. |
| **Controlled Burning** | Allows the Factory to burn KP for platform fees or market losses. | Requires a `onlyMinter` modifier. |

### Simplified Solidity Snippet (Interface)

```solidity
// Uses OpenZeppelin Contracts (ERC20, Ownable)
contract KnowledgePointToken is ERC20, Ownable {
    address public immutable MARKET_FACTORY_ADDRESS;

    constructor(address _factoryAddress) ERC20("Knowledge Point", "KP") {
        MARKET_FACTORY_ADDRESS = _factoryAddress;
    }

    modifier onlyMinter() {
        require(msg.sender == MARKET_FACTORY_ADDRESS, "Caller is not the Minter");
        _;
    }

    // Function called by the MarketFactory to reward winners
    function mint(address to, uint256 amount) external onlyMinter {
        _mint(to, amount);
    }

    // Function called by the MarketFactory for fee collection
    function burn(uint256 amount) external onlyMinter {
        _burn(msg.sender, amount);
    }
}