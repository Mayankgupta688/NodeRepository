var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/static", express.static(path.join(__dirname, "public")));

var middlewareFunction = (req, res, next) => {

    return next();
}

app.get("/", (req, res) => {
    res.send("Hello All")
})


app.get("/page", middlewareFunction, (req, res) => {
    fs.readFile("./template/index.html", (err, data) => {
        res.send(data.toString());
    })
})

app.post("/postform", (req, res) => {
    console.log(req.body.fname)
    res.write("Submitted for the User: " + req.body.userName);
    res.end();
})

app.listen(8000)