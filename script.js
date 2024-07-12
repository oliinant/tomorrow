const parentAnimation = document.querySelector('.menu-animation');
const animationElements = parentAnimation.querySelectorAll('#line-menu1, #line-menu2, #line-menu3, #line-menu4');

let menuOnOff = false;

function onButtonClick() {
if (!menuOnOff) {
animationElements.forEach(element => {
element.classList.remove('line-menu-animation-out');
element.classList.add('line-menu-animation-in'); });
document.querySelector(".menu-functions").style.display = "flex";
menuOnOff = true;
}
 else {
animationElements.forEach(element => {
element.classList.remove('line-menu-animation-in');
element.classList.add('line-menu-animation-out');});
document.querySelector(".menu-functions").style.display = "none";
menuOnOff = false;
}
}
const menu = document.querySelector('#menu');
menu.addEventListener('click', onButtonClick);

let darkMode = false;
let lightDarkMode = document.querySelector("#lightDarkMode")
lightDarkMode.addEventListener('click', function() {
let buttonCircle = document.getElementById("buttonCircle")
if (!darkMode) {
    buttonCircle.classList.remove('button-animation-dark')
    buttonCircle.classList.add('button-animation-light')
   
    document.querySelector('body').classList.add('theme-dark');
    darkMode = true;
} 
else {
    buttonCircle.classList.remove('button-animation-light');
    buttonCircle.classList.add('button-animation-dark');
    
    document.querySelector('body').classList.remove('theme-dark');
    darkMode = false;
}
});
   