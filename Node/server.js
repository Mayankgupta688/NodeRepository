var http = require("http");

http.createServer(function(req, res) {
    if(req.url == "/") {
        res.write("Hello World...")
        res.end();
    }

    if(req.url == "/about") {
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("<h1>Hello World...</h1>")
        res.end();
    }

    if(req.url == "/help") {
        res.write("Help Page")
        res.end();
    }
    
}).listen(5000);