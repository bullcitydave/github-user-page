
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

    var userView = $('.user-template').html();

		// Define our render data (to be put into the 'rc' variable).

		var templateData = {
			name: 'Dave Seidman',
      login: 'bullcitydave',
      email: 'bullcitydave@gmail.com',
      blog: 'dave.seidman@me.com',
      location: 'Durham, NC',
      created_at: 'June 4, 2014',
      following: 6,
      followers: 12
		};

		// Render the underscore template and inject it after the H1
		// in our current DOM. 2nd example code
		// $( '.template' ).after(
		// 	template(templateData)
		// );

      $('header').append(_.template(userView,templateData));
