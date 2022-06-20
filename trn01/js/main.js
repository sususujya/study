// document.querySelector('.top_banner i').addEventListener('click', bannerClose);

// var bannerClose = function () {
//     document.querySelector('top_banner').style.display = 'none';
// }

$(function () {

    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp();
    });

    $('.main_slider').on('init afterChange', function (e, s, c) {
        // console.log(e, s, c);

        // 이 방법을 사용하면 슬라이더가 많아졌을때 번호가 꼬인다
        // +1을 해준 이유는 slick 이 자동으로 클론을 앞에 만들기 때문
        // $('.main_slider figure').eq(c + 1).addClass('on').siblings().removeClass('on')

        let current = $('.slick-current');

        current.addClass('on').siblings().removeClass('on');

        // 페이징
        $('.slideNum').text((c ? c + 1 : 1) + "/" + s.slideCount);
        //////////////////// ^ c 가 있으면(?) c + 1이고 아니면(: ) 1이다 <<<< 3항 연산자

    });

    $('.slideArrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });

    $('.slideArrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });

    $('.movieArrows i:nth-child(1)').on('click', function () {
        $('.movie video').trigger('play');
    });

    $('.movieArrows i:nth-child(2)').on('click', function () {
        $('.movie video').trigger('pause');
    });

    $('.main_slider').slick({
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
    });

    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/ezEYcU9Pp_w',
        containment: '.utb',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,
    });

    $('.utb i:nth-child(1)').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });

    $('.utb i:nth-child(2)').on('click', function () {
        $('#bgndVideo').YTPPause();
    });

    $('.utb i:nth-child(3)').on('click', function () {
        $('#bgndVideo').YTPFullscreen();
    });

    $('.product_slider').slick({
        centerMode: true,
        slidesToShow: 5,
        autoplay: true,
        dots: true,
        arrows: false,
    });

})