/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const express = require("express"); // Server
const bodyParser = require("body-parser"); // Allows JSON Body from POST Request to be Accessed
const exphbs = require("express-handlebars"); // Require Templating Engine Handlebars

/////////////////////////////////////////////// /* Configure Server */ //////////////////////////////////////////////////////////
// Create the Express app instance
const app = express(); // Initalise Express Server

// Set up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static("public")); 

// Set up the Express app to use the Handlebars template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Handle all dynamic routes with our controller
const routes = require("./controllers/burgersController.js");
app.use("/", routes);


/////////////////////////////////////////////// /* Start The Server */ //////////////////////////////////////////////////////////
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 3000
// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
// Log (server-side) when our server has started
console.log(`Server listening on: http://localhost:${PORT}`)
})
