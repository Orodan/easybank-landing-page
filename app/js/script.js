const hamburgerButton = document.querySelector('#hamburger-button')

hamburgerButton.addEventListener('click', () => {
    if (hamburgerButton.classList.contains('open')) {
        hamburgerButton.classList.remove('open')
    } else {
        hamburgerButton.classList.add('open')
    }
})