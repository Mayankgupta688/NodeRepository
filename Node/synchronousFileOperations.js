var fs = require("fs");

if(fs.existsSync("MyFiles")) {
    console.log("Folder already exists");
    if(fs.existsSync("MyFiles/MyFile.txt")) {
        fs.unlinkSync("MyFiles/MyFile.txt")
    }

    fs.rmdirSync("MyFiles")
}

fs.mkdirSync("MyFiles");

if(fs.existsSync("MyFiles")) {
    process.chdir("MyFiles");
    fs.writeFileSync("Other.txt", "This is Random Content");
    fs.renameSync("Other.txt", "MyFile.txt");

    fs.copyFileSync("MyFile.txt", "../MyFile.txt");
    console.log(fs.readFileSync("MyFile.txt").toString())
}