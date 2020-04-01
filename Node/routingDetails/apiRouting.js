var axios = require("axios");
var fs = require("fs");

function initializeApiRoutes(app) {
    app.get("/employee/:empName", (req, res) => {
        fs.readFile("./empList.json", (err, data) => {
            var parsedData = JSON.parse(data.toString());
            var filteredData = parsedData.empList.filter((emp) => {
                return emp.name.toLowerCase() == req.params.empName.toLowerCase()
            })
    
            res.json(filteredData)
        })  
    })

    app.get("/allemployees", (req, res) => {
        fs.readFile("./empList.json", (err, data) => {
            var parsedData = JSON.parse(data.toString());
            res.json(parsedData)
        })  
    })
    
    app.get("/getemployee/:empid", (req, res) => {
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((response) => {
            var filteredData = response.data.filter((emp) => {
                return emp.id == req.params.empid
            })
            res.send(filteredData)
        })
    })
}

module.exports = initializeApiRoutes;