function getToDestination(age, isInsured, hasCar) {
    if (age > 16 && isInsured && hasCar) {
        console.log("You can drive.");
    } else if ((age < 16 || !isInsured || !hasCar) && canGetRideshare(true, true)) {
        console.log("You should call a rideshare service.");
    } else if ((age < 16 || !isInsured || !hasCar) && !canGetRideshare(false, true)) {
        console.log("You are unable to use a rideshare service at this time. You can't make it...");
    } else {
        console.log("You can't make it...");
    }
}

function canGetRideshare(driversAvailable, canPay) {
    if (driversAvailable && canPay) {
        return true;
    } else {
        return false;
    }
}

(function () {
    function getBodyStyle() {
        let bodyStyle = prompt("What is your vehicle's body style (2D, 4D, etc)?");
        switch (bodyStyle) {
            case "2D" :
                bodyStyle = "two-door";
                break;
            case "3D" :
                bodyStyle = "three-door";
                break;
            case "4D" :
                bodyStyle = "four-door";
                break;
            case "5D" :
                bodyStyle = "five-door";
                break;
            default :
                alert("Your body style is not recognized. Please try again.");
                bodyStyle = getBodyStyle();
                break;
        }
        return bodyStyle;
    }

    function getVehicleType() {
        let vehicleType = prompt("What is your vehicle type (sports car, sedan, compact, truck, etc)?");
        switch (vehicleType) {
            case "sports car" :
                break;
            case "coupe" :
                break;
            case "convertible" :
                break;
            case "sedan" :
                break;
            case "compact" :
                break;
            case "truck" :
                break;
            case "SUV" :
                break;
            case "hatchback" :
                break;
            case "crossover" :
                break;
            case "minivan" :
                break;
            case "station wagon" :
                break;
            case "van" :
                break;
            default :
                alert("Your vehicle type is not recognized. Please try again.");
                vehicleType = getVehicleType();
                break;
        }
        return vehicleType;
    }

    function getColor() {
        let color = prompt("What is the color of your vehicle?");
        switch (color) {
            case "red" :
                break;
            case "yellow" :
                break;
            case "green" :
                break;
            case "blue" :
                break;
            case "black" :
                break;
            case "white" :
                break;
            default :
                alert("Your vehicle's color is not recognized. Please try again.");
                color = getColor();
                break;
        }
        return color;
    }

    alert("Your vehicle is a " + getColor() + " " + getBodyStyle() + " " + getVehicleType() + ".");
})();