const body = document.body
const burger = document.querySelector('.burger-icon')
const links = document.querySelectorAll('.nav__link')

const openBurger = () => {
    body.classList.add('body--opened-menu')
}

const closeBurger = () => {
    body.classList.remove('body--opened-menu')
}

const toggleBurger = () => {
    body.classList.toggle('body--opened-menu')
}

burger.addEventListener('click', toggleBurger)

links.forEach(link => {
    link.addEventListener('click', closeBurger)
})