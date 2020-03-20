var userDataRan = "Data";
var b = 10;

GetClosure();

function GetClosure() {

    var b = 100;
 
    innerFunction();

    function innerFunction() {
        var a = 10;

        function innerMostFunction() {
            console.log(userDataRan)
            console.log(a)
            console.log(b)
        }

        innerMostFunction();
    }
}

console.log(b)