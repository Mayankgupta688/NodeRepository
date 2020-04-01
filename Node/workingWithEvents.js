console.time("execution")

var fs = require("fs");
var event = require("events")
var eventEmitter = new event.EventEmitter();

function TriggerOnFolderCreation() {
    eventEmitter.emit("xyz")
}

function TriggerWhenFileCreated() {
    eventEmitter.emit("FileCreated")
}

fs.mkdir("MyFilesOtherAgain", TriggerOnFolderCreation);

eventEmitter.on("xyz", () => {
    console.log("hsadgkjadsg")
})

eventEmitter.on("FolderCreatedOtherAgain", () => {
    fs.writeFile("MyFiles/Other.txt", "Hello World...", TriggerWhenFileCreated)
})

eventEmitter.on("FileCreated", () => {
    fs.rename("Other.txt", "MyFile.txt", (err) => {
        eventEmitter.emit("FileRenamed")
    })
})

eventEmitter.on("FileRenamed", () => {
    fs.readFile("MyFile.txt", (err, data) => {
        alert(data)
    })
})

console.log("Execution Finished...");

console.timeEnd("execution")