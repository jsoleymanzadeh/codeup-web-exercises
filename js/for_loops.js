function showMultiplicationTable(input) {
    for (let i = 1; i <= 10; i++) {
        console.log(input + " * " + i + " = " + (input * i));
    }
}

(function () {
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 180) + 20;
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even");
        } else {
            console.log(randomNumber + " is odd");
        }
    }
})();
// (function () {
//     for (let i = 1; i < 10; i++) {
//         let finalString = "";
//         for (let j = 0; j < i; j++) {
//             finalString += i.toString();
//         }
//         console.log(finalString);
//     }
// })();
(function() {
    for(let i = 1; i < 10; i++) {
        console.log(i * ((Math.pow(10, i) - 1) / 9));
    }
})();
(function () {
    for (let i = 100; i > 0; i -= 5) {
        console.log(i);
    }
})();