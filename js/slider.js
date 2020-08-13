//store slider in a variable
var slider = $('#slider');
//store buttons
var next = $('#btn-next');
var prev = $('#btn-prev');

//move the last image to the first place

$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');

//show the first image with a margin of -100%
slider.css('margin-left', '-100%');

function moverD() {
	slider.animate({
		marginLeft:'-200%'
	} ,700, function(){
		$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
		slider.css('margin-left', '-100%');
	});
}

function moverI() {
	slider.animate({
		marginLeft:0
	} ,700, function(){
		$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
		slider.css('margin-left', '-100%');
	});
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 7000);
}
next.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

prev.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();