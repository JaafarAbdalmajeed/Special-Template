//Toggle Spin icon 
document.querySelector(".toggle-settings .fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open")
}

//Switch Colors
const colorsLi = document.querySelectorAll(".color-list li");

//loop on item item
colorsLi.forEach( li => {
    //Click on every list item
    li.addEventListener("click", (e) => {
        //set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
    })
})

let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg", "02.jpeg", "03.jpg", "04.webp", "05.jpg"];

//Change Background Image URL

setInterval( () => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length)
    landingPage.style.backgroundImage = `url("images/${imgsArray[randomNumber]}")`;
}, 3000) 