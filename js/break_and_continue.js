let number;
while (true) {
    number = Number(prompt("Enter an odd number between 1 and 50."));
    if (!isNaN(number) && number <= 50 && number >= 1 && number % 2 == 1) {
        console.log("Number to skip is: " + number);
        break;
    }
}
for (let i = 0; i < 50; i++) {
    if (i % 2 === 1) {
        if (i === number) {
            console.log("Yikes! Skipping number: " + i);
            continue;
        }
        console.log("Here is an odd number: " + i);
        continue;
    }
}