const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(87146, 'OIWEF8923FIH', 'IOFHWE9823HFOI');

bitcoin.createNewTransaction(20, 'alex67TFE87', 'jennHFOIHF98');

bitcoin.createNewBlock(98237, 'iuqhf87y239uih', '928r3ho2fh9');

bitcoin.createNewTransaction(20, 'alex67TFE87', 'jennHFOIHF98');
bitcoin.createNewTransaction(203, 'jennHFOIHF98', 'alex67TFE87');
bitcoin.createNewTransaction(100, 'alex67TFE87', 'jennHFOIHF98');

bitcoin.createNewBlock(235, 'ouwhfe89whef', 'hewf98hf298hf23');

console.log(bitcoin.chain[2]);
