// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title MessageStore
 * @dev A simple contract to store and retrieve a message on the blockchain
 */
contract MessageStore {

    // State variable to store the message
    string private message;

    // Owner of the contract
    address public owner;

    // Event emitted whenever message is updated
    event MessageUpdated(string oldMessage, string newMessage, address updatedBy);

    // Constructor runs once when contract is deployed
    constructor(string memory _initialMessage) {
        message = _initialMessage;
        owner = msg.sender;
    }

    // Store a new message (anyone can call this)
    function setMessage(string memory _newMessage) public {
        string memory oldMessage = message;
        message = _newMessage;
        emit MessageUpdated(oldMessage, _newMessage, msg.sender);
    }

    // Read the current message
    function getMessage() public view returns (string memory) {
        return message;
    }

    // Get the contract owner's address
    function getOwner() public view returns (address) {
        return owner;
    }
}
