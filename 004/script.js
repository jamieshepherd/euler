// Set answer to 0
var answer = 0;

// Start the program
var result = 0,
    palindrome = '';

for(i = 999; i >= 100; i--) {
    for(j = 999; j>= 100; j--) {
        result = i * j;
        palindrome = String(result).split('').reverse().join('');
        if(result == palindrome) {
            if(result > answer) {
                answer = result;
            }
            j = 0;
        }
    }
}
