"use strict";
const users = [{
	id: 1,
	name: 'ryan',
	email: 'ryan@codeup.com',
	languages: ['clojure', 'javascript'],
	yearsOfExperience: 5
}, {
	id: 2,
	name: 'luis',
	email: 'luis@codeup.com',
	languages: ['java', 'scala', 'php'],
	yearsOfExperience: 6
}, {
	id: 3,
	name: 'zach',
	email: 'zach@codeup.com',
	languages: ['javascript', 'bash'],
	yearsOfExperience: 7
}, {
	id: 4,
	name: 'fernando',
	email: 'fernando@codeup.com',
	languages: ['java', 'php', 'sql'],
	yearsOfExperience: 8
}, {
	id: 5,
	name: 'justin',
	email: 'justin@codeup.com',
	languages: ['html', 'css', 'javascript', 'php'],
	yearsOfExperience: 9
}];
let threeLanguages = users.filter(({languages}) => languages.length >= 3);
let emails = users.map(({email}) => email);
let years = users.reduce((total, {yearsOfExperience}) => total += yearsOfExperience, 0);
let averageYears = years / users.length;
let longestEmail = users.reduce((longest, {email}) => {
	if (email.length > longest.length) {
		return email;
	} else {
		return longest;
	}
}, "");
let allUsers = users.reduce((outputString, {name}) => {
	if (name === users[users.length - 1].name) {
		return `${outputString} and ${name}.`;
	} else {
		return `${outputString} ${name},`;
	}
}, "Your instructors are:");
let languageList = users.reduce((uniqueLanguages, {languages}) => {
	languages.forEach((language) => {
		if (!uniqueLanguages.includes(language)) {
			uniqueLanguages.push(language);
		}
	});
	return uniqueLanguages.sort();
}, []);