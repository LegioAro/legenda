$(document).ready(function () {
    function sliderPayment() {
        if ($(window).width() <= 768) {
            $('.payment__items').not('.slick-initialized').slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
            })
        } else {
            $('.payment__items').filter('.slick-initialized').slick('unslick');
        }
    }

    function sliderClient() {
        $('.client__items').not('.slick-initialized').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 730,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        })

    }

    sliderPayment();
    sliderClient();

    $(window).resize(function () {
        sliderPayment();
    })

    $(".btn").on("click",  function (event) {


        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('data-scroll'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});