
var splicedQuotes = []; // variable to hold spliced quotes.

//function to selects a random quote object from the quotes
//array & returns the randomly selected quote object
function getRandomQuote() {
	var randomIndex =  Math.floor(Math.random() * quotes.length);//generates random index of quote array and stores in variable.
	var splicedQuote = quotes.splice(randomIndex, 1); //remove the random quote object from the quote array and return an array stored in the variable.
	splicedQuotes.push(splicedQuote[0]);//stores the element of the spliceQuote array into the Splicequotes array
	//Checks if quote is empty then set quotes to splicedQuotes array and set splicedQuotes as an empty array
	if(quotes.length === 0) {
		quotes = splicedQuotes;
		splicedQuotes = [];
	}
	//This makes sure the is no repeat of quotes
	console.log(splicedQuote[0]);
	return splicedQuote[0];
}
//prints out the quote info to the document
function printQuote () {
	var quoteObject = getRandomQuote();//variable that stores random quote object.
	// stores the string of quote properties with template
	var output = '<p class="quote">';
	output += quoteObject.quote + '</p><p class="source">';
	output += quoteObject.source;
	if (quoteObject.citation !== undefined) {
		output += '<span class="citation">' + quoteObject.citation + '</span>';
	}
	if (quoteObject.year !== undefined) {
		output += '<span class="year">' + quoteObject.year + '</span>';
	}
	output += '</p>';
	document.getElementById('quote-box').innerHTML = output; // replaces the content of the 'quote-box' div with output.
	return document.getElementById('quote-box').innerHTML;//return to the document the value of output.
}

//function to generate random rgb color values
function randomBackgroundColor () {
	var rgbColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"; // stores rgb color value in variable
	var backgroundColor = "background-color: " + rgbColor + ";";//stores rgb color css rule in a variable
	var css = document.createElement("style");// create an element to add styling
	css.type = "text/css";// add attribute type to element
	css.innerHTML = "html {" + backgroundColor + "}";// applies the background color property to html
	return document.body.appendChild(css); // appends the created element to the body.
}

var quoteRefresh = setInterval(printQuote, 20000);// sets timer for change of quotes
var backrounndRefresh = setInterval(randomBackgroundColor, 20000);//sets timer for change of background color.

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// when user clicks anywhere on the button, the "randomBackgroundColor" function is called
document.getElementById('loadQuote').addEventListener("click", randomBackgroundColor, false);
