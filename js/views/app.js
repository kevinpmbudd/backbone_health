var app = app || {};

app.AppView = Backbone.View.extend({

	el:'#food-app',

	initialize: function() {
		this.listenTo(app.Queries, 'add', this.addOne);
	},

	events: {
		'click #button': 'queryAPI'
	},

	addOne: function( food ) {
		var view = new app.FoodView({ model: food });
		$('#query-list').append( view.render().el);
	},

	queryAPI: function() {
		var queryTerm = $('#query').val().trim();
		console.log(queryTerm);

		$.ajax({
			url: "https://api.nutritionix.com/v1_1/search/cheddar%20cheese?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=0226b8d8&appKey=79c742c2ed9ff0bdbaf2731141a245f7",

			beforeSend: function( xhr ) {
				xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
			}
		})
		.done(function( data ) {
			if ( console && console.log ) {
				console.log(data);
			}
		});

	}

});