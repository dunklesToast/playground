function check1(value, previousValue) {
    const hasValueLength = value.length || previousValue.length;
    const isNewValue = value.includes(previousValue) || previousValue.includes(value);
    return hasValueLength && isNewValue
}

function check2(value, previousValue) {
    return Boolean(value.length || previousValue.length) && (value.includes(previousValue) || previousValue.includes(value))
}

const value = ['testx', 'test2'];
const previousValue = 'test';

console.log(check1(value, previousValue))
console.log(check2(value, previousValue))