function autoGrade(input) {
    //practice with if-else
    // if (input >= 90) {
    //     console.log("You have an A!");
    // } else if (input < 90 && input >= 80) {
    //     console.log("You have a B.");
    // } else if (input < 80 && input >= 70) {
    //     console.log("You have a C.");
    // } else if (input < 70 && input >= 60) {
    //     console.log("You have a D.");
    // } else {
    //     console.log("You are failing.");
    // }
    //practice with ternary operator
    // input >= 90 ?
    //     console.log("You have an A!") :
    //     input < 90 && input >= 80 ?
    //         console.log("You have a B.") :
    //         input < 80 && input >= 70 ?
    //             console.log("You have a C.") :
    //             input < 70 && input >= 60 ?
    //                 console.log("You have a D.") :
    //                 console.log("You are failing.");
    // practice with switch-case
    switch (true) {
        case input >= 90 :
            console.log("You have an A!");
            break;
        case input < 90 && input >= 80 :
            console.log("You have a B.");
            break;
        case input < 80 && input >= 70 :
            console.log("You have a C.");
            break;
        case input < 70 && input >= 60 :
            console.log("You have a D.");
            break;
        default :
            console.log("You are failing.");
            break;
    }
}

let student1Grade = 87;
let student2Grade = 59;
let student3Grade = 96;
let student4Grade = 77;
let student5Grade = 99;
autoGrade(student1Grade);
autoGrade(student2Grade);
autoGrade(student3Grade);
autoGrade(student4Grade);
autoGrade(student5Grade);