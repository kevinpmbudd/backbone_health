var app = app || {};

// Food Item View

app.FoodView = Backbone.View.extend({

	tagName: 'li',

	template: _.template( $('#food-item-template').html()),

	events: {
		'click #button': 'queryAPI'
	},

	initialize: function() {
		_.bindAll(this, 'queryAPI');
	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );

		return this;
	},

	queryAPI: function() {
		var queryTerm = this.$('#query').val().trim();
		console.log(el);
	}

});