function isOdd(number) {
    return (number % 2 === 1);
}

function isEven(number) {
    return !isOdd(number);
}

function identityInput(input) {
    return input;
}

function isFive(input) {
    return input === 5;
}

function addFive(input) {
    return input + 5;
}

function isMultipleOfFive(input) {
    return (input % 5 === 0);
}

function isThree(input) {
    return input === 3;
}

function isMultipleOfThree(input) {
    return (input % 3 === 0);
}

function isMultipleOfThreeAndFive(input) {
    return isMultipleOfFive(input) && isMultipleOfThree(input);
}

function isMultipleOf(target, n) {
    return (target % n === 0);
}

function isTrue(boolean) {
    return boolean;
}

function isFalse(boolean) {
    return !boolean;
}

function isTruthy(input) {
    return !!input;
}

function isFalsy(input) {
    return !input;
}

function isVowel(letter) {
    return letter === "A" || letter === "a" || letter === "E" || letter === "e" || letter === "I" || letter === "i" || letter === "O" || letter === "o" || letter === "U" || letter === "u";
}

function isConsonant(letter) {
    return !isVowel(letter);
}

function isCapital(letter) {
    return (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90);
}

function isLowerCase(letter) {
    return (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122);
}

function hasLowerCase(string) {
    return string.toUpperCase() !== string;
}

function isSpace(letter) {
    return letter === " ";
}

function isZero(number) {
    return number === 0;
}

function notZero(input) {
    return input !== 0;
}

function lowerCase(string) {
    return string.toLowerCase();
}

function double(n) {
    return n * 2;
}

function triple(n) {
    return n * 3;
}

function quadruple(n) {
    return n * 4;
}

function half(n) {
    return n / 2;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function modulo(a, b) {
    return a % b;
}

function cube(n) {
    return n * n * n;
}

function squareRoot(n) {
    return Math.sqrt(n);
}

function cubeRoot(n) {
    return Math.cbrt(n);
}

function invertSign(number) {
    if (isNaN(number)) {
        return false;
    } else {
        return number * -1;
    }
}

function degreesToRadians(number) {
    return number * Math.PI / 180;
}

function radiansToDegrees(number) {
    return number * 180 / Math.PI;
}

function isBlank(input) {
    return input.trim() === "";
}

/*function trim(string) {
    return string.trim();
}*/
function areEqual(input1, input2) {
    return input1 == input2;
}

function areIdentical(input1, input2) {
    return input1 === input2;
}

function not(input) {
    return !input;
}

function notNot(input) {
    return !!input;
}

function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}

function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}

/*function reverseString(string) {
    return
}*/
function absoluteValue(number) {
    return Math.abs(number);
}

function rollDice(sides) {
    return ((sides - 1) * Math.random() + 1).toFixed();
}