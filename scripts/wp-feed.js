var site = "therevisionists.wordpress.com"
var username = "vangogh500";

var load = function() {
	var requri = 'https://public-api.wordpress.com/rest/v1.1/sites/' + site + '/posts';
	requestJSON(requri);
};

function requestJSON(url) {
    $.getJSON(url, { author: 43216829 }, function(json){
        makePosts(json.posts);
    });
}

$(document).ready(load);

function makePosts(posts) {
	console.log(posts);
	if(posts.length == 0) {
		console.log("No posts");
	}
	else {
		$.each(posts, function(index) {
        	if(index < 5) {
        		var name = posts[index].title;
        		var $post = $("<div>", {class: "post"});
        		var $title = $("<div>", {class: "title", id: posts[index].ID});
        		$title.append(name);
        		$post.append($title);
        		$(".blog").append($post);
        		$post.show("slow");
        	}
        });
	}
}

function requestContent(url, $title) {
	var $content = $title.next(".content");
	if($content.length) {
		if($content.is(":visible")) {
			$content.slideUp();
		}
		else {
			$content.slideDown();
		}
	}
	else {
    	$.getJSON(url, function(json){
    		var $content = $("<div>", {class: "content"});
    		$content.append(json.content);
    		$title.parent().append($content);
    		$content.slideDown();
    	});
    }
}

$(document).on("click", ".blog .post .title", function() {
	var $content = $(this).next("#content");
	if($content.length) {
		if($content.is(":visible")) {
			$content.slideUp();
		}
		else {
			$content.slideDown();
		}
	}
	var id = $(this).attr('id');
	var request = "https://public-api.wordpress.com/rest/v1.1/sites/" + site + "/posts/" + id;
	requestContent(request, $(this));
});