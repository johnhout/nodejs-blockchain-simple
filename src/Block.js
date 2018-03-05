const SHA512 = require('crypto-js/sha512');

class Block {

    constructor(timestamp, transactions, previousHash = '')
    {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash()
    {
        return SHA512(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) 
    { 

        while(this.hash.substr(0, difficulty) !== Array(difficulty + 1).join("0")) { 
            this.nonce++;
            this.hash = this.calculateHash();
        }

        console.log("Block mined: " + this.hash);
    }

}

module.exports = Block;
