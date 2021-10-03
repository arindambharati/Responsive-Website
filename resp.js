var burger = document.querySelector('.burger');
var leftNav= document.querySelector('.left-nav');
var rightNav= document.querySelector('.right-nav');
var navBar= document.querySelector('.navbar');

function clickHandler(){
    leftNav.classList.toggle('visibility_nav_resp');
    rightNav.classList.toggle('visibility_nav_resp');
    navBar.classList.toggle('h-nav_resp');
}

burger.addEventListener('click',clickHandler);