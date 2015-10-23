$(window).on('scroll', function(e){

	var px = $(window).scrollTop();

	console.log(px);

	$(.'box').css('transform', 'rotate(' + px +'deg)');

	if (px> 500 && px < 1000) {
		$('.box').css('background','blue');
	}
	else {
		$('.box').css('background','red');
	}

});





$(window).on('resize', function(e){

	var h = $(window).height();
	var w = $(window).width();


	console.log(w + " * "+ h);

});
