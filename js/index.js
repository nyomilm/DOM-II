// Your code goes here
const selectedNav = document.querySelector("header nav");

selectedNav.addEventListener('click', event =>{
    console.log('Clicked', event.target.textContent, event.screenX, event.screenY)

    const title = document.querySelector('h2')
    title.textContent = event.target.textContent
    
})

newFunction();

    

function newFunction() {
    let button = document.querySelector(".btn");
    button.onmouseover = function (event) {
        let target = event.target;
        target.style.background = 'orange';
    };
    button.onmouseout = function (event) {
        let target = event.target;
        target.style.background = '';
    };
}

let button = document.querySelector(".btn");
button.addEventListener("mousedown", event => {
    if(event.button ==0){
        console.log("Left button");
    }
});


//let header = document.querySelector("header");
document.addEventListener("wheel", function(event){
    console.log(event.deltaX, event.deltaY);
})

function dragstart_handler(ev){
    var img = new Image();
    img.src = 'adventure.jpg';
    ev.dataTransfer.setDragImage(img, 10, 10);
}


//$(function(){
 //   $(document).on('keydown', function(){
  //      console.log('keydown');
 //   });
//});

//let arrowDown = newFunction();
//function newFunction() {
//    return document.addEventListener('keydown', function (event) {
//        if (event.code == 'ArrowDown' && (event.ctrlKey || event.metaKey)) {
//           alert('Undo!');
//        }
//    });
//}

