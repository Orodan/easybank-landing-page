const body = document.querySelector('body')
const hamburgerButton = document.querySelector('#hamburger-button')
const header = document.querySelector('header')
const overlay = document.querySelector('.overlay')
const mobileMenu = document.querySelector('.header__menu')

hamburgerButton.addEventListener('click', () => {
    if (header.classList.contains('menu-open')) {
        header.classList.remove('menu-open')
        body.classList.remove('no-scroll')

        overlay.classList.remove('fade-in')
        overlay.classList.add('fade-out')

        mobileMenu.classList.remove('fade-in')
        mobileMenu.classList.add('fade-out')
    } else {
        header.classList.add('menu-open')
        body.classList.add('no-scroll')

        overlay.classList.add('fade-in')
        overlay.classList.remove('fade-out')

        mobileMenu.classList.add('fade-in')
        mobileMenu.classList.remove('fade-out')
    }
})