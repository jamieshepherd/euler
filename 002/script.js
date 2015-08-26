// Set answer to 0
var answer = 0;

// Start the program
var a = 1, b = 2;

answer = b;

while((a+b) < 4000000) {
    var x = a + b;

    if(x % 2 === 0) answer = answer + x;

    a = b; b = x;
}
