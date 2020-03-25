console.time("execution")

var fs = require("fs");

if(fs.existsSync("MyFiles")) {
    console.log("Folder already exists");
    if(fs.existsSync("MyFiles/MyFile.txt")) {
        fs.unlinkSync("MyFiles/MyFile.txt")
    }
    fs.rmdirSync("MyFiles")
}


fs.mkdir("MyFiles", (err) => {
    fs.exists("MyFile", (exists) => {
        if(!exists) {
            process.chdir("MyFiles");
            
            fs.writeFile("Other.txt", "This is Random Content", (err) => {
                if(err) {
                    console.log("Got Some Error");
                }

                fs.rename("Other123.txt", "MyFile.txt", (err) => {

                    if(err) {
                        console.log("Error Conditions");
                        return;
                    }

                    fs.readFile("MyFile.txt", (err, data) => {
                        console.log(data.toString())
                    })
                });
            })
        }
    })
});

console.log("Execution Finished...");

console.timeEnd("execution")