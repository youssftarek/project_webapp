//start choosing color for root element
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li =>{
    //click on every item in the list
    li.addEventListener("click",(e)=>{
        //set color on root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
        //set color on local storage
        localStorage.setItem('color_option',e.target.dataset.color);
        //removing active class
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        //add active class on my color target
        e.target.classList.add("active");
    });
});
//end choosing color for root element


// start checking main color in local storage
let mainColor = localStorage.getItem('color_option');
if (mainColor !== null) {
    //save color in local storage in case of refresh
    document.documentElement.style.setProperty('--main--color', mainColor);
    //for saving active color after refresh(1st remove active class, 2nd add active class for current color)
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        if(element.dataset.color == mainColor) {
            element.classList.add("active");
        }
    });
}
// end checking main color in local storage


//start random background function
let landingPage = document.querySelector(".landing-page");
let imgsArray=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
setInterval(function(){
    // get random number
    let randomNumber = Math.floor(Math.random()*imgsArray.length);
    // change background img url
landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")';
}, 10000)
//end random background function


//start toggle open settings box (gear icon)
document.querySelector(".fa-gear").onclick = function(){
    document.querySelector(".setting-box").classList.toggle("open");
}
//end toggle open settings box (gear icon)

// start redirecting pages
document.getElementById("#home").onclick = function(){
    window.location.replace("index.html");
}
document.getElementById("#about-us").onclick = function(){
    window.location.replace("about-us.html");
}
document.getElementById("#contact-us").onclick = function(){
    window.location.replace("contact-us.html");
}
//end redirecting pages
