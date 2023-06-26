const fs = require('fs');
const bigInt = require('big-integer');

function encryptFile(publicKey, inputFile, outputFile) {
  const plaintext = fs.readFileSync(inputFile, 'utf8');
  const encryptedText = encrypt(publicKey, plaintext);
  fs.writeFileSync(outputFile, encryptedText);
  
  console.log('Arquivo criptografado salvo com sucesso');
}

function encrypt(publicKey, plaintext) {
  const { e, n } = publicKey;
  const encryptedBlocks = [];

  for (let i = 0; i < plaintext.length; i++) {
    const charCode = plaintext.charCodeAt(i);
    const encryptedBlock = bigInt(charCode).modPow(e, n);
    encryptedBlocks.push(encryptedBlock.toString());
  }

  return encryptedBlocks.join(' ');
}

const publicKeyFile = process.argv[2];
const inputFile = process.argv[3];
const outputFile = process.argv[4];

const publicKey = JSON.parse(fs.readFileSync(publicKeyFile, 'utf8'));

encryptFile(publicKey, inputFile, outputFile);