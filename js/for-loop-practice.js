"use strict";
let names = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

function filterNames(names) {
	let filteredNames = [];
	names.forEach(function (name) {
		if (name.length === 4) {
			filteredNames.push(name);
		}
	})
	return filteredNames;
}

console.log(filterNames(names));