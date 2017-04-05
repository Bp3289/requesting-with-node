'use strict'


const request = require('request');



function getMovie(movieTitle){
	request('http://www.omdbapi.com/?t=' + movieTitle , function (error, response, body) {
	console.log('error:', error); 
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
	var movieOut = JSON.parse(body);

	console.log(movieOut);

});

	
	
}

module.exports = getMovie;