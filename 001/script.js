// Set answer to 0
var answer = 0;

// Start the program
for(i = 0; i < 1000; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
        answer = answer + i;
    }
}
