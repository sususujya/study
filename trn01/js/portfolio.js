$(function () {
    $('.section').eq(0).addClass('on');

    $('#portfolio').fullpage({
        anchors: ['p01', 'p02', 'p03', 'p04', 'p05'],
        afterLoad: function (anchorLink, index) {
            const delayClass = () => {
                $('.section').eq(index - 1).addClass('on').siblings().removeClass('on');
            };
            setTimeout(delayClass);

            $('.nb li').eq(index - 1).addClass('on').siblings().removeClass('on');
            // var _this = $('.active');
            // _this.addClass('on').siblings().removeClass('on')
        },
    });

    $('.cover_open').on('click', function () {
        $('#cover').toggleClass('on')
    });

    $('#cover a').on('click', function () {
        $('#cover').removeClass('on');
    });

});