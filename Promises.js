
var myPromise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve(30)
    }, 5000)
});


function GetData() {
    var data = 10;

    myPromise.then(function(inputData){
        data = data + inputData;
        console.log(data);
    });

    data = data + 10;
    console.log(data);
}

GetData()