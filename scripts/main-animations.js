var main = function() {
	var speech1 = $("#speech1");
	var speech2 = $("#speech2");
	$('#speaker1').mouseover(function() {
		rotate(speech1);
	});
	$('#speaker1').mouseout(function() {
		unrotate(speech1);
	});
	$('#speaker2').mouseover(function() {
		rotate(speech2);
	});
	$('#speaker2').mouseout(function() {
		unrotate(speech2);
	});
};

function rotate(elem){
	elem.css({
		"transform":"rotate(10deg)"
	});
}

function unrotate(elem){
	elem.css({
		"transform":"rotate(0deg)"
	});
}

$(document).ready(main);