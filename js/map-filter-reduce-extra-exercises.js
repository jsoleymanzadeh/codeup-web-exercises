const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [{
	name: "Fred", age: 58, occupation: "Police Officer", noOfPurchases: 4
}, {
	name: "Samantha", age: 54, occupation: "Teacher", noOfPurchases: 18
}, {
	name: "Charles", age: 38, occupation: "Librarian", noOfPurchases: 9
}];

const pets = [{
	name: 'Bud', age: 2, breed: 'Pug'
}, {
	name: 'Gabby', age: 10, breed: 'Retriever'
}, {
	name: 'Fred', age: 1, breed: 'Lab'
}, {
	name: 'Bowser', age: 2, breed: 'Pug'
}];

const family = [{
	name: "Pam", gender: "female", age: 29,
}, {
	name: "Amelie", gender: "female", age: 10,
}, {
	name: "Justin", gender: "male", age: 32,
},];
let fruitFirstLetters = fruits.map(fruit => fruit.charAt(0));
let usersFromCustomers = customers.map(({name, age}) => {
	return {name: name, age: age}
});
let civilServants = customers.filter(({occupation}) => occupation === "Police Officer" || occupation === "Teacher");
let averageAge = customers.reduce((sum, {age}) => sum + age, 0) / customers.length;
let makeSuperPet = pets => pets.reduce((superPet, {name, age, breed}) => {
	superPet.name += name;
	superPet.age += age;
	superPet.breed += breed.charAt(0);
	return superPet;
}, {name: "", age: 0, breed: ""});
let pugNameLengths = pets => {
	let pugs = pets.filter(({breed}) => breed === "Pug");
	return pugs.reduce((nameLengths, {name}) => {
		nameLengths.push(name.length);
		return nameLengths;
	}, []);
}
let getFemaleFamilyMembers = family => {
	let females = family.filter(({gender}) => gender === "female");
	return females.reduce((female, {name}) => {
		female.push(name);
		return female;
	}, []);
}
let makeLongPetString = pets => {
	return pets.reduce((propertiesArray, pet) => {
		propertiesArray.push(Object.entries(pet).map(properties => properties[1]).join("-"));
		return propertiesArray;
	}, []).join("-");
}
let addSmith = names => names.map(name => `${name} Smith`);
let addEvens = numbers => numbers.reduce((sum, number) => {
	if (number % 2 === 0) {
		return sum + number;
	} else {
		return sum;
	}
}, 0);
let addTens = numbers => numbers.reduce((sum, number) => {
	if (number % 10 === 0) {
		return sum + number;
	} else {
		return sum;
	}
}, 0);
let nameFirstLetters = names => names.reduce((firstLetters, name) => firstLetters + name.charAt(0), "");
let truthyValues = values => values.filter(value => !!value);
let objectProperties = object => Object.entries(object).map(property => property[1]);
let numbersBetween = (max, min, numbers) => numbers.filter(number => number >= min && number <= max);
let stringObject = strings => strings.map(string => {
	return {
		value: string,
		length: string.length,
		noVowels: string.split("").filter(letter => letter !== "a" && letter !== "A" && letter !== "e" && letter !== "E" && letter !== "i" && letter !== "I" && letter !== "o" && letter !== "O" && letter !== "u" && letter !== "U").join("")
	}
});
const users = [{
	id: 1, name: 'ryan', email: 'ryan@codeup.com', languages: ['clojure', 'javascript'],
}, {
	id: 2, name: 'luis', email: 'luis@codeup.com', languages: ['java', 'scala', 'php'],
}, {
	id: 3, name: 'zach', email: 'zach@codeup.com', languages: ['javascript', 'bash'],
}, {
	id: 4, name: 'fernando', email: 'fernando@codeup.com', languages: ['java', 'php', 'sql'],
}, {
	id: 5, name: 'justin', email: 'justin@codeup.com', languages: ['html', 'css', 'javascript', 'php'],
},];
let usersObject = users.reduce((finalObject, {id, name, email, languages}) => {
	finalObject[id] = {
		name: name, email: email, languages: languages
	}
	return finalObject;
}, {});
let uniqueLanguages = users.reduce((languageList, user) => {
	user.languages.forEach(function (language) {
		if (!languageList.includes(language)) {
			languageList.push(language);
		}
	});
	return languageList;
}, []);
/**
 * HINT: solve the map/filter/reduce problem with a foreach first
 */

