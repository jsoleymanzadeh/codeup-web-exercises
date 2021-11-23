function add(values) {
    let total = 0;
    for(let i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total;
}
function subtract(values) {
    let total = values[0];
    for(let i = 1; i < values.length; i++) {
        total -= values[i];
    }
    return total;
}
function multiply(values) {
    let total = 1;
    for (let i = 0; i < values.length; i++) {
        total *= values[i];
    }
    return total;
}
function divide(values) {
    let total = values[0];
    for(let i = 1; i < values.length; i++) {
        total /= values[i];
    }
    return total;
}
function modulo(value1, value2) {
    return value1 % value2;
}
console.log(divide([22, 7]));