$(document).ready(function (){
    //Menu mobile
    $('#btn-mobile').click(function(){
        $('#nav').toggleClass('active', 1000);
    })


    //Scrool
    $('#menu a').click(function(e){
        e.stopPropagation();
        let href = $(this).attr('href');
        let offSetTop = $(href).offset().top;

        $('html, body').animate({
            scrollTop: offSetTop
        })
    })

    //Slider
    var curIndex = 0;
    var ant;
    initSlider();
    autoPlay();

    function initSlider(){
        ant = $('.sobre-autor').length;
        let sizeContainer = 100 * ant;
        let sizeBoxSingle = 100 / ant;
        $('.sobre-autor').css('width', sizeBoxSingle + '%');
        $('.scroll-box').css('width', sizeContainer + '%')

        for(var i = 0; i < ant; i++){
            if(i == 0){
                $('.slider-bullets').append('<span style="background-color: black;"></span>')
            } else {
                $('.slider-bullets').append('<span></span>')
            }
        }
    }

    function autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == ant){
                curIndex = 0;
            }
            goToSlider(curIndex);
        }, 3000)
    }

    function goToSlider(curIndex){
        var offSetX = $('.sobre-autor').eq(curIndex).offset().left - $('.scroll-box').offset().left;
        $('.slider-bullets span').css('background-color', 'gray');
        $('.slider-bullets span').eq(curIndex).css('background-color', 'black');
        $('.scroll-autor').animate({
            scrollLeft: offSetX
        })
    }
});