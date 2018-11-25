const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1543100612841,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1543100640591,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1543100641585,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "transactionId": "3add40d0f03d11e8a5609fd34900ba83"
                }
            ],
            "nonce": 20539,
            "hash": "000016e7b17ed3768f4682cb201157ed55232d9c7bfc038a68c865d51eeb0cbe",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1543100642893,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "transactionId": "3b736650f03d11e8a5609fd34900ba83"
                }
            ],
            "nonce": 31478,
            "hash": "0000d3f6222bbb34cb7d2d22e4778555ac7f98e19c43f85796d6171056b7f270",
            "previousBlockHash": "000016e7b17ed3768f4682cb201157ed55232d9c7bfc038a68c865d51eeb0cbe"
        },
        {
            "index": 5,
            "timestamp": 1543100755311,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "transactionId": "3c3ad500f03d11e8a5609fd34900ba83"
                },
                {
                    "amount": 30,
                    "sender": "oief0932h",
                    "recipient": "0fh9309fh403i",
                    "transactionId": "4f11ad70f03d11e8a5609fd34900ba83"
                },
                {
                    "amount": 50,
                    "sender": "oief0932h",
                    "recipient": "0fh9309fh403i",
                    "transactionId": "54d24da0f03d11e8a5609fd34900ba83"
                }
            ],
            "nonce": 238714,
            "hash": "00005e81deacdbe682dd462f1749807b110190c9dda86f4c5f17cb1251d132db",
            "previousBlockHash": "0000d3f6222bbb34cb7d2d22e4778555ac7f98e19c43f85796d6171056b7f270"
        },
        {
            "index": 6,
            "timestamp": 1543100825450,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "transactionId": "7f3dd4b0f03d11e8a5609fd34900ba83"
                }
            ],
            "nonce": 32150,
            "hash": "0000f291d155bfd40352f8aedd9f92e582a0877420a3447bde2c204c2438faf0",
            "previousBlockHash": "00005e81deacdbe682dd462f1749807b110190c9dda86f4c5f17cb1251d132db"
        },
        {
            "index": 7,
            "timestamp": 1543100826442,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "transactionId": "a90ad1d0f03d11e8a5609fd34900ba83"
                }
            ],
            "nonce": 7202,
            "hash": "0000ad9db03e1278fffceafcf381bb6233841a9672dc90caf02193d69bae297b",
            "previousBlockHash": "0000f291d155bfd40352f8aedd9f92e582a0877420a3447bde2c204c2438faf0"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "transactionId": "a9a22fd0f03d11e8a5609fd34900ba83"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
};

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));

