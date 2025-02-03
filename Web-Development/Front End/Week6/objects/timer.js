// Problem statement
// Write a program to print 1 after 1 sec, 2 after 2 sec till 5. Complete the given code to get the desired output as shown in the expected output.

// Expected Output:
 // Wait for 5 seconds before calling TimeRanges function
//  function timer() {
//     for(let i = 1; i<=5; i++){
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000);
//     }
//     console.log("Hello ninjas!");
// }
// timer();

setTimeout(function () {
    console.log("a")
  },20)
  setTimeout(function () {
    console.log("b")
  })
  console.log("c")