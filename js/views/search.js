var app = app || {};

// Search Result Item View

app.SearchView = Backbone.View.extend({

	tagName: 'li',

	template: _.template( $('#search-item-template').html()),

	events: {
		'click .add': 'addToFoods'
	},

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );

		return this;
	},

	addToFoods: function() {
		var item_name = this.model.attributes.name;
		var item_calories = this.model.attributes.calories;
		var $qty = this.$('#number').val();

		app.FoodsFirebase.create({ name: item_name, calories: item_calories, quantity: $qty });
		$('#totals').text(app.FoodsFirebase.totals());
		$('#query').val("");

		console.log($qty);

		app.QueryFirebase.reset();
	}

});