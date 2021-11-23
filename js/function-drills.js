function isOdd(number) {
    return (number % 2 == 1);
}
function isEven(number) {
    return !isOdd(number);
}
function identityInput(input) {
    return input;
}
function isFive(input) {
    return input == 5;
}
function addFive(input) {
    return input + 5;
}
function isMultipleOfFive(input) {
    return (input % 5 == 0);
}
function isThree(input) {
    return input == 3;
}
function isMultipleOfThree(input) {
    return (input % 3 == 0);
}
function isMultipleOfThreeAndFive(input) {
    return isMultipleOfFive(input) && isMultipleOfThree(input);
}
function isMultipleOf(target, n) {
    return (target % n == 0);
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
    return letter == "A" || letter == "a" || letter == "E" || letter == "e" || letter == "I" || letter == "i" || letter == "O" || letter == "o" || letter == "U" || letter == "u";
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
/*
function hasLowerCase(string) {
    return
}*/
