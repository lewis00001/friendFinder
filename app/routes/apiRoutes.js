// starter friend data
let friends = require("../data/friends");
let path = require("path");

// returns best match
module.exports = function (app) {

    // get
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // post
    app.post("/api/friends", function(req, res) {

        // user input information 
		let iData 	= req.body;
		let iName 	= iData.name;
		let iPhoto 	= iData.photo;
        let iScores = iData.scores; 

        // stores best match
        let match = {
			name: "",
            photo: "",
            matchPercent: 0
        };

        // holds lowest current diff
        let totalDifference = 50; 

        // loops through friends
        for (let i = 0; i < friends.length; i++) {
            let holdTotal = 0;
            // loops through friends scores
            for (let j = 0; j < 10; j++) {
                let preTotal = Math.abs(friends[i].scores[j] - iScores[j]);
                holdTotal += preTotal;
            }
            
            // compare scores, updates match if score diff is lowest
            if (holdTotal < totalDifference) {
                totalDifference = holdTotal;
                // if current best match, add to match
                match.name = friends[i].name;
                match.photo = friends[i].photo;
                match.matchPercent = parseInt(100 - (holdTotal * 2));
            }
        };
        
        // creates new user obj
        let cUser = {
            name:   iName,
            photo:  iPhoto,
            scores: iScores
        };

        friends.push(cUser);
        console.log(friends);

        // returns best match
        res.json(match);
    });
}
