var app = app || {};

app.AppView = Backbone.View.extend({

	el:'#food-app',

	initialize: function() {
		this.listenTo(app.Queries, 'add', this.addOne);
		this.listenTo(app.Queries, 'reset', this.empty);
	},

	events: {
		'click #button': 'queryAPI'
	},

	addOne: function( food ) {
		var view = new app.FoodView({ model: food });
		$('#query-list').append( view.render().el);
	},

	empty: function() {
		$('#query-list').empty();
	},

	queryAPI: function() {
		app.Queries.reset();
		var APP_ID = '0226b8d8';
	  var APP_KEY = '79c742c2ed9ff0bdbaf2731141a245f7';
		var queryTerm = $('#query').val().trim();
		var nutrition_url = 'https://api.nutritionix.com/v1_1/search/'
				   + queryTerm + '?fields=item_name%2Cnf_calories&'
				   + 'appId=' + APP_ID + '&appKey=' + APP_KEY;

		var settings = {
        url: nutrition_url,
        cache: true,
        dataType: 'json'
    };

		$.ajax(settings)
		.done(function( data ) {
				var results = data.hits;

				results.forEach(function(result) {
					// console.log(result.fields);
					var item_name = result.fields.item_name;
					var item_calories = result.fields.nf_calories;

					app.Queries.create({ name: item_name, calories: item_calories });
					// console.log(item_name, calories);
				});
		});

	}

});