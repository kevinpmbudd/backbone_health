var app = app || {};

app.AppView = Backbone.View.extend({

	el: '#food-app',

	initialize: function() {
		this.queries = this.$('#query-list');
		this.foods = this.$('#foods');

		this.listenTo(app.QueryFirebase, 'add', this.addSearchResult);
		this.listenTo(app.QueryFirebase, 'reset', this.emptySearchResults);
		this.listenTo(app.FoodsFirebase, 'add', this.addFood);
	},

	events: {
		'click #button': 'queryAPI',
		'enter #query': 'queryAPI'
	},

	addSearchResult: function( food ) {
		var view = new app.SearchView({ model: food });
		this.queries.append(view.render().el);
	},

	emptySearchResults: function() {
		this.queries.empty();
	},

	queryAPI: function() {
		// console.log(app.QueryFirebase);
		app.QueryFirebase.reset();
		var APP_ID = '0226b8d8';
		var APP_KEY = '79c742c2ed9ff0bdbaf2731141a245f7';
		var queryTerm = $('#query').val().trim();
		var nutrition_url = 'https://api.nutritionix.com/v1_1/search/' + queryTerm + '?fields=item_name%2Cnf_calories&' + 'appId=' + APP_ID + '&appKey=' + APP_KEY;

		var settings = {
			url: nutrition_url,
			cache: true,
			dataType: 'json'
		};

		$.ajax(settings)
		.done(function(data) {
			var results = data.hits;
			// console.log(data);

			results.forEach(function(result) {

				var item_name = result.fields.item_name;
				var item_calories = result.fields.nf_calories;

				app.QueryFirebase.add({ name: item_name, calories: item_calories });
      });
		});
	},

	addFood: function( food ) {
		var view = new app.FoodView({ model: food });
		this.foods.append(view.render().el);
	}
});
