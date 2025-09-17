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

// --------------Модалочка собственного приготовления-------------------------
const open = document.querySelector('.about__img-button')
const modal = document.querySelector ('.modal')

const openModal =  () => {
    modal.classList.add('modal--opened')
    body.classList.add('body--fixed')
}

const closeModal = () =>{
    modal.classList.remove('modal--opened')
    body.classList.remove('body--fixed')
}

open.addEventListener('click', event => {
    event.preventDefault(); 
    openModal();
});

modal.addEventListener('click', event => {
    const target = event.target
    if (
        target.closest('.modal__cancel') || 
        target.classList.contains('modal')
    ) {
        closeModal()
    }
})



document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        closeModal()
    }
})