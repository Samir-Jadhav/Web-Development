var count =10;
function countNum(){
    console.log(count);
    count --;
    if(count<0){
        clearInterval(id);
    }
}
var id = setInterval(countNum,1000);