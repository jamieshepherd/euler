// Set answer to 0
var answer = 0;

// Start the program
var palindrome = '';

for(i = 999; i >= 100; i--) {
    for(j = 999; j>= 100; j--) {
        palindrome = String(i*j).split('').reverse().join('');
        if(i*j == palindrome) {
            if(i*j > answer) {
                answer = i*j;
            }
            j = 0;
        }
    }
}
