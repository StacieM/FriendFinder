//require the friends data file
var friends = require('../data/friends.js');

//Routes
module.exports = function(app){

	// API GET route/request to display JSON of friends
	app.get('/api/friends', function(req, res){
		res.json(friends);
	});

	// API POST Request to handle incoming survey results & logic
	app.post('/api/friends', function(req, res){

        // add logic here......
    }
});