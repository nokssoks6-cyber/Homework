// ------------------------------Бургер----------------------------------
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
const modal = document.querySelector('.modal')

const openModal = () => {
    modal.classList.add('modal--opened')
    body.classList.add('body--fixed')
}

const closeModal = () => {
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
// -------------------------------------------Табы-------------------------------------------------
const tabControls = document.querySelector('.tab-controls')
tabControls.addEventListener('click', toggleTab)
function toggleTab(event) {
    const tabControl = event.target.closest('.tab-controls__link')
    if (!tabControl) return
    event.preventDefault()
    if (tabControl.classList.contains('tab-controls__link--active')) return
    const tabContentId = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentId)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')
    if (activeControl) {
        activeControl.classList.remove('tab-controls__link--active')
    }
    if (activeContent) {
        activeContent.classList.remove('tab-content--show')
    }
    tabControl.classList.add('tab-controls__link--active')
    tabContent.classList.add('tab-content--show')
}
// --------------------------------------Аккардеон---------------------------------------------------
const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return;
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        el.querySelectorAll('.accordion-list__item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('accordion-list__item--opened');
                item.querySelector('.accordion-list__content').style.maxHeight = null;
            }
        });



        accordionItem.classList.toggle('accordion-list__item--opened');


        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});

// Слайдер-галерея

const swiper = new Swiper('.gallery__swiper', {
    spaceBetween: 15,
    slidesPerView: 1.5,

    pagination: {
        el: '.gallery__swiper-pagination',
        type: 'fraction'
    },

    navigation: {
        nextEl: '.gallery__swiper-next',
        prevEl: '.gallery__swiper-prev',
    },

    breakpoints: {

        //  это работает как @media но наоборот тип 1101 пикселей и больше экран,соотвесвенно и алгоритм адаптива наоборот прописываем(то есть чем меньше значение тем оно выше и в нем прописываем как должно все себя вести при увелечени,а не уменьшении,а в по-умолчанию прописываем как оно должно выглядеть в уменешенном состоянии)
        601:{
                slidesPerView: 3,
        },
        801:{
            spaceBetween: 32,
        },
        1101: {
            slidesPerView: 4,
        }
    }

});
