var main = function() {
	$('.togglebutton').click(function() {
		var toggle = $('.toggle');
		toggle.slideToggle();
	});
	
	$(".scroll").click(function() {
	});
};

$(document).ready(main);