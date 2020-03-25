console.time("execution")

var fs = require("fs");
var event = require("events")
var eventEmitter = new event.EventEmitter();

if(fs.existsSync("MyFiles")) {
    console.log("Folder already exists");
    if(fs.existsSync("MyFiles/MyFile.txt")) {
        fs.unlinkSync("MyFiles/MyFile.txt")
    }
    fs.rmdirSync("MyFiles")
}


fs.mkdir("MyFiles", (err) => {
    eventEmitter.emit("FolderCreated")
});

eventEmitter.on("FolderCreated", () => {
    console.log("Folder Created...")
})

console.log("Execution Finished...");

console.timeEnd("execution")