import * as customers from './vielfeld_customer.json';
import * as purchases from './vielfeld_purchase.json';


let foundMulti = 0;
let nonMulti = 0;

const match = [',', '&', 'und']

String.prototype.includesOneOf = function (match: string[]): boolean {
    let matches = false;

    match.forEach((entry) => {
        if(this.includes(entry)) {
            matches = true
            return;
        }
    })

    return matches;
}

customers.forEach(({name}) => {
    if(name.includesOneOf(match)) foundMulti++;
    else nonMulti++;
});

purchases.forEach((n) => {
    if(n.gifteeName?.includesOneOf(match)) foundMulti++;
})

console.log(foundMulti);
console.log(nonMulti);
