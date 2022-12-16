// displayQuote is a function that returns a randomly selected quote from the quotes.json file
// along with the corresponding author.
const displayQuote = () => {
    // Load the quotes from the quotes.json file
    const quotes = require('./data/quotes.json');
  
    // Select a random index from the quotes array
    // The upper bound for the random number is the length of the quotes array minus 1
    // to prevent the possibility of an out-of-bounds index.
    const randomIndexQuote = Math.round(Math.random() * (quotes.length - 1));
  
    // Destructure the quote and author from the selected quote object
    const { quote, author } = quotes[randomIndexQuote];
  
    // Return the quote and author as a string
    return `"${quote}", ${author}`;
  };
  
  // displayPrediction is a function that returns a randomly selected prediction from the predictions.json file
  const displayPrediction = () => {
    // Load the predictions from the predictions.json file
    const predictions = require('./data/predictions.json');
  
    // Select a random index from the quotes array
    // The upper bound for the random number is the length of the quotes array minus 1
    // to prevent the possibility of an out-of-bounds index.
    prediction = predictions.quotes[Math.round(Math.random() * (predictions.quotes.length - 1))];
  
    // Return the prediction as a string
    return `${prediction}`;
  };
  
  // displayFunFact is a function that returns a randomly selected fun fact from the funfacts.json file
  const displayFunFact = () => {
    // Load the fun facts from the funfacts.json file
    const funfacts = require('./data/funfacts.json');
  
    // Select a random index from the facts array
    // The upper bound for the random number is the length of the facts array minus 1
    // to prevent the possibility of an out-of-bounds index.
    funfact = funfacts.facts[Math.round(Math.random() * (funfacts.facts.length - 1))];
  
    // Return the fun fact as a string
    return `${funfact}`;
  };
  

console.log(displayQuote());
console.log(displayPrediction());
console.log(displayFunFact());