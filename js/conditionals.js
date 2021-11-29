"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color === "red") {
//         return "bananas are not red";
//     } else if (color === "orange") {
//         return "bananas are not orange";
//     } else if (color === "yellow") {
//         return "bananas are mostly yellow";
//     } else if (color === "green") {
//         return "bananas can be green";
//     } else if (color === "blue") {
//         return "bananas are not blue";
//     } else if (color === "indigo") {
//         return "bananas are not indigo";
//     } else if (color === "violet") {
//         return "bananas are not violet";
//     } else {
//         return "I don't know that color...";
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color) {
        case "red":
            return "bananas are not red";
        case "orange":
            return "bananas are not orange";
        case "yellow":
            return "bananas are mostly yellow";
        case "green":
            return "bananas can be green";
        case "blue":
            return "bananas are not blue";
        case "indigo":
            return "bananas are not indigo";
        case "violet":
            return "bananas are not violet";
        default:
            return "I don't know that color...";
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
alert(analyzeColor(prompt("What is your favorite color?")));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(number, total) {
    switch (number) {
        case 1:
            return (total * 0.9).toFixed(2);
        case 2:
            return (total * 0.75).toFixed(2);
        case 3:
            return (total * 0.65).toFixed(2);
        case 4:
            return (total * 0.5).toFixed(2);
        case 5:
            return (0).toFixed(2);
        default:
            return (total * 1).toFixed(2);
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let totalBill = prompt("What is your totalBill?");
alert("Your total bill was $" + totalBill + "\nYour new total bill is $" + calculateTotal(luckyNumber, totalBill));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
(function () {
    let input = (confirm("Would you like to enter a number?")) ? Number(prompt("Please enter your number now.")) : NaN;
    if (isNaN(input) || input == "") {
        alert("You did not enter a number.");
    } else {
        alert("Your number is " + evenOrOdd(Number(input)));
        alert(input + " + 100  = " + plus100(Number(input)));
        alert("Your number is " + positiveOrNegative(Number(input)));
    }

    function evenOrOdd(number) {
        if (number % 2 === 0) {
            return "even.";
        } else if (number % 2 === 1 || number % 2 === -1) {
            return "odd.";
        }
    }

    function plus100(number) {
        return (number + 100);
    }

    function positiveOrNegative(number) {
        if (number < 0) {
            return "negative.";
        } else if (number > 0) {
            return "positive.";
        } else if (number === 0) {
            return "exactly 0.";
        }
    }
})();