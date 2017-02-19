
 /*jshint esversion: 6 */

 let splicedQuotes = []; // variable to hold spliced quotes.

//function to selects a random quote object from the quotes
//array & returns the randomly selected quote object
const getRandomQuote = () => {
	const randomIndex =  Math.floor(Math.random() * quotes.length);//generates random index of quote array and stores in variable.
	const splicedQuote = quotes.splice(randomIndex, 1); //remove the random quote object from the quote array and return an array stored in the variable.
	splicedQuotes.push(splicedQuote[0]);//stores the element of the spliceQuote array into the Splicequotes array
	//Checks if quote is empty then set quotes to splicedQuotes array and set splicedQuotes as an empty array
	if(quotes.length === 0) {
		quotes = splicedQuotes;
		splicedQuotes = [];
	}
	//This makes sure the is no repeat of quotes
	console.log(splicedQuote[0]);
	return splicedQuote[0];
};

//prints out the quote info to the document
const printQuote = () => {
	const quoteObject = getRandomQuote();//variable that stores random quote object.
	// stores the string of quote properties with template
	let output = '<p class="quote">';
	output += quoteObject.quote + '</p><p class="source">';
	output += quoteObject.source;
	if (quoteObject.citation !== undefined) {
		output += '<span class="citation">' + quoteObject.citation + '</span>';
	}
	if (quoteObject.year !== undefined) {
		output += '<span class="year">' + quoteObject.year + '</span>';
	}
	output += '</p>';
	const quoteBox = document.getElementById("quote-box");
	quoteBox.innerHTML = output; // replaces the content of the 'quote-box' div with output.
	return quoteBox.innerHTML;//return to the document the value of output.
};

//function to generate random rgb color values
const randomBackgroundColor = () => {
	const rgbColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"; // stores rgb color value in variable
	const backgroundColor = "background-color: " + rgbColor + ";";//stores rgb color css rule in a variable
	const css = document.createElement("style");// create an element to add styling
	css.type = "text/css";// add attribute type to element
	css.innerHTML = "html {" + backgroundColor + "}";// applies the background color property to html
	return document.body.appendChild(css); // appends the created element to the body.
};

const quoteRefresh = setInterval(printQuote, 20000);// sets timer for change of quotes
const backgroundRefresh = setInterval(randomBackgroundColor, 20000);//sets timer for change of background color.

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// when user clicks anywhere on the button, the "randomBackgroundColor" function is called
document.getElementById('loadQuote').addEventListener("click", randomBackgroundColor, false);
