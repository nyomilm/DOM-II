// Your code goes here
const selectedNav = document.querySelector("header nav");

selectedNav.addEventListener('click', event =>{
    console.log('Clicked', event.target.textContent, event.screenX, event.screenY)

    const title = document.querySelector('h2')
    title.textContent = event.target.textContent
})

