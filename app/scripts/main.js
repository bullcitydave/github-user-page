
// Render the underscore template and inject it after the H1
// in our current DOM. 2nd example code
// $( '.template' ).after(
// 	template(templateData)
// );
// When rending an underscore template, we want top-level
// variables to be referenced as part of an object. For
// technical reasons (scope-chain search), this speeds up
// rendering; however, more importantly, this also allows our
// templates to look / feel more like our server-side
// templates that use the rc (Request Context / Colletion) in
// // order to render their markup.

// _.templateSettings.variable = 'rc';

// Grab the HTML out of our template tag and pre-compile it.
// ??  this is from the other example Julia sent me
// var template = _.template(
// 	$( 'script.user-template' ).html()
// );

var login = 'bullcitydave';

// Get github API data
  var contribJSON = getJSON ('https://api.github.com/repos/' + login + '/' + login + '.github.io/contributors');
  var repoJSON = getJSON ('https://api.github.com/users/' + login + '/repos');
  var userJSON = getJSON ('https://api.github.com/users/' + login);
  var tiyJSON = getJSON ('https://api.github.com/orgs/tiy-durham-june2014-frontend');
  var followerJSON = getJSON('https://api.github.com/users/' + login + '/followers');
  var starredJSON = getJSON('https://api.github.com/users/' + login + '/starred');
  var eventsJSON = getJSON('https://api.github.com/users/' + login + '/events');

var starredCount = _.size(starredJSON);

// using total count of push and create events; this is greater than actual number github has; their algorithm is unclear to me
var contributionCount = _.countBy(eventsJSON, 'type').PushEvent + _.countBy(eventsJSON, 'type').CreateEvent;

var commitCount = _.countBy(eventsJSON, 'type').PushEvent;


var userView = $('.user-template').html();
var repoView = $('.repo-template').html();
var contribView = $('.activity-summary-template').html();
var repoCommitView = $('.repo-commit-template').html();


//
// for (var i = 0; i < (_.size(repoJSON)) && i < 5 ; i++) {
//     $('#popular-repos').append(_.template(repoView,repoJSON[i]));
// }


// Define our render data (to be put into the 'rc' variable)...i would but I've got enough going on to try to understand why i shoudl do this

//this works...don't touch this!
$('#user-info').append(_.template(userView,userJSON));

// should do a short on all and return first, but just going to grab first 5 for the time being
for (var i = 0; i < (_.size(repoJSON)) && i < 5 ; i++) {
    $('#popular-repos').append(_.template(repoView,repoJSON[i]));
}

$('#contrib-stats').append(_.template(contribView,contribJSON));

// commits by repository; first line returns an object where names of props are the repos, values are counts
var commitsByRepo = _.countBy(eventsJSON, function(myevent) {
    return myevent.repo.name;
});

var counts= _.toArray(commitsByRepo);
var c = 0;
for (var name in commitsByRepo){
  repoName = name;
  console.log(repoName);
  repoCommitCount = counts[c];
  console.log(repoCommitCount);
  c++;
  // $('#commits-by-repo').append(_.template(repoCommitView));
  $('#commits-by-repo').append('<p>' +repoName+'</p>');
  $('#commits-by-repo').append('<p>' + repoCommitCount+'</P>');
};

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
