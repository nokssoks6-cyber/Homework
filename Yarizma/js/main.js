// Очередная модалочка
const open = document.querySelector('.info__location');
const open2 = document.querySelector('.footer__location')
const modal = document.querySelector('.modal');
const body = document.body;
const mapFrame = document.getElementById('mapFrame');
const mobileLoc = document.querySelector('.loc-mobile')

const openModal = () => {
    mapFrame.src = "https://yandex.ru/map-widget/v1/?um=constructor%3A23631bdd87371777b8a8efd80aa35e25da100f78fbc2ba8ac31f87261fd829e5&source=constructor";

    modal.classList.add('modal--opened');
    body.classList.add('body--fixed');
};

const closeModal = () => {
    modal.classList.remove('modal--opened');
    body.classList.remove('body--fixed');
    mapFrame.src = "";
};

[open, mobileLoc, open2].forEach(el => {
    el.addEventListener('click', event => {
        event.preventDefault();
        openModal();
    });
});

modal.addEventListener('click', event => {
    const target = event.target;
    if (
        target.closest('.modal__cancel') ||
        target.classList.contains('modal')
    ) {
        closeModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        closeModal();
    }
});
// -----------------Вторая модалка---------------------
const bookingModal = document.querySelector('.modal--booking');

const openBookingModal = () => {
    bookingModal.classList.add('modal--opened');
    body.classList.add('body--fixed');
};

const closeBookingModal = () => {
    bookingModal.classList.remove('modal--opened');
    body.classList.remove('body--fixed');
};

const bookingButtons = document.querySelectorAll(
    '.nav__button-2, .hero__button, .halls__button, .advantage__button, .question__button'
);

bookingButtons.forEach(btn => {
    btn.addEventListener('click', event => {
        event.preventDefault();
        openBookingModal();
    });
});

bookingModal.addEventListener('click', event => {
    if (
        event.target.closest('.modal__cancel') ||
        event.target.classList.contains('modal')
    ) {
        closeBookingModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        closeBookingModal();
    }
});

// ------------------------------Бургер----------------------------------
const burger = document.querySelector('.burger-icon');
const burgerModal = document.querySelector('.modal--burger');
const navButton1 = document.querySelector('.nav__button-1');



const openBurgerModal = () => {
    burgerModal.classList.add('modal--opened');
    body.classList.add('body--fixed', 'body--opened-menu');
    if (mobileLoc) mobileLoc.classList.remove('loc-mobile--active');
};

const closeBurgerModal = () => {
    burgerModal.classList.remove('modal--opened');
    body.classList.remove('body--fixed', 'body--opened-menu');
    if (mobileLoc) mobileLoc.classList.add('loc-mobile--active');
};


const toggleBurgerModal = () => {
    if (burgerModal.classList.contains('modal--opened')) {
        closeBurgerModal();
    } else {
        openBurgerModal();
    }
};


burger.addEventListener('click', (e) => {
    e.preventDefault();
    toggleBurgerModal();
});


document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && burgerModal.classList.contains('modal--opened')) {
        closeBurgerModal();
    }
});

    if (navButton1) {
    navButton1.addEventListener('click', () => {
        closeBurgerModal();
    });

};
// ---------------------------------------------------------------------------------------Табы-------------------------------------------------------------------------------------

const tabs = document.querySelectorAll('.halls__tabs-item');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = tab.querySelector('a').getAttribute('href').substring(1);

        // 1️⃣ Активный таб
        tabs.forEach(t => t.classList.remove('halls__tabs-item--focus'));
        tab.classList.add('halls__tabs-item--focus');

        // 2️⃣ Все контенты и слайдеры
        const allTabBlocks = document.querySelectorAll('.halls__tab-content-1, .halls__tab-content-2, .halls__tab-content-3, .halls__tab-content-5, .halls__tab-slider');
        allTabBlocks.forEach(block => block.classList.remove('halls__tab--active'));

        // 3️⃣ Активный контент и слайдер
        const activeBlocks = document.querySelectorAll(`#${targetId}`);
        activeBlocks.forEach(block => block.classList.add('halls__tab--active'));
    });
});

// ---------------------------------------------------------------------------------------Слайдер-------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".halls__tab-slider");

    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll(".halls__swiper-slide");
        const thumbnails = slider.querySelectorAll(".halls__thumbnail");
        const controls = slider.closest(".halls__inner")?.querySelector(".slider-conrols");
        const leftBtn = controls?.querySelector(".slider-conrols__left");
        const rightBtn = controls?.querySelector(".slider-conrols__right");
        const paginationCurrent = controls?.querySelector(".halls__pagination-current");
        const paginationTotal = controls?.querySelector(".halls__pagination-total");

        if (!slides.length || !thumbnails.length) return;

        let currentIndex = 0;
        const totalSlides = slides.length;

        // Устанавливаем общее количество
        if (paginationTotal) paginationTotal.textContent = totalSlides;

        // Функция для обновления активного слайда
        function updateSlider(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("halls__swiper-slide-active", i === index);
            });

            thumbnails.forEach((thumb, i) => {
                thumb.classList.toggle("halls__thumbnail--active", i === index);
            });

            if (paginationCurrent) paginationCurrent.textContent = index + 1;

            // Управление состоянием кнопок
            if (leftBtn) {
                if (index === 0) {
                    leftBtn.classList.add("slider-controls--last");
                } else {
                    leftBtn.classList.remove("slider-controls--last");
                }
            }

            if (rightBtn) {
                if (index === totalSlides - 1) {
                    rightBtn.classList.add("slider-controls--last");
                } else {
                    rightBtn.classList.remove("slider-controls--last");
                }
            }
        }

        // Кнопка "влево"
        leftBtn?.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider(currentIndex);
            }
        });

        // Кнопка "вправо"
        rightBtn?.addEventListener("click", () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                updateSlider(currentIndex);
            }
        });

        // Клик по превью
        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener("click", () => {
                currentIndex = index;
                updateSlider(currentIndex);
            });
        });

        // Инициализация
        updateSlider(currentIndex);
    });
});

