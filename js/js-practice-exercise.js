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