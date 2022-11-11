const rawAlphabet = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
const rawKey =      '! ) " ( £ * % & > < @ a b c d e f g h i j k l m n o';

const alphabet = rawAlphabet.split(" ");
const key = rawKey.split(" ");

function encrypt(input: string) {
    const letters = input.toLowerCase().split("");
    const encryptedMessage = letters.map((letter) => key[alphabet.indexOf(letter)]);
    return encryptedMessage.join("");
}

function decrypt(input: string) {
    const letters = input.toLowerCase().split("");
    const decryptedMessage = letters.map((letter) => alphabet[key.indexOf(letter)]);
    return decryptedMessage.join("");
}

const input = "OMG";
const encrypted = encrypt(input);
const decrypted = decrypt(encrypted);
console.log('Encrypted: ' + encrypted);
console.log('Decrypted: ' + decrypted);