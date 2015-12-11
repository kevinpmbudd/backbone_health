var app = app || {};

// Food Item View

app.FoodView = Backbone.View.extend({

	tagName: 'li',

	template: _.template( $('#food-item-template').html()),

	events: {
		 'click .remove': 'removeFood'
	},

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );

		return this;
	},

	removeFood: function() {
		this.model.destroy();

		this.remove();

		$('#totals').text(app.FoodsFirebase.totals());
	}

});