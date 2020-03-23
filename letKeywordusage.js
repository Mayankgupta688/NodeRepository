function WorkingWithLet() {

    var count = 10;
    for(const iiii = 0; iiii < count; iiii++) {
        console.log(iiii)
    }

    console.log(iiii)

    count = count + 10;
    console.log(count)
}

WorkingWithLet();

// Function Scope
// Block Scope Variables (for, if, while, switch)