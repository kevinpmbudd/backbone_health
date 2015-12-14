var app = app || {};

// Food Model

app.Food = Backbone.Model.extend({

	defaults: {
		name: '',
		calories: 0,
		quantity: 1
	},

parse: function( response ) {
    response.id = response._id;
    return response;
}

});

