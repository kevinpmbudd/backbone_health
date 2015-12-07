var app = app || {};

// Food Model

app.Food = Backbone.Model.extend({

	defaults: {
		name: '',
		calories: 0
	}

});

