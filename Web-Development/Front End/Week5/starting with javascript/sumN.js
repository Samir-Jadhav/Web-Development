/**
 * Calculates the sum of even numbers from 2 to N.
 *
 * @param {number} N - The upper limit of the range.
 * @returns {number} The sum of even numbers.
 */
function sumOfEvenNumbers(N) {
    let sum = 0;
    for (let i = 2; i <= N; i += 2) {
      sum += i;
    }
    return sum; // Return the sum instead of logging it
  }
  
  // Read input from stdin
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  
  let input = '';
  process.stdin.on('data', (data) => {
    input += data;
  });
  
  process.stdin.on('end', () => {
    const lines = input.trim().split('\n');
    main(lines);
  });
  
  // Read a line from the input
  function readLine(lines) {
    return lines.shift();
  }
  
  // Main function
  function main(lines) {
    const N = parseInt(readLine(lines));
    const sum = sumOfEvenNumbers(N);
    console.log(sum);
  }