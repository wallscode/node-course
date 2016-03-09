var crypto = require('crypto-js');

// var secretMessage = 'I hid the chips under the couch.';
// var secretKey = '123abc';

// var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);

// console.log('Encrypted Message: ' + encryptedMessage);

// var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);

// console.log('Decrypted Bytes: ' + bytes);

// var decryptedMessage = bytes.toString(crypto.enc.Utf8);

// console.log('Decrypted Message: ' + decryptedMessage);

var secretMessage = {
	name: 'Andrew',
	secretName: '007'
};
var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log('Encrypted Message: ' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);

console.log('Decrypted Bytes: ' + bytes);

var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log(decryptedMessage);
console.log(secretMessage.secretName);
