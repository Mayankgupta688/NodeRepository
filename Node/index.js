var express = require("express"); 
var app = express();
app.use(express.static('public'));

var initializeOtherRouting = require("./routingDetails/otherRouting");
var initializeApiRoutes = require("./routingDetails/apiRouting");

initializeOtherRouting(app);
initializeApiRoutes(app);

app.listen("8000")