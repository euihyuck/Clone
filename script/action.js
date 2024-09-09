let height = $('header').css('height')



$('header').mouseenter(function () {
    $('header .logo2').stop().show()
    $('header .logo1').stop().hide()
    $('header li a').css('color:#000')
    $('.modal').stop().fadeIn()

})

$('header').mouseleave(function () {
    $('header .logo2').stop().hide()
    $('header .logo1').stop().show()
    $('.modal').stop().fadeOut()

})


$('.con2_title li').click(function () {
    $(this).toggleClass('on').siblings().removeClass('on')
    $('.con2_title li:after').css('display:none')
})

$('.con2_title li').eq(0).click(function () {
    $('.cn2').fadeIn()
    $('.cn3').hide()
    $('.cn4').hide()
    $('.cn5').hide()
})

$('.con2_title li').eq(1).click(function () {
    $('.cn3').fadeIn()
    $('.cn2').hide()
    $('.cn4').hide()
    $('.cn5').hide()

})

$('.con2_title li').eq(2).click(function () {
    $('.cn4').fadeIn()
    $('.cn2').hide()
    $('.cn3').hide()
    $('.cn5').hide()

})

$('.con2_title li').eq(3).click(function () {
    $('.cn5').fadeIn()
    $('.cn2').hide()
    $('.cn3').hide()
    $('.cn4').hide()

})

$('.popup figure').click(function () {

    $('.modal2').hide()
})

