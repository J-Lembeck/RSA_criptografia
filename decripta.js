const fs = require('fs');
const bigInt = require('big-integer');

function decryptFile(privateKey, inputFile, outputFile) {
  const encryptedText = fs.readFileSync(inputFile, 'utf8');
  const decryptedText = decrypt(privateKey, encryptedText);
  fs.writeFileSync(outputFile, decryptedText);
  
  console.log('Arquivo descriptografado com sucesso');
}

function decrypt(privateKey, encryptedText) {
  const { d, n } = privateKey;
  const encryptedBlocks = encryptedText.split(' ');
  let decryptedText = '';

  for (let i = 0; i < encryptedBlocks.length; i++) {
    const encryptedBlock = bigInt(encryptedBlocks[i]);
    const decryptedBlock = encryptedBlock.modPow(d, n);
    const charCode = decryptedBlock.toJSNumber();
    decryptedText += String.fromCharCode(charCode);
  }

  return decryptedText;
}

const privateKeyFile = process.argv[2];
const inputFile = process.argv[3];
const outputFile = process.argv[4];

const privateKey = JSON.parse(fs.readFileSync(privateKeyFile, 'utf8'));

decryptFile(privateKey, inputFile, outputFile);