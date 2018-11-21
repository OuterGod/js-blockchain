const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = 'woiefwoiefj3029j0923fj';
const currentBlockData = [
    {
        amount: 10,
        sender: 'alex0823J0I9H4FH34',
        recipient: 'jennFIJ2309JF20J'
    },
    {
        amount: 100,
        sender: 'alex0823J0I9H4FH34',
        recipient: 'jennFIJ2309JF20J'
    },
    {
        amount: 25,
        sender: 'jennFIJ2309JF20J',
        recipient: 'alex0823J0I9H4FH34'
    },
];
const nonce = 02934;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
