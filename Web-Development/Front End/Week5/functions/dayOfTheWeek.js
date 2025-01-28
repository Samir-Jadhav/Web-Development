// Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week.

// (where 1 is Monday, 2 is Tuesday, 3 is Wednesday, etc).

// If the number is less than 1 or greater than 7, the function should return null.

// Note: Store the days of the week in the array.

var arrWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
function retrunDay(n){
    if(n<1 || n>7){
        return null;
}   
    for(var i =0; i<arrWeek.length; i++){
        // console.log(arrWeek[i]);
        // return arrWeek[i];
        if(i==n){
            return arrWeek[i];
        }
            }
        }
console.log(retrunDay(5));