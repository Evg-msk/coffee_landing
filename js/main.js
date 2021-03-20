window.addEventListener('DOMContentLoaded', () => {
    const tab = document.querySelectorAll('.buttons-group__item'),
          groupTab = document.querySelector('.buttons-group'),
          tabContent = document.querySelectorAll('.gift__content');


    const swiper = new Swiper('.coffee-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2.2,
        slidesPerGroup: 2,
        watchOverflow: true,
        slidesPerGroupSkip: 2,
        spaceBetween: 29,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const secondSwiper = new Swiper('.combo-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3.3,
        slidesPerGroup: 3,
        watchOverflow: true,
        slidesPerGroupSkip: 3,
        spaceBetween: 35,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    const hideTabContent = a => {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    const showTabContent = b => {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    groupTab.addEventListener('click',  e => {
        let target = e.target;
        if (target && target.classList.contains('buttons-group__item')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    for (let i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", function() {
            let current = document.getElementsByClassName("buttons-group__item_active");
            current[0].className = current[0].className.replace(" buttons-group__item_active", "");
            this.className += " buttons-group__item_active";
        });
    }
});
