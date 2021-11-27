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

function stringTrim(string) {
    return string.trim();
}

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

function reverseString(string) {
    return string.split('').reverse().join('');
}

function absoluteValue(number) {
    return Math.abs(number);
}

function rollDice(sides) {
    return ((sides - 1) * Math.random() + 1).toFixed();
}

function returnTwo() {
    return 2;
}

function sayHowdy() {
    console.log("Howdy!");
}

function returnName() {
    return "Jasper";
}

function addThree(number) {
    return number + 3;
}

function sayString(string) {
    return string;
}

function identity(input) {
    return input;
}

function getRandomNumber(min, max) {
    return (max - min) * Math.random() + min;
}

function first(input) {
    return input.charAt(0);
}

function last(input) {
    return input.charAt(input.length - 1);
}

function rest(input) {
    return input.split('').slice(1, input.length).join('');
}

function stringReverse(input) {
    return input.split('').reverse().join('');
}

function isNumeric(input) {
    return typeof input === "number";
}

function count(input) {
    return input.length;
}

function add(a, b) {
    return a + b;
}

function subtract2(a, b) {
    return a - b;
}

function multiply2(a, b) {
    return a * b;
}

function divide2(a, b) {
    return a / b;
}

function remainder2(number, divisor) {
    return number % divisor;
}

function square(a) {
    return a * a;
}

function sumOfSquares(a, b) {
    return add(square(a), square(b));
}

function doMath(operator, a, b) {
    return operator(a, b);
}

function countWhitespace(string) {
    return string.length - string.trim().length;
}

function twoStrings(string1, string2) {
    return string1.replace(string2, '');
}

function lastLetterA(string) {
    return string.charAt(string.length - 1) === "a" || string.charAt(string.length - 1) === "A";
}

function countWhitespaceLeft(string) {
    return string.length - string.trimStart().length;
}

function returnTrueMessage() {
    return "Hey, it's true!";
}

function returnFalseMessage() {
    return "Hey, it's false!";
}

function returnMessage(input) {
    return input();
}

function willLoginUser(username, password, age, isAdmin) {
    if (isAdmin) {
        return username !== password;
    } else {
        return (username !== password) && age >= 18;
    }
}
