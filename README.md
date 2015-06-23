# Vangogh500.github.io

##Overview & Design
Go to the original site: [Link](http://vangogh500.github.io/)

Vangogh500.github.io contains all of the source code for the personal site: vangogh500.github.io.
Inspired by a minimalistic theme, the design attempts to present as much content as it can while attempting to maintain a spacious and light appearance.
The site gets much of its contents dynamically. However, due to the restrictions of hosting on github and static pages, the site utilizes the AJAX framework to transfer the burden of retrieving content to the client-side.

##Change Log
* Added resume to homepage

##To-Do
* UI-display for failed fetches
* UI to retrieve more content dynamically


##Provided
###CSS
Contains all CSS stylings for the html files provided.
[Path](css/)

###Scripts
[Path](scripts/)
Contains all of the scripts for the site. 
* github-feed.js - responsible for fetching content from the github api
* wp-feed.js - responsible for fetching content from the wordpress api

##Dependencies
* JQuery 1.11.2
* GitHub API v3
* WordPress REST API
* CSS3

##License
The code is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 3.0](http://creativecommons.org/licenses/by-nc-sa/3.0/)
