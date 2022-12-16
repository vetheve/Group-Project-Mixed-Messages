// Import the 'fs' module for reading and writing files
import fs from 'fs';

// displayQuote is a function that returns a randomly selected quote from the quotes.json file along with the corresponding author.
export const displayQuote = () => {
	// Read the quotes.json file and parse the JSON data
	const quotes = JSON.parse(fs.readFileSync('./data/quotes.json', 'utf8'));

	// Select a random index from the quotes array
	// The upper bound for the random number is the length of the quotes array minus 1 to prevent the possibility of an out-of-bounds index.
	const randomIndexQuote = Math.round(Math.random() * (quotes.length - 1));

	// Destructure the quote and author from the selected quote object
	const {
		quote,
		author
	} = quotes[randomIndexQuote];

	// Return the quote and author as a string
	return `"${quote}", ${author}`;
};

// displayPrediction is a function that returns a randomly selected prediction from the predictions.json file
export const displayPrediction = () => {

	// Read the predictions.json file and parse the JSON data
	const predictions = JSON.parse(fs.readFileSync('./data/predictions.json', 'utf8'));

	// Select a random index from the quotes array
	// The upper bound for the random number is the length of the quotes array minus 1 to prevent the possibility of an out-of-bounds index.
	const prediction = predictions.quotes[Math.round(Math.random() * (predictions.quotes.length - 1))];

	// Return the prediction as a string
	return `${prediction}`;
};

// displayFunFact is a function that returns a randomly selected fun fact from the funfacts.json file
export const displayFunFact = () => {
	// Read the funfacts.json file and parse the JSON data
	const funfacts = JSON.parse(fs.readFileSync('./data/funfacts.json', 'utf8'));

	// Select a random index from the facts array
	// The upper bound for the random number is the length of the facts array minus 1 to prevent the possibility of an out-of-bounds index.
	const funfact = funfacts.facts[Math.round(Math.random() * (funfacts.facts.length - 1))];

	// Return the fun fact as a string
	return `${funfact}`;
};