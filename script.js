
function testScope() {
    var a = 10; // Function scope
    let b = 20; // Block scope, meaning b is only accessible in the block it is declared in

    if (true) {
        var c = 30; // Function scope, so accessible throughout the function
        let d = 40; // Block scope, only accessible inside the block

    }

}

testScope();

