loading1();
function loading1(){
    const load = document.querySelector(".loading");
    window.addEventListener("load", function(){
        
        setTimeout(() => {
            load.style.display = "none";
        }, 2000);
    });
}

const btnchangeTheme = document.querySelector("#changeTheme");

btnchangeTheme.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
})

const navMenu = document.querySelector(".toggle");
const showMenu = document.querySelector("#nav-menu");
const navClose = document.querySelector(".close");
const navLink = document.querySelectorAll('.nav__link');

if (navMenu) {
    navMenu.addEventListener('click', function () {
    showMenu.classList.toggle('nav__menu-show')
    })
}
if (navClose) {
    navClose.addEventListener('click', function () {
    showMenu.classList.remove('nav__menu-show')
    })
}
function linkAction () {
    const navMenu = document.querySelector('#nav-menu')
    navMenu.classList.remove('nav__menu-show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


const bagShop = document.querySelector(".shop");
const shop = document.querySelector(".shopBag");
    
    bagShop.addEventListener('click', () =>{
        shop.classList.toggle("shopBag-show")
    })

