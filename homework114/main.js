const open = document.querySelector('.btn-open')
const modal = document.querySelector ('.modal')
const body = document.body

const openModal =  () => {
    modal.style.visibility = 'visible'
    body.classList.add('body--fixed')
}

const closeModal = () =>{
    modal.style.visibility = 'hidden'
    body.classList.remove('body--fixed')
}

open.addEventListener('click',openModal )

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')) {
        closeModal()
    } 
})


document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        closeModal()
    }
})