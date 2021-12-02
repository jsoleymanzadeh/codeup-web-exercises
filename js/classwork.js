// function autoGrade(input) {
//     //practice with if-else
//     // if (input >= 90) {
//     //     console.log("You have an A!");
//     // } else if (input < 90 && input >= 80) {
//     //     console.log("You have a B.");
//     // } else if (input < 80 && input >= 70) {
//     //     console.log("You have a C.");
//     // } else if (input < 70 && input >= 60) {
//     //     console.log("You have a D.");
//     // } else {
//     //     console.log("You are failing.");
//     // }
//     //practice with ternary operator
//     // input >= 90 ?
//     //     console.log("You have an A!") :
//     //     input < 90 && input >= 80 ?
//     //         console.log("You have a B.") :
//     //         input < 80 && input >= 70 ?
//     //             console.log("You have a C.") :
//     //             input < 70 && input >= 60 ?
//     //                 console.log("You have a D.") :
//     //                 console.log("You are failing.");
//     // practice with switch-case
//     switch (true) {
//         case input >= 90 :
//             console.log("You have an A!");
//             break;
//         case input < 90 && input >= 80 :
//             console.log("You have a B.");
//             break;
//         case input < 80 && input >= 70 :
//             console.log("You have a C.");
//             break;
//         case input < 70 && input >= 60 :
//             console.log("You have a D.");
//             break;
//         default :
//             console.log("You are failing.");
//             break;
//     }
// }
//
// (function () {
//     function average() {
//         return (Number(prompt("What is your first score?")) + Number(prompt("What is your second score?")) + Number(prompt("What is your third score?"))) / 3;
//     }
//
//     function multipleOfThreeOrFive() {
//         let highScore = prompt("What is your highest score?");
//         if (highScore % 3 === 0 || highScore % 5 === 0) {
//             return "3 or 5.";
//         } else {
//             return "neither 3 nor 5.";
//         }
//     }
//
//     function lowerCase(name) {
//         name = name.toLowerCase();
//         return name.replace("the", "the ").replace("best", "best ").replace("bowling", "bowling ").replace("place", "place ");
//     }
//
//     let score = 109;
//     let name = "bowling Is Fun";
//     let isBowlingFun = true;
//     let players = ["tom", "jerry", "Garfield"];
//
//     function variableType(input) {
//         return typeof input;
//     }
//
//     alert("Your average score is " + average() + ".");
//     alert("Your highest score is divisible by " + multipleOfThreeOrFive());
//     alert('The signs at our local bowling place say "ThEbEsTbOwLiNgPlAcEever." They should fix the spelling to "' + lowerCase("ThEbEsTbOwLiNgPlAcEever" + '."'));
//     alert("The score of " + score + " is a " + variableType(score) + ".");
//     alert('The name "' + name + '" is a ' + variableType(name) + ".");
//     alert('The variable "isBowlingFun" is a ' + variableType(isBowlingFun) + ".");
//     alert("The group of players " + players + " is an " + variableType(players));
// })();
// let myFunction = function (firstName, lastName) {
//     return firstName + " " + lastName;
// }
//
// function thatsNotMyName(name) {
//     if (name = "Laura") {
//         return "that's me! I'm " + name;
//     } else {
//         return "that's not my name";
//     }
// }
// let parkingSpaceChecked = 1;
// let available = false;
// let emptySpot = Math.floor(Math.random() * 20) + 1;
// while (!available) {
//     if (parkingSpaceChecked === emptySpot) {
//         available = true;
//         console.log("There's an empty space at " + parkingSpaceChecked + "!");
//     } else {
//         console.log("Space " + parkingSpaceChecked + " is taken...");
//         parkingSpaceChecked++;
//     }
// }
// let value = 0;
// do {
//     console.log(value);
//     value += 2;
// } while (value <= 50);
// let value = 0;
// console.log("---------- while loop practice ----------");
// while (value <= 10) {
//     console.log("Iteration: " + value);
//     value++;
// }
// console.log("---------- do-while loop practice ----------");
// value = 0;
// do {
//     console.log("Iteration: " + value);
//     value++;
// } while (value <= 10);
// let correctPassword = "secretpassword";
// let input = "";
// while (input !== correctPassword) {
//     input = prompt("Please enter your password correctly.");
//     if (input !== correctPassword) {
//         alert("You entered the wrong password. Please try again.");
//     }
// }