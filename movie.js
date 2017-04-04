'use strict'


const request = require('request');



function getMovie(movieTitle){
	request('http://www.omdbapi.com/?t=' + movieTitle , function (error, response, body) {
	console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
	var movieOut = JSON.parse(body);

	console.log(movieOut);

});

	
	
}

module.exports = getMovie;