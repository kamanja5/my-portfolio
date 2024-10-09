var work = document.querySelector('.work');
var mixer = mixitup(work)

var loader = document.getElementById('preloader');
window.addEventListener("load", function(){
    loader.style.display = "none";
    $('#preloader').delay(500).fadeOut(500);
})

$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    if(scroll < 150){
        $('.header').removeClass('sticky');
    }else{
        $('.header').addClass('sticky');
    }
});