//--------------------------------------------------------------------------------Второй слайдер--------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector(".screenshots");
    if (!section) return;

    const downWrap = section.querySelector(".screenshots__down");
    const track = section.querySelector(".screenshots__slider");
    const slides = Array.from(section.querySelectorAll(".screenshots__slide"));

    const btnPrevList = section.querySelectorAll(".screenshots__conrols-left");
    const btnNextList = section.querySelectorAll(".screenshots__conrols-right");
    const paginationCurrentList = section.querySelectorAll(".pagination-current");
    const paginationTotalList = section.querySelectorAll(".pagination-total");

    if (!track || slides.length === 0) return;

    const gapPx = 24;
    let currentIndex = 0;
    let slideW = 0;
    let visibleFull = 5;
    let visibleExtra = 0.5;

    function getVisibleConfig() {
        const w = window.innerWidth;
        if (w <= 480) return { full: 1, extra: 0.3 };
        if (w <= 768) return { full: 2, extra: 0.3 };
        if (w <= 1200) return { full: 3, extra: 0.5 };
        return { full: 5, extra: 0.5 };
    }

    function resizeAndLayout() {
        const { full, extra } = getVisibleConfig();
        visibleFull = full;
        visibleExtra = extra;

        const visibleCount = visibleFull + visibleExtra;
        const containerWidth = downWrap.clientWidth;
        slideW = (containerWidth - (visibleCount - 1) * gapPx) / visibleCount;

        slides.forEach(slide => {
            slide.style.width = `${slideW}px`;
        });

        track.style.gap = `${gapPx}px`;
        applyTrackPosition(false);
    }

    function applyTrackPosition(withTransition = true) {
        const visibleCount = visibleFull + visibleExtra;
        const maxVisibleStart = slides.length - visibleCount;
        let offsetIndex;

        if (currentIndex > visibleFull - 1) {
            offsetIndex = Math.min(currentIndex - (visibleFull - 1), maxVisibleStart);
        } else {
            offsetIndex = 0;
        }

        const step = slideW + gapPx;
        const offset = -offsetIndex * step;

        if (!withTransition) {
            track.style.transition = "none";
            track.style.transform = `translateX(${offset}px)`;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    track.style.transition = "transform 0.6s cubic-bezier(.22,.9,.36,1)";
                });
            });
        } else {
            track.style.transform = `translateX(${offset}px)`;
        }
    }

    function updateVisuals() {
        slides.forEach((slide, i) => {
            slide.classList.toggle("screenshots__slide--active", i === currentIndex);
            const distance = Math.abs(i - currentIndex);
            slide.style.filter = distance > 1 ? "brightness(0.6)" : "none";
        });

        paginationCurrentList.forEach(el => (el.textContent = String(currentIndex + 1)));
        paginationTotalList.forEach(el => (el.textContent = String(slides.length)));

        btnPrevList.forEach(btn => {
            btn.classList.toggle("slider-controls--last", currentIndex === 0);
        });

        btnNextList.forEach(btn => {
            btn.classList.toggle("slider-controls--last", currentIndex === slides.length - 1);
        });
    }

    function setIndex(newIndex) {
        if (newIndex < 0) newIndex = 0;
        if (newIndex > slides.length - 1) newIndex = slides.length - 1;
        if (newIndex === currentIndex) return;

        currentIndex = newIndex;
        applyTrackPosition(true);
        updateVisuals();
    }

    // подключаем обе группы кнопок
    btnPrevList.forEach(btn => btn.addEventListener("click", () => setIndex(currentIndex - 1)));
    btnNextList.forEach(btn => btn.addEventListener("click", () => setIndex(currentIndex + 1)));

    slides.forEach((slide, idx) => slide.addEventListener("click", () => setIndex(idx)));

    // обновление при изменении размера окна с debounce
    let resizeTimer;
    function handleResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            resizeAndLayout();
            updateVisuals();
        }, 150);
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    paginationTotalList.forEach(el => (el.textContent = String(slides.length)));
    resizeAndLayout();
    updateVisuals();
});

// ------------------------------Аккордеон (FAQ)----------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".accordion-list__item");

    items.forEach(item => {
        const btn = item.querySelector(".accordion-list__control");
        const content = item.querySelector(".accordion-list__content");

        btn.addEventListener("click", () => {
            const isOpen = item.classList.contains("accordion-list__item--opened");

            // Закрыть все
            items.forEach(el => {
                el.classList.remove("accordion-list__item--opened");
                el.querySelector(".accordion-list__content").style.maxHeight = null;
            });

            // Если текущий был закрыт — открыть
            if (!isOpen) {
                item.classList.add("accordion-list__item--opened");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

// ----------------------------------------------------фиксированная ссылка наверх-------------------------------------------------------------------------------------

window.addEventListener('scroll', () => {
    const label = document.querySelector('.line-fix-label');
    if (!label) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // 
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollPercent >= 50) {
        label.classList.add('line-fix-label--active');
    } else {
        label.classList.remove('line-fix-label--active');
    }
});
