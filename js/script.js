$('.page-scroll').on('click', function(e){
	var tujuan = $(this).attr('href');
	var elemenTujuan = $(tujuan);
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50
	}, 1250, 'easeInOutExpo');
	e.preventDefault();

});

$(window).on('load', function(){
	$('.kiri').addClass('kiri-go');
	$('.kanan').addClass('kanan-go')
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform': 'translate(0px, '+ wScroll / 4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, '+ wScroll / 2 +'%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
	});


});










