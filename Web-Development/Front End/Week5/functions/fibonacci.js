// Problem statement
// Create a 'fibonacciSeries' function that takes a number N as a parameter and checks if it is a member of the Fibonacci series or not.

// Return true if the number is a member of the Fibonacci series, else return false.

// Fibonacci Series is defined by the recurrence

//   F(n) = F(n-1) + F(n-2)
// where F(0) = 0 and F(1) = 1
// Sample Input :

// finbonacciSeries(5)
// Sample Output :

// true

function fibonacciSeries(n) {
    var a=0, b=1;
    if(n==a || n==b){
        return true;
    }
    var c=a+b;
    while(c<=n){
        if(c==n){
            return true

    }
    a=b;
    b=c;
    c=a+b;
}
return false
}
console.log(fibonacciSeries(5));