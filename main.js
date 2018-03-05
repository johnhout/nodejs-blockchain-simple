const SHA512 = require('crypto-js/sha512');

class Block {

    constructor(index, timestamp, data, previousHash = '')
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }

    calculateHash()
    {
        return SHA512(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }

}

class Blockchain {

    constructor() 
    {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() 
    {
        return new Block(0, "01/03/2018", "Genesis block", "0");
    }

    getLatestBlock() 
    {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) 
    {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    isChainValid()
    {
        for(let i=1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if(currentBlock.hash != currentBlock.calculateHash()){ 
                return false;
            }

            if(currentBlock.previousHash != previousBlock.hash)  {
                return false;
            }
        }

        return true;
    }
}

let jcoin = new Blockchain();

jcoin.addBlock(new Block(1, "02/03/2018", { amount: 100 }));
jcoin.addBlock(new Block(2, "05/03/2018", { amount: 400 }));


console.log('Valid: ' + jcoin.isChainValid());

// Test temporaring.
jcoin.chain[1].data = { amount: 3000 };
console.log('Valid: ' + jcoin.isChainValid());

console.log(JSON.stringify(jcoin, null, 4));