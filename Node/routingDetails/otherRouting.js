function initializeOtherRouting(app) {
    app.get("/", (req, res) => {
        res.send("Hello All.. This is Express...")
    })

    app.get("/getfile", (req, res) => {
        res.download("./helloWorldOther.txt")
    })

    

    app.get('/other', function (req, res) {
        res.sendFile( __dirname + "/public/" + "index.html" );
    })
}



module.exports = initializeOtherRouting;