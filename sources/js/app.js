(function(){
    const strategy = new Swiper('.strategy', {
        speed: 400,
        slidesPerView: 'auto',
        spaceBetween: 35,
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    });

    document.querySelector('.arrow-prev').addEventListener('click', function() {
        strategy.slidePrev();
    });
    document.querySelector('.arrow-next').addEventListener('click', function() {
        strategy.slideNext();
    })

    const reviewsThumbs = new Swiper('.clients-img', {
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

    var phones = document.querySelectorAll('.form__input_phone');
    phones.forEach(function(phone) {
        var maskOptions = {
            mask: '+{7}(000)000-00-00'
        };
        var mask = IMask(phone, maskOptions);
    });

    var consult = document.querySelectorAll('.package__btn'),
        strategyBtn = document.querySelectorAll('.btn__strategy'),
        modalConsult = document.querySelector('.modal-wrap_consult'),
        modalStrategy = document.querySelector('.modal-wrap_strategy'),
        modalCloseBtn = document.querySelectorAll('.modal__close');

    consult.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalConsult.classList.add('open');
        });
    });

    strategyBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalStrategy.classList.add('open');
        });
    });

    modalCloseBtn.forEach(function(btn) {
        btn.addEventListener('click', function() {
            modalClose();
        });
    })

    function modalClose() {
        var modalOpen = document.querySelector('.modal-wrap.open');

        modalOpen.classList.remove('open');
    }

    var btnLink       = document.querySelector('.btn__link'),
        sectionScroll = document.querySelector('.block-row_build').getBoundingClientRect().y;
    btnLink.addEventListener('click', function(event) {
        scrollBlock();
    });

    function scrollBlock() {
        event.preventDefault();
        window.scrollTo({
            top: sectionScroll - 100,
            behavior: 'smooth'
        });
    }

    function sendMail(form) {
        var xhr = new XMLHttpRequest(),
            formData = new FormData(form);

        xhr.open('POST', './send.php', true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            }
            else {
                console.log(xhr.status);
            }
        };

        xhr.onerror = function() {
            reject(new Error("Network Error"));
        };
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xhr.send(formData);
        document.querySelector('.modal-wrap.open').classList.remove('open');
        form.reset();
    }

    var btnSend = document.querySelectorAll('.btn_send');

    btnSend.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            var form = this.parentNode;
            if (ValidateEmail(form.email)) {
                sendMail(form);
            }
        });
    });

    function ValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
            return (true)
        }
        alert("Введите правильный email")
        return (false)
    }

}());
