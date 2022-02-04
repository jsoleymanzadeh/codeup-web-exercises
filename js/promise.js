"use strict";
let lastCommit = () => fetch("https://api.github.com/repos/jsoleymanzadeh/codeup-web-exercises/commits", {headers: {'Authorization': `token ${GITHUB_PERSONAL_ACCESS_TOKEN}`}})
	.then(response => response.json());

lastCommit()
	.then(commits => commits[0].commit.author.date)
	.catch(error => console.error(error));
let wait = time => new Promise(resolve => {
	setTimeout(() => resolve(`You'll see this after ${time / 1000} seconds`), time);
});
wait(1000).then(message => console.log(message));
wait(3000).then(message => console.log(message));