//Toggle Spin icon 
document.querySelector(".toggle-settings .fa-gear").onclick = function() {
    this.classList.toggle("fa-spin");

    document.querySelector(".settings-box").classList.toggle("open")
}

//Switch Colors
const colorsLi = document.querySelectorAll(".color-list li");

colorsLi.forEach( li => {
    li.addEventListener("click", (e) => {
        console.log(e.target.dataset.color)
    })
})

let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg", "02.jpeg", "03.jpg", "04.webp", "05.jpg"];

//Change Background Image URL

setInterval( () => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length)
    landingPage.style.backgroundImage = `url("images/${imgsArray[randomNumber]}")`;
}, 3000) 