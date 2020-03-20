function GetData() {
    var data = 0;
    
    setTimeout(() => {
        data = data + 50;
        console.log(data)
    }, 5000)
    
     setTimeout(() => {
        data = data + 24;
        console.log(data)
    }, 4000)
    
     setTimeout(() => {
        data = data + 30;
        console.log(data)
    }, 6000)
    
    data = data + 300;
    
    console.log(data)
}

GetData();