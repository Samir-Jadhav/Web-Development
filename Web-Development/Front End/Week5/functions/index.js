// var combinedString = "";
// function a() {
//     combinedString = "Inside a";

//     function b() {
//         combinedString = combinedString + " Inside b";
//     }

//     b();
// }

// a();
// console.log(combinedString);
// var fruits = ["Red", "Orange", "Blue", "Green"];

// console.log(fruits.shift());
// array = [ 60, 70, 20, 10, 40, 90 ];

// const test = function(x) {
//     return x > 5;
// }

// if(!array.every(test)) {
//     console.log("statement 1"); 
// }

// else {
//     console.log("statement 2"); 
// }
var words = ['one', 'two', 'three', 'four'];

words.forEach(function(word) {
    console.log(word);
    if (word === 'two') {
        words.shift();
    }
});