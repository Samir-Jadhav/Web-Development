

var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skill-container');
window.addEventListener('scroll' , checkScroll);
var animationDone = false; 

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%';
    }
}

initialiseBars();


function fillBars(){
    for(let bar of progressBars){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let animationInterval = setInterval(function(){
        if(currentWidth > targetWidth){
        clearInterval(animationInterval);
        return;

        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    
    
    }, 3);
    
    }


}
function checkScroll(){
    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone &&coordinates.top < window.innerHeight) {
        animationDone= true;
        console.log('skill section is visible');
        fillBars();

    } else if(coordinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }


}