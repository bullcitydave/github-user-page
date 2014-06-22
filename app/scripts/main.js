
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

var login = 'emmylucille';

var contributorJSON = getJSON ('https://api.github.com/repos/' + login + '/' + login + '.github.io/contributors');

var repoJSON = getJSON ('https://api.github.com/users/' + login + '/repos');

var userJSON = getJSON ('https://api.github.com/users/' + login);

var tiyJSON = getJSON ('https://api.github.com/orgs/tiy-durham-june2014-frontend');

var userView = $('.user-template').html();

var repoView = $('.repo-template').html();


// Define our render data (to be put into the 'rc' variable)...i would but I've got enough going on to try to understand why i shoudl do this

//this works...don't touch this!
$('#user-info').append(_.template(userView,userJSON));


for (var i = 0; i < (_.size(repoJSON)); i++) {
    console.log(repoJSON[0].name);
    $('#popular-repos').append(_.template(repoView,repoJSON[i]));
}



// this is never going to work, is it? because repoJSON is an array, but why not repoJSON2? I can apply userJSON to repoView. Have created repoJSON2 to be same simple object format, got rid of User properties, which I should do in a map function after I get the data loaded in some sort of loop
// $('#main').append(_.template(repoView,repoJSON2));




// var contributorJSON = (function () {
//     var json = null;
//     $.ajax({
//         'async': false,
//         'global': false,
//         'url': 'https://api.github.com/repos/bullcitydave/bullcitydave.github.io/contributors',
//         'dataType': "json",
//         'success': function (data) {
//             json = data;
//         }
//     });
//     return json;
// })();


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
