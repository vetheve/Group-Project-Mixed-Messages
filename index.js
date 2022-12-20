/**
 * Update the text of the li elements for each zodiac sign.
 */

// Import the displayQuote, displayPrediction, and displayFunFact functions from the display.js module
import {
	displayQuote,
	displayPrediction,
	displayFunFact
} from './modules/display.js';

//function that updates the text of the li elements for each zodiac sign.
function updateResults() {
	// List of zodiac signs
	const zodiacSigns = ['belier', 'taureau', 'gemeaux', 'cancer', 'lion', 'vierge', 'balance', 'scorpion', 'sagittaire', 'capricorne', 'verseau', 'poissons'];

	// Iterate over each zodiac sign
	for (let sign of zodiacSigns) {
		// Get the ul element for the current zodiac sign
		const ulElement = document.getElementById(sign);

		// Get the first li element
		const firstLi = ulElement.children[0];

		// Modify the text of the first li element using the displayPrediction function
		firstLi.innerText = displayPrediction();

		// Get the second li element
		const secondLi = ulElement.children[1];

		// Modify the text of the second li element using the displayQuote function
		secondLi.innerText = displayQuote();

		// Get the third li element
		const thirdLi = ulElement.children[2];

		// Modify the text of the third li element using the displayFunFact function
		thirdLi.innerText = displayFunFact();
	}
}