// Reduce Problem #1
// given an array of names, use .reduce to produce a single string that contains everyone's name
var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];
let allNames = names.reduce((nameString, name) => nameString + name, "");
// Reduce Problem #2: Sum up all the numbers in the following array using .reduce
let numbers = [1, 2, 3, 99, 1, -3, 1000, 0, 33, -67];
let totalSum = numbers.reduce((sum, number) => sum + number, 0);
// Reduce Problem #3:
// Given the above array of numbers, write the .reduce necessary to determine the highest number of the array.
let highestNumber = numbers.reduce((highest, number) => {
	if (number > highest) {
		return number;
	} else {
		return highest;
	}
}, 0);
// Reduce problem #4:
// Given the above array of numbers, write the .reduce necessary to determine the lowest number of the array.
let lowestNumber = numbers.reduce((lowest, number) => {
	if (number < lowest) {
		return number;
	} else {
		return lowest;
	}
}, highestNumber);
// Reduce problem #5:
// Given the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use .reduce to determine the average of all the numbers
let average = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce((sum, number) => sum + number, 0) / [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].length;
// Reduce problem #6, given the array of numbers from above, determine the average of all numbers
let averageNumber = numbers.reduce((sum, number) => sum + number, 0) / numbers.length;
// Mapping problem #3
// Using .map to make a Projection
// Applying a function to a value and creating a new value is called a projection.
// each video object should  make a new object containing only the id and the title.
// Your output should be a variable called idAndTitleCollection and look like
/* [
*  {"id": 70111470, "title": "Die Hard"},
*  {"id": 654356453, "title": "Bad Boys},
*  {"id": 65432445, "title": "The Chamber},
*  etc...
* ];
*/
var newReleases = [{
	"id": 70111470,
	"title": "Die Hard",
	"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 654356453,
	"title": "Bad Boys",
	"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{id: 432534, time: 65876586}]
}, {
	"id": 65432445,
	"title": "The Chamber",
	"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [4.0],
	"bookmark": []
}, {
	"id": 675465,
	"title": "Fracture",
	"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
	"rating": [5.0],
	"bookmark": [{id: 432534, time: 65876586}]
}];
let idAndTitleCollection = newReleases.map(({id, title}) => {
	return {id: id, title: title}
});
// Challenge:
// Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array;
// Recommend using .filter or .reduce inside your allIndexesOf function to find the index.
// HINT: If you know your output will be an array, use an empty array as your initial value
// Given:
// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]
var fruits2 = ["apple", "banana", "orange", "apple", "pineapple"];
let allIndexesOf = (array, target) => {
	return array.reduce((matchedIndexes, value, index) => {
		if (value === target) {
			matchedIndexes.push(index);
		}
		return matchedIndexes;
	}, []);
}
// Challenge:
// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to
// Given:
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
let removeAll = (array, value) => array.filter(item => item !== value);
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrences.
const fruits3 = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers2 = [{
	name: "Fred", age: 58, occupation: "Police Officer", noOfPurchases: 4
}, {
	name: "Samantha", age: 54, occupation: "Teacher", noOfPurchases: 18
}, {
	name: "Charles", age: 38, occupation: "Librarian", noOfPurchases: 9
}];
// PROBLEM 1 - create an array of the first letters of each fruit
// HINT: use .map()
let fruitFirst = fruits3.map(fruit => fruit.charAt(0));
// PROBLEM 2 - create array of user objects based on the customers array of
// objects (each user object should just have name and age properties)
// HINT: use .map()
let usersFromCustomers2 = customers2.map(({name, age}) => {
	return {name: name, age: age}
});
// PROBLEM 3 - create an array of civil servant customers (teachers and police
// officers) containing the same properties as the objects on the
// customers objects
// HINT: use .filter()
let civilServants2 = customers2.filter(({occupation}) => occupation === "Police Officer" || occupation === "Teacher");
// PROBLEM 4 - determine the average age of customers
// HINT: use .reduce()
let averageAge2 = customers2.reduce((sum, {age}) => sum + age, 0) / customers2.length;
/* ---------------------------------------------------------------------- */
// Given the following array...
const names2 = ["John", "Max", "Ronald"];
// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
let addSmith2 = names2.map(name => `${name} Smith`);
// - Create an array where each word is in all caps
let capitalized = names2.map(name => name.toUpperCase());
// - Create an array where all names have more than 3 letters
let longNames = names2.filter(name => name.length > 3);
// - Create an array of names with only the last two letters of each name
let lastLetters = names2.map(name => name.charAt(name.length - 2) + name.charAt(name.length - 1));
// - Create a total count of all letters
let totalLetters = names2.reduce((sum, name) => sum + name.length, 0);
// - Create a string of all letters in alphabetical order
let alphabeticalLetters = names2.reduce((string, name) => string + name, "").toLowerCase().split("").sort().join("");
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
let wordObjects = names2.map(name => {
	return {wordLength: name.length, firstLetter: name.charAt(0), lastLetter: name.charAt(name.length - 1)}
});
// - Create a string of all vowels in the entire array of names
let allVowels = names2.reduce((vowels, name) => {
	name
		.split("")
		.filter(letter => letter === "a" || letter === "A" || letter === "e" || letter === "E" || letter === "i" || letter === "I" || letter === "o" || letter === "O" || letter === "u" || letter === "U")
		.forEach(vowel => vowels.push(vowel));
	return vowels;
}, []);
// - Create a single object with properties
/* ---------------------------------------------------------------------- */
// Given the following array...
const family2 = [{
	name: "Karen", gender: "female", age: 29,
}, {
	name: "Summer", gender: "female", age: 10,
}, {
	name: "Bob", gender: "male", age: 32,
},];
// complete the bonuses below...
// - Calculate the average age of family members
let averageAge3 = family2.reduce((sum, {age}) => sum + age, 0) / family2.length;
// - Create an array of family objects without the age property
let familyWithoutAge = family2.map(({name, gender}) => {
	return {name: name, gender: gender}
});
// - Create an array of all minors
let allMinors = family2.filter(({age}) => age < 18);
// - Calculate the total age combined of family members
let totalAge = family2.reduce((sum, {age}) => sum + age, 0);
// - Create an array of only female family member objects
let onlyFemales = family2.filter(({gender}) => gender === "female");
// - Create a single object with properties containing arrays of all names, genders, and ages
let familyObject = family2.reduce((object, {name, gender, age}) => {
	object.names.push(name);
	object.genders.push(gender);
	object.ages.push(age);
	return object;
}, {names: [], genders: [], ages: []});