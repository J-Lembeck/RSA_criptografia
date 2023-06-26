const fs = require('fs');
const bigInt = require('big-integer');

function generateKeys() {
  const primeFile = 'primekeys.txt';
  const primes = fs.readFileSync(primeFile, 'utf8').split('\n');
  
  const p = getPrime(primes);
  const q = getPrime(primes);
  const n = p.multiply(q);
  const totient = calculateTotient(p, q);
  const e = calculateE(totient);
  const d = calculateD(e, totient);
  
  const publicKey = { e: e, n: n };
  const privateKey = { d: d, n: n };
  
  saveKeyToFile(publicKey, 'public_key.txt');
  saveKeyToFile(privateKey, 'private_key.txt');

  console.log("Keys geradas com sucesso.")
}

function getPrime(primes) {
  const randomIndex = Math.floor(Math.random() * primes.length);
  const primeStr = primes[randomIndex];
  return bigInt(primeStr);
}

function calculateTotient(p, q) {
  const pMinusOne = p.minus(1);
  const qMinusOne = q.minus(1);
  return pMinusOne.multiply(qMinusOne);
}

function calculateE(totient) {
  let e = bigInt(2);
  while (e.compare(totient) < 0) {
    if (bigInt.gcd(totient, e).equals(1)) {
      break;
    }
    e = e.plus(1);
  }
  return e;
}

function calculateD(e, totient) {
  return e.modInv(totient);
}

function saveKeyToFile(key, fileName) {
  const keyString = JSON.stringify(key);
  fs.writeFileSync(fileName, keyString);
}

generateKeys();