console.time("execution")

const fs = require("fs")

var outputFileData = fs.readFile("helloWorld1.txt",(err, data) =>{
    console.log(data.toString())
});

console.log("Line 1")

var outputFileDataOther = fs.readFile("helloWorldOther.txt", (err, data) =>{
    console.log(data.toString());
})
console.log("Line 2")

console.timeEnd("execution")
