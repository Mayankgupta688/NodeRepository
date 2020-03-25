console.time("execution")

var fs = require("fs");

console.log(fs.readFileSync("helloWorld.txt").toString())

console.log(fs.readFileSync("helloWorldOther.txt").toString())

console.timeEnd("execution")