
// generic json return function
//
// var userJSON = function () {
//     $.ajax({
//         'async': false,
//         'global': false,
//         'url': 'user.dat.json',
//         'dataType': 'json',
//         'success': function (data) {
//             userJSON = data;
//         }});
//     return userJSON;
// });
// };


// var login = 'bullcitydave';
// var jsonUserURL = './app/scripts/user.dat.json';
// var jsonRepoURL = './app/scripts/repos.dat.json';
// var jsonUser = getJSON(jsonUserURL);
// var jsonRepo = getJSON(jsonRepoURL);


var json = (function () {
    'use strict';
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "user.json",
        'dataType': 'json',
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

console.log(json);
