let colorStorage = localStorage.getItem("color-option")

if(colorStorage !== null){
    document.documentElement.style.setProperty("--main-color", colorStorage)

    document.querySelectorAll("color-list li").forEach(element => {
        element.classList.remove("active")
        if(element.dataset.color === colorStorage){
            element.classList.add("active")
        }
    })

}

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
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        localStorage.setItem("color-option", e.target.dataset.color)
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active")
        })

        e.target.classList.add("active")
    })
})

let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg", "02.jpeg", "03.jpg", "04.webp", "05.jpg"];

//Change Background Image URL

setInterval( () => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length)
    landingPage.style.backgroundImage = `url("images/${imgsArray[randomNumber]}")`;
}, 3000) 