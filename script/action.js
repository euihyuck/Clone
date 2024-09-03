let height = $('header').css('height')



$('header').mouseenter(function () {
    $('header .logo2').stop().show()
    $('header .logo1').stop().hide()
    $('header li a').css('color:#000')

})

$('header').mouseleave(function () {
    $('header .logo2').stop().hide()
    $('header .logo1').stop().show()

})