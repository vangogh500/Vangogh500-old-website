var main = function() {
	$('.togglebutton').click(function() {
		console.log("test");
		var toggle = $('.toggle');
		toggle.slideToggle();
	});
};

$(document).ready(main);