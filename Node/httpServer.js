var http =  require("http");
var fs = require("fs")

http.createServer((req, res) => {
    if(req.url == "/") {
        res.writeHead(200,  { "Content-Type": "text/plain"});
        res.write("Hello World...");
        res.end();
    } else if(req.url == "/content") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<html><body><h1>Hello World...</b></body></html>")
        res.end();
    } else if(req.url == "/json") {
        res.writeHead(200, {"Content-Type": "application/json"});

        var data  = {
            name: "MAyank",
            age: 10, 
            address: {
                street: "1",
                city: "Delhi"
            }
        }
        res.write(JSON.stringify(data));
        res.end()
    } else if(req.url="/home") {
        fs.readFile("./templates/home.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(data.toString())
            res.end();
        })
    }
    
}).listen(8000)