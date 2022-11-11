console.clear();
const alphabet = ["", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const inputLetter = process.argv[2];
const inputLetterIndex = alphabet.indexOf(inputLetter);

if(inputLetterIndex === -1) throw new Error('Invalid Letter :(');

const letters = [];
const startingLetter = alphabet.indexOf('A');

let gapBetween = 0;
for(let i = startingLetter; i <= inputLetterIndex; i++) {
    const spacing = " ".repeat(inputLetterIndex - i);
    const isFirstLetter = i === startingLetter;
    let output = "";
    output += spacing;
    output += alphabet[i];
    if(!isFirstLetter) {
        output += " ".repeat(gapBetween);
        output += alphabet[i];
    }
    output += spacing;
    letters.push(output);
    if(isFirstLetter) gapBetween = 1;
    else gapBetween += 2;
}

console.log(letters.join('\n'))
letters.pop();
console.log(letters.reverse().join('\n'))