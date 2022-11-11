const fs = require('fs');

const file = fs.readFileSync('./dexter.txt', 'utf-8').trim().split('\n');

const cmd = file.map((f) => {
    if(f.endsWith('part1.rar')) return 'unrar x ' + f;
    return ''
}).filter((f) => {
    return f !== ''
})

cmd.forEach((f) => console.log(f));
