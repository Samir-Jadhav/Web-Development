var outerBox = document.getElementById('box');
outerBox.addEventListener('mouseover', function(){ //mouse events
    console.log('mouse over')
})
outerBox.addEventListener('mouseout', function(){ //mouse events
    console.log('mouse out')
})

var searchKey = document.getElementById('search');
// searchKey.addEventListener('keypress', function(){  //key events
//     console.log("Key pressed")
// })
searchKey.addEventListener('keydown', function(event){  //key events
    console.log("Key down", event.keyCode)
})

