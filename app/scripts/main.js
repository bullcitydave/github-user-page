/* jshint undef: false, unused: false */
"use strict";


// change the login as needed; ideally pass a parameter to page; mine can be default

var login = 'juliaelman';

<<<<<<< HEAD
/* jshint undef: true, unused: true */

var login = 'bullcitydave';

// Get github API data
  var contribJSON = getJSON ('https://api.github.com/repos/' + login + '/' + login + '.github.io/contributors');
  var repoJSON = getJSON ('https://api.github.com/users/' + login + '/repos');
  var userJSON = getJSON ('https://api.github.com/users/' + login);
  var tiyJSON = getJSON ('https://api.github.com/orgs/tiy-durham-june2014-frontend');
  var followerJSON = getJSON('https://api.github.com/users/' + login + '/followers');
  var starredJSON = getJSON('https://api.github.com/users/' + login + '/starred');
  var eventsJSON = getJSON('https://api.github.com/users/' + login + '/events');



// using total count of push and create events; this is greater than actual number github has; their algorithm is unclear to me
var contributionCount = _.countBy(eventsJSON, 'type').PushEvent + _.countBy(eventsJSON, 'type').CreateEvent;

var commitCount = _.countBy(eventsJSON, 'type').PushEvent;

var starredCount = _.size(starredJSON);

// generate pre-compile HTML from templatesß
var userView = $('.user-template').html();
var repoView = $('.repo-template').html();
var contribView = $('.activity-summary-template').html();
var repoCommitView = $('.repo-commit-template').html();



// Define our render data (to be put into the 'rc' variable)...i would but I've got enough going on to try to understand why i shoudl do this

//this works...don't touch this!
$('#user-info').append(_.template(userView,userJSON));

// should do a sort on all and return first, but just going to grab first 5 for the time being
for (var i = 0; i < (_.size(repoJSON)) && i < 5 ; i++) {
    $('#popular-repos').append(_.template(repoView,repoJSON[i]));
}

$('#contrib-stats').append(_.template(contribView,contribJSON));
=======
// Get github API URLs
var repoURL = 'https://api.github.com/users/' + login + '/repos?' + token;
var userURL = 'https://api.github.com/users/' + login + '?' + token;
var eventURL = 'https://api.github.com/users/' + login + '/events?' + token;
var starredURL = 'https://api.github.com/users/' + login + '/starred?' + token;

$.getJSON(userURL).done(function(userData){
    var userView = $('.user-template').html();
    userData.starredCount = _.size($.getJSON(starredURL));
    $('#user-info').append(_.template(userView,userData));
});
>>>>>>> day2

$.getJSON(repoURL).done(function(repoData){
    var repoView = $('.repo-template').html();
    for (var i = 0; i < (_.size(repoData)) && i < 5 ; i++) {
        $('#popular-repos').append(_.template(repoView,repoData[i]));
    }
});

<<<<<<< HEAD
var counts= _.toArray(commitsByRepo);
var c = 0;
for (var name in commitsByRepo){
  repoName = name;
  repoCommitCount = counts[c];
  c++;
  // $('#commits-by-repo').append(_.template(repoCommitView));
  $('#commits-by-repo').append('<p>' +repoName+'</p>');
  $('#commits-by-repo').append('<p>' + repoCommitCount+'</P>');
};

    ``
function getJSON (myUrl) {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': myUrl,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
};
=======
// $.getJSON(eventURL).done(function(eventData){
//     var commitCount = _.countBy(eventData, 'type').PushEvent;
//     console.log(commitCount);
//     $('#commit-total').append(_.template($('.commit-count').html(),commitCount));
// });

// var commitsByRepo = _.countBy(eventData, function(myevent) {
//     return myevent.repo.name;
// });
//
// var counts= _.toArray(commitsByRepo);
// var c = 0;
// for (var name in commitsByRepo){
//   repoName = name;
//   console.log(repoName);
//   repoCommitCount = counts[c];
//   console.log(repoCommitCount);
//   c++;
//   // $('#commits-by-repo').append(_.template(repoCommitView));
//   $('#commits-by-repo').append('<p>' +repoName+'</p>');
//   $('#commits-by-repo').append('<p>' + repoCommitCount+'</P>');
// };
>>>>>>> day2
