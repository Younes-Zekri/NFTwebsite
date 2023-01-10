/*============  SHOW MENU  =============*/
const navMenu   = document.getElementById('nav-menu'), 
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')

/*==========  MENU SHOW  ============*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}

/*==========  MENU HIDE  ============*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}


/*============  REMOVE MENU MOBILE  =============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  //When we click on each nav__link, we remove show-menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*============  CHANGE BG IMAGE  =============*/
const scrollHeader = () =>{
  const header = document.getElementById('header')
  //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag

  this.scrollY >= 50 ? header.classList.add('header-bg')
                     : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)

/*============  SCROLL REVEAL ANIMATION  =============*/
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 2500,
})

sr.reveal('.home__images', {distance: '120px', delay: 400})
sr.reveal('.home__title', {delay: 1000})
sr.reveal('.home__description', {delay: 1200})
sr.reveal('.home__button', {delay: 1400})
sr.reveal('.home__footer', {delay: 1600})
sr.reveal('.home__data div', {origin: 'right', interval: 100, delay: 1800})
sr.reveal('.nft__card', {distance: '120px', delay:400})
sr.reveal('.grid__container', {distance: '200px', delay:400})
sr.reveal('.message__container', {distance: '20rem', delay:400})
sr.reveal('.insta__card', {origin: 'left', interval: 120 ,delay:1000})
sr.reveal('.mess__card', {origin: 'right', interval: 120 ,delay:1000})
sr.reveal('.twit__card', {origin: 'bottom', interval: 120 ,delay:400})
sr.reveal('.discord__card', {distance: '130px', delay:400})
sr.reveal('.about__container', {distance: '120px', delay:400})