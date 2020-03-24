const fs = require("fs")

var outputFileData = fs.readFile("helloWorld.txt",(err, data) =>{
    console.log(data.toString())
});

console.log("Line 1")

var outputFileDataOther = fs.readFile("helloWorldOther.txt", (err, data) =>{
    console.log(data.toString());
})
console.log("Line 2")
