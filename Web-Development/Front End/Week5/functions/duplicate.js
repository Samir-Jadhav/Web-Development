// Problem statement
// Implement a function “duplicate” to duplicate an array, as shown below:

// For input arr=[1,2] duplicate(arr) should return [1,2,1,2]
//Write your function here

function duplicate(arr) {
    return arr.concat(arr);
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

let remainder = '';
process.stdin.on('data', function (chunk) {
  let arr = chunk.toString()
  arr = arr.split(' ')
  let nums = []
  for(const c of arr) {
      nums.push(parseInt(c))
  }

  const ans = duplicate(nums).join(' ')
  process.stdout.write(ans)
  process.exit();
});