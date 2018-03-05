
var Block = require('./src/Block');
var Blockchain = require('./src/Blockchain');
var Transaction = require('./src/Transaction');

let jcoin = new Blockchain();

jcoin.createTransaction(new Transaction("address1", "address2", 100));
jcoin.createTransaction(new Transaction("address2", "address1", 50));

console.log('\n Starting the miner..');
jcoin.minePendingTransactions('johns-address');

console.log('\n Balance: ' + jcoin.getBalanceOfAddress('johns-addres')); 

console.log('\n starting the miner again..');
jcoin.minePendingTransactions('johns-address');

console.log('\n Final Balance: ' + jcoin.getBalanceOfAddress('johns-addres')); 