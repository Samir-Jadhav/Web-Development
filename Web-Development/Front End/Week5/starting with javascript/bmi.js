// Write your code here:
var w = "58";
var h = "1.60";
var bmi = w/(h*h);
var category;
if(bmi<18.5){
    category = "Underweight";
}else if(bmi>=18.0 && bmi<=24.9){
    category = "Healthy";
}
else if(bmi>=25 && bmi<29.9){
    category = "Overweight";
}
else{
    category = "obese";
}
console.log("YOUr body mass index is:" +bmi);
console.log("you are " +category);