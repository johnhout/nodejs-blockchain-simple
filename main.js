
var Block = require('./src/Block');
var Blockchain = require('./src/Blockchain');

let jcoin = new Blockchain();

console.log("Mining block 1 ...");
jcoin.addBlock(new Block(1, "02/03/2018", { amount: 100 }));

console.log("Mining block 2 ...");
jcoin.addBlock(new Block(2, "05/03/2018", { amount: 400 }));

console.log(JSON.stringify(jcoin, null, 4));