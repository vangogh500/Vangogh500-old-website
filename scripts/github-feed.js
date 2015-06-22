
var username = "vangogh500";

var load = function() {
	var requri   = 'https://api.github.com/users/' + username + "/repos";
	requestJSON(requri);
};

function requestJSON(url) {
    $.getJSON(url, { sort: "updated" }, function(json){
        makePosts(json);
    });
}

function makePosts(repos) {
	if(repos.length == 0) {
		console.log("No Repos");
	}
	else {
		var reg = /-/g;
		$.each(repos, function(index) {
			if(index < 5) {
				var $project = $("<div>", {class: "project"});
				var $title = $("<div>", {class: "title"});
        		var name = repos[index].name;
        		$title.append(capitalize(name.replace(reg, " ")));
        		$project.append($title);
        		$(".software").append($project);
        		$title.show("slow");
        	}
        });
	}
}

function capitalize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter) {
    return letter.toUpperCase();
  });
}

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

$(document).ready(load);

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