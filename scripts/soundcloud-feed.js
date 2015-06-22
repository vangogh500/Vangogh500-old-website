var user = "6271707";
var id = "ce9675aa9fd86cee699436cd3de9bbde";

var loadsoundcloud = function() {
	var requri   = 'http://api.soundcloud.com/users/' + user + '/tracks.json?client_id=' + id +'&limit=5e&order=created_at';
	requestSCJSON(requri);
};

function requestSCJSON(url) {
    $.getJSON(url, function(json){
        makeSCPosts(json);
    });
}

$(document).ready(loadsoundcloud);


function makeSCPosts(tracks) {
	if(tracks.length == 0) {
		console.log("No tracks");
	}
	else {
		console.log(tracks);
		$.each(tracks, function(index) {
			if(index < 5) {
				var url = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + tracks[index].id
				var $track = $("<iframe>", {scrolling: "no", frameborder: "no", src: url});
        		$(".music").append($track);
        		$title.show("slow");
        	}
        });
	}
}

/**
function requestReadMe(url, $proj) {
     $.ajax({
     	url: url,
     	headers: { 'Accept': 'application/vnd.github.html' }
     }).done(function(readme) {
     	var $md = $(readme);
     	$proj.append($md);
     	$md.slideDown();
     });
}



$(document).on("click", ".software .project .title", function() {
	var $readme = $(this).next("#readme");
	if($readme.length) {
		if($readme.is(":visible")) {
			$readme.slideUp();
		}
		else {
			$readme.slideDown();
		}
	}
	else {
		var title = $(this).text();
		var requri   = 'https://api.github.com/repos/' + username + '/' + title.replace(/ /g, "-") + '/readme';
		requestReadMe(requri, $(this).parent());
	}
});
**/