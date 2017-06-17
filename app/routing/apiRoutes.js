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


	app.get("/api/survey", function (req, res) {
    res.json(friendsArray);
});
        // add logic here......
    });
}




// app.post("/survey", function (req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     if (reservations.length >= 5) {
//         waitList.push(req.body);
//         // res.send(alert("Sorry you are on the waitlist!"));
//     } else {
//         reservations.push(req.body);
//         // res.send(alert("You are offically booked!"));
//     }
// });




// app.get("/api/waitlist", function (req, res) {
//     res.json(waitList);
// });