(function(){
    const strategy = new Swiper('.strategy', {
        speed: 400,
        slidesPerView: 'auto',
        spaceBetween: 35,
        loop: true
    });

    document.querySelector('.arrow-prev').addEventListener('click', function() {
        strategy.slidePrev();
    });
    document.querySelector('.arrow-next').addEventListener('click', function() {
        strategy.slideNext();
    })

    const reviewsThumbs = new Swiper('.case-img', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    const reviews = new Swiper('.clients-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        touchRatio: 0,
        thumbs: {
            swiper: reviewsThumbs
        }
    });

    document.querySelector('.clients-prev').addEventListener('click', function() {
        reviews.slidePrev();
        reviewsThumbs.slidePrev();
    });
    document.querySelector('.clients-next').addEventListener('click', function() {
        reviews.slideNext();
        reviewsThumbs.slideNext();
    });

    const caseThumbs = new Swiper('.case-img', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    const caseSlider = new Swiper('.case-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        touchRatio: 0,
        thumbs: {
            swiper: caseThumbs
        }
    });

    document.querySelector('.case-prev').addEventListener('click', function() {
        caseSlider.slidePrev();
        caseThumbs.slidePrev();
    });
    document.querySelector('.case-next').addEventListener('click', function() {
        caseSlider.slideNext();
        caseThumbs.slideNext();
    });
}());
