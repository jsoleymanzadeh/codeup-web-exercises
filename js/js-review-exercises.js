// ========== Conditional Logic and Functions

// Write a function that takes in a number and returns triple the value of the passed number. Assume only number inputs.
function triple(input) {
	return input * 3;
}

// Modify the above function to work with numeric strings as well.
function tripleNumericString(input) {
	return Number(input) * 3;
}

// Modify the above function to return a string output of 'not a number' if the input is not a number or numeric string.
function tripleNumber(input) {
	if (isNaN(Number(input))) {
		return "not a number";
	} else {
		return Number(input) * 3;
	}
}

// Write a function that takes in a number and string and returns the string 'matches length' if the passed number is the length of the passed string and returns 'no length match' otherwise.
function matchLength(num, str) {
	if (num == str.length) {
		return "matches length";
	} else {
		return "no length match";
	}
}

// (CHALLENGE) Write a function that takes in a day of the week as a string and returns the number that matches the day of the week. 'Sunday' should return 1 and 'Saturday' should return 7.
function numberOfDay(day) {
	switch (day) {
		case "Sunday":
			return 1;
		case "Monday":
			return 2;
		case "Tuesday":
			return 3;
		case "Wednesday":
			return 4;
		case "Thursday":
			return 5;
		case "Friday":
			return 6;
		case "Saturday":
			return 7;
	}
}

// ========== + Loops

// Write a function that takes in a string input and logs each character of the string separately
function showLetters(input) {
	for (let i = 0; i < input.length; i++) {
		console.log(input.charAt(i));
	}
}

// Write a function that takes in a string and logs it 133 times
function log133(input) {
	for (let i = 0; i < 133; i++) {
		console.log(input);
	}
}

// Write a function that takes in a string input and logs the first character, then the first two characters, etc., until the full string is logged.
function stringPyramid(input) {
	let block = "";
	for (let i = 0; i < input.length; i++) {
		block += input.charAt(i);
		console.log(block);
	}
}

// Example
// Input: 'Codeup'
//
// Example
// Output:
//
//     "C"
// "Co"
// "Cod"
// "Code"
// "Codeu"
// "Codeup"

// (CHALLENGE) Write a function that takes in two string inputs and for each letter in the first string, logs how many times that given letter appears in the second string. It should be case-insensitive. If a letter appears more than once in the first string, the output should simply log the same message as many times as it appears in the first string.
function findLetters(str1, str2) {
	let string1 = str1.split("");
	let string2 = str2.split("");
	string1.forEach(function (letter) {
		letter = letter.toLowerCase();
		let letterCount = 0;
		string2.forEach(function (comparedLetter) {
			comparedLetter = comparedLetter.toLowerCase();
			if (letter === comparedLetter) {
				letterCount++;
			}
		});
		console.log(letter + ": " + letterCount)
	});
}

// Example
// Inputs: "Codeup", "Coding Challenges"
//
// Example
// Output:
//
//     'C'
// appears in 'Coding Challenges'
// 2
// time(s)
// 'o'
// appears in 'Coding Challenges'
// 1
// time(s)
// 'd'
// appears in 'Coding Challenges'
// 1
// time(s)
// 'e'
// appears in 'Coding Challenges'
// 2
// time(s)
// 'u'
// appears in 'Coding Challenges'
// 0
// time(s)
// 'p'
// appears in 'Coding Challenges'
// 0
// time(s)


// ========== + Arrays

// Write a function that takes in two inputs and returns an array with those two inputs
function makeArray(input1, input2) {
	return [input1, input2];
}

// Write a function that takes in and array and another input and returns true if the value of the second input is an element in the first input array
function arrayContains(inputArr, inputEle) {
	return inputArr.includes(inputEle);
}

// Write a function that takes in an array of numbers and returns the lowest number. Assume only number element values and an array of at least two numbers.
function findLowest(input) {
	let lowest = input[0];
	input.forEach(function (number) {
		if (lowest > number) {
			lowest = number;
		}
	});
	return lowest;
}

// Write a function that takes in an array of numbers and returns the product of the lowest and highest number. Assume only number element values and an array of at least two numbers.
function lowestTimesHighest(input) {
	let lowest = findLowest(input);
	let highest = input[0];
	input.forEach(function (number) {
		if (highest < number) {
			highest = number;
		}
	});
	return lowest * highest;
}

// Write a function that takes in an array of numbers and returns the sum of the lowest two numbers. Assume only number element values and an array of at least two numbers.
function sumOfLowest(input) {
	let lowest = findLowest(input);
	let secondLowest = input[0];
	if (input[0] === lowest) {
		secondLowest = input[1];
	}
	input.forEach(function (number, location) {
		if (location === input.indexOf(lowest)) {
			return;
		}
		if (secondLowest > number) {
			secondLowest = number;
		}
	});
	return lowest + secondLowest;
}

// Write a function that takes in an array of strings and returns the first two words as a string concatenated together with a dash. Assume at least three string elements in the passed array.
function concatStrings(input) {
	return input[0] + "-" + input[1];
}

// Example
// Input: ['cat', 'dog', 'fish']
// Example
// Output: 'cat-dog'

// (CHALLENGE) Write a function that takes in an array of strings and returns the array of strings sorted from shortest to longest string
function sortedArray(input) {
	let shortNumber;
	for (let i = 0; i < input.length - 1; i++) {
		if (input[i].length > input[i + 1].length) {
			shortNumber = input[i + 1];
			input[i + 1] = input[i];
			input[i] = shortNumber;
			i = -1;
		}
	}
	return input;
}

// ========== + Objects

// Write a function that takes in an object and returns the object with an added property called 'extra' and a value of 'extra value'
function addProperty(input) {
	input.extra = "extra value";
	return input;
}

// Assume for the next questions, this can be used as the array of user objects:


let users = [
	{
		name: 'Justin',
		occupation: 'Web Developer',
		averageAnnualPizzasOrdered: 22
	},
	{
		name: 'Cathy',
		occupation: 'Web Developer',
		averageAnnualPizzasOrdered: 15
	},
	{
		name: 'Fred',
		occupation: 'Data Engineer',
		averageAnnualPizzasOrdered: 35
	},
	{
		name: 'Mary',
		occupation: 'DBA',
		averageAnnualPizzasOrdered: 10
	}
];

// Write a function that takes in an array of user objects and returns the user object of the user with the longest name
function longestName(input) {
	let longName = input[0];
	input.forEach(function (user) {
		if (longName.name.length < user.name.length) {
			longName = user;
		}
	});
	return longName;
}

// Write a function that takes in an array of user objects and returns the 'Web Developer' with highest averageAnnualPizzasOrdered value
function mostPizza(input) {
	let morePizza = input[0];
	input.forEach(function (user) {
		if (morePizza.averageAnnualPizzasOrdered < user.averageAnnualPizzasOrdered) {
			morePizza = user;
		}
	});
	return morePizza;
}

// Write a function that takes in an array of user objects and returns the same array of user objects without the 'averageAnnualPizzasOrdered' properties
function removePizzas(input) {
	input.forEach(function (user) {
		delete user.averageAnnualPizzasOrdered;
	});
	return input;
}

// (CHALLENGE) Write a function that takes in an array of user objects, increases the value of averageAnnualPizzasOrdered by 5 for each user and returns the average annual pizzas ordered across all users, after this adjustment.
function averagePizzas(input) {
	let totalPizzas = 0;
	input.forEach(function (user) {
		totalPizzas += user.averageAnnualPizzasOrdered + 5;
	});
	return totalPizzas / input.length;
}