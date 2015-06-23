var username = "vangogh500";

var load = function() {
	var requri   = 'https://api.github.com/repos/' + username + "/resume/readme";
	requestReadMe(requri);
};

function requestReadMe(url) {
     $.ajax({
     	url: url,
     	headers: { 'Accept': 'application/vnd.github.html' }
     }).done(function(readme) {
     	var $md = $(readme);
     	$(".resume .right-content").append($md);
     });
}

$(document).ready(load);