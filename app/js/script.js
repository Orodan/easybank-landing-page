const hamburgerButton = document.querySelector('#hamburger-button')
const header = document.querySelector('header')

hamburgerButton.addEventListener('click', () => {
    if (header.classList.contains('menu-open')) {
        header.classList.remove('menu-open')
    } else {
        header.classList.add('menu-open')
    }
})