let initialObj = {
    lol: 1,
    lel: 2,
    lal: 3
};

const obj = initialObj;

let secondObj = {
    lol: 1,
    lel: 2,
    lal: 3
};

initialObj = {
    lol: 1,
    lel: 2,
    lal: 3
}

console.log(initialObj === obj)
