import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

flsFunctions.menuInit();

 flsFunctions.isSwiper();

flsFunctions.isSpoller();

flsFunctions.animScroll()

flsFunctions.isDinamicAdaptive();

flsFunctions.isTabs();


let spollerIcon = document.querySelectorAll('.top-footer__icon')
let spollerTitle = document.querySelectorAll('.top-footer__title')

// spollerTitle.forEach(function(item) {
//     item.addEventListener("click", function() {

//         if(!item.classList.contains('_active')){
//             spollerIcon.forEach(function(item) {
//                 item.classList.remove('_active')
//             })
//         }

//         spollerIcon.forEach(function(item) {
//             item.classList.add('_active')
//         })
//     })
// })


// import './files/tippy.js'

// tippy('[data-tippy-content]')
// let userIcon = document.querySelector('.user-header__icon')

// userIcon.addEventListener('click', () => {
//     let userMenu = document.querySelector('.user-header__menu');
//     userMenu.classList.toggle('_active');
// })

// document.documentElement.addEventListener('click', (e) => {
//     if(!e.target.closest('.user-header')) {
//         let userMenu = document.querySelector('.user-header__menu');
//         userMenu.classList.remove('_active')
//     }
// })

