let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.jpg", "02.jpeg", "03.jpg", "04.webp", "05.jpg"];

//Change Background Image URL





setInterval( () => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length)
    landingPage.style.backgroundImage = `url("images/${imgsArray[randomNumber]}")`;
}, 1500)