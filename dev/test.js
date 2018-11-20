const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(0, 'ddee', 'dsdsd');

console.log(bitcoin);
