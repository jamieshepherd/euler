// Set answer to 0
var answer = 0;

// Start the program
var palindrome = '';

for(i = 999; i >= 100; i--) {
    for(j = 999; j>= 100; j--) {
        palindrome = String(i*j).split('').reverse().join('');
        if(result == palindrome) {
            if(result > answer) {
                answer = result;
            }
            j = 0;
        }
    }
}
