/* jshint undef: false, unused: false */

"use strict";

// change the login as needed; ideally pass a parameter to page; mine can be default
var login = 'bullcitydave';

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

// WHY IS responseJSON not accessible here?
// var j =   $.getJSON(userURL).done(function(userData){
//     return userData.responseJSON;
// });


$.getJSON(repoURL).done(function(repoData){
    var repoView = $('.repo-template').html();
    for (var i = 0; i < (_.size(repoData)) && i < 5 ; i++) {
        $('#popular-repos').append(_.template(repoView,repoData[i]));
    }
});

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


function getStartDate (jsunixtimestamp) {
  return date.getHours();
}
