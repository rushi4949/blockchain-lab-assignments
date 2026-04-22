# 🧠 Blockchain Lab Assignments

## 👤 Student Details

* **Name:** Rushikesh Bade
* **Roll Number:** 123B1B086
* **Course:** Blockchain Laboratory

---

## 📌 Overview

This repository contains implementations of blockchain lab assignments covering important Web3 concepts such as smart contracts, decentralized applications (DApps), IPFS-based storage, and DAO-based governance systems.

---

## 📁 Assignment Details

### 🔹 Assignment 1: Smart Contract Development

A Solidity-based smart contract that stores and retrieves student-related data on the blockchain. It demonstrates the use of state variables, functions, and basic contract structure.

---

### 🔹 Assignment 2: Polygon Deployment

The smart contract is deployed on the **Polygon Amoy Testnet**, highlighting faster transactions and lower gas fees compared to traditional Ethereum networks.

---

### 🔹 Assignment 3: Web Interface with MetaMask

A simple decentralized application (DApp) is created using HTML, CSS, and JavaScript. It connects to the blockchain using **ethers.js** and allows interaction through MetaMask.

---

### 🔹 Assignment 4: IPFS Integration

Implemented decentralized file storage using **IPFS (via Pinata)**. Files are uploaded and accessed using a unique CID (Content Identifier), ensuring distributed storage.

---

### 🔹 Assignment 5: DAO Smart Contract

Developed a basic DAO system where users can create proposals, vote on them, and execute decisions based on voting outcomes.

---

## 🛠️ Technologies Used

* Solidity
* Remix IDE
* MetaMask
* Ethers.js
* HTML, CSS, JavaScript
* Sepolia Test Network
* Polygon Amoy Network
* IPFS (Pinata)

---

## 🚀 Execution Steps

### ▶️ Assignment 1 & 2 (Smart Contracts)

1. Open Remix IDE: https://remix.ethereum.org
2. Load the `.sol` contract file
3. Compile the contract
4. Go to **Deploy & Run Transactions**
5. Select **Injected Provider (MetaMask)**
6. Connect your wallet
7. Choose network:

   * Sepolia (Assignment 1)
   * Polygon Amoy (Assignment 2)
8. Deploy the contract and confirm the transaction

---

### ▶️ Assignment 3 (Web Application)

1. Open terminal in the `assignment-3` folder
2. Run the command:

   ```
   python -m http.server 3000
   ```
3. Open browser: http://127.0.0.1:3000
4. Connect MetaMask wallet
5. Interact with the smart contract

---

### ▶️ Assignment 4 (IPFS Storage)

1. Open `index.html` (or use Live Server)
2. Upload any file
3. Copy the generated CID
4. Use the CID to retrieve the file

---

### ▶️ Assignment 5 (DAO Contract)

1. Open Remix IDE
2. Compile `dao.sol`
3. Deploy using MetaMask
4. Interact with functions:

   * `createProposal()`
   * `castVote()`
   * `executeProposal()`
5. Check results using `getProposals()`

---
