# friendFinder

The Friend Finder app is similar to a dating app. This full-stack project takes in users survey data, compares its answers with users currently in the system. The app will then display the name and picture of the user as well as a percentage of match number.

## Hosted Version of Project

https://friend-finder-0005.herokuapp.com/

## Technologies Used

HTML
CSS
Javascript
Express
Node
JSON

## Details

The application uses Express to handle routing.

The project files uses npm packages: express, path.

The htmlRoutes.js file includes two routes:
*A GET Route to /survey which displays the survey page.
*A USE route that leads to home.html which displays the home page.

The apiRoutes.js file includes two routes:
*A GET route - /api/friends. This displays a JSON of all possible friends
*A POST route - /api/friends. This handles incoming survey results.