var answer = 0;
var i = 2, n = 600851475143;

while(i <= n) {
    if (n % i === 0){
        n /= i;
    } else i++;
    answer = i;
}
