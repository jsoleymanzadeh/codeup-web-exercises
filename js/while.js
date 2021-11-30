// let number = 1;
// while (number < 65536) {
//     number *= 2;
//     console.log(number);
// }
let quota = Math.floor((Math.random() * 50) + 50);
let totalSold = 0;
do {
    let cones = Math.floor((Math.random() * 5) + 1);
    if (totalSold + cones > quota) {
        console.log("Sorry, I only have " + (quota - totalSold) + " cones left. I can't give you " + cones + " cones.");
        continue;
    }
    totalSold += cones;
    console.log("Sold " + cones + " units to customer.");
} while (totalSold < quota);
console.log("I'm sold out!");