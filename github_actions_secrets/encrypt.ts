const sodium = require('tweetsodium');
const key = "VR2Swv5Jej4cKErvMKlp2RQd7ohWdbaCy3ApqwOgcT4=";
const value = "XJ+/ZTvvrQC2OuF1NNLbqvbGBoNTpV39eRjbtOot";


// Convert the message and key to Uint8Array's (Buffer implements that interface)
const messageBytes = Buffer.from(value);
const keyBytes = Buffer.from(key, 'base64');


// Encrypt using LibSodium.
const encryptedBytes = sodium.seal(messageBytes, keyBytes);


// Base64 the encrypted secret
const encrypted = Buffer.from(encryptedBytes).toString('base64');


console.log(encrypted);
