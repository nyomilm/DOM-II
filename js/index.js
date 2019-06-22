// Your code goes here
const selectedNav = document.querySelector("header nav");

selectedNav.addEventListener('click', event =>{
    console.log('Clicked', event.target.textContent, event.screenX, event.screenY)

    const title = document.querySelector('h2')
    title.textContent = event.target.textContent
    
})

newFunction();

    

function newFunction() {
    let button = document.querySelectorAll(".btn");
    button.onmouseover = function (event) {
        let target = event.target;
        target.style.background = 'orange';
    };
    button.onmouseout = function (event) {
        let target = event.target;
        target.style.background = '';
    };
}

let button = document.querySelectorAll(".btn");
button.addEventListener("mousedown", event => {
    if(event.button ==0){
        console.log("Left button");
    }
});

