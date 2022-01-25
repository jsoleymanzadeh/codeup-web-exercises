"use strict";

function checkCase(input) {
	for (let i = 0; i < input.length; i++) {
		if (input.charAt(i).toLowerCase() === input.charAt(i).toUpperCase()) {
			console.log(input.charAt(i) + " is not a letter");
		} else if (input.charAt(i) === input.charAt(i).toLowerCase()) {
			console.log(input.charAt(i) + " is lowercase");
		} else if (input.charAt(i) === input.charAt(i).toUpperCase()) {
			console.log(input.charAt(i) + " is uppercase");
		}
	}
}

function returnSum(input) {
	let numbers = input.split("");
	let totalSum = 0;
	numbers.forEach(function (number) {
		totalSum += Number(number);
	});
	return totalSum;
}

function consecutiveChars(input) {
	let numbers = input.split("");
	let results = {};
	for (let i = 0; i < numbers.length; i++) {
		let consecutive = 1;
		while (numbers[i] === numbers[i + 1]) {
			consecutive++;
			i++;
		}
		if (consecutive > 1 && !results[numbers[i]]) {
			results[numbers[i]] = consecutive;
		} else if (consecutive > 1 && !!results[numbers[i]]) {
			results[numbers[i]] += consecutive;
		}
		for (let j = 0; j < consecutive; j++) {
			numbers.shift();
			i--;
		}
	}
	return results;
}