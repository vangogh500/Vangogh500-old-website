var main = function() {
    var song1 = new Audio('./sounds/moonlightserenade.mp3');
    var song2 = new Audio('./sounds/watersofmarch.mp3');
    song1.loop = true;
    song2.loop = true;
    var door = new Audio('./sounds/door.mp3');
    var ding = new Audio('./sounds/ding.mp3');
    $('.elevator-button').click(function() {
	var rand = Math.floor(Math.random() * 2 +1);
	var song;
	if(rand == 1)
	    song = song1;
	else
	    song = song2;
	door.play();
	
	setTimeout(function() {
	    song.play();
	    $("html, body").animate({
		scrollTop:0,
		easing:"easeInOutQuad"
	    }, 10000, function() {
		song.pause();
		ding.play();
	    });
	}, 1500);
    });
};

    

$(document).ready(main);
