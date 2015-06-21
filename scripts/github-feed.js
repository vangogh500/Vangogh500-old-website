var main = function() {
	var username = "vangogh500";
	var requri   = 'https://api.github.com/users/' + username + "/repos";
	processJSON(requri);
	
	
};

function processJSON(url) {
    $.getJSON(url, function(json){
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
			var $project = $("<div>", {class: "project"});
        	var name = repos[index].name;
        	$project.append(capitalize(name.replace(reg, " ")));
        	$(".software").append($project);
        	$project.show("slow");
        });
	}
}

function capitalize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter) {
    return letter.toUpperCase();
  });
}

$(document).ready(main);