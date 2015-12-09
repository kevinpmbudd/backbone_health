var app = app || {};

// Search Result Item View

app.SearchView = Backbone.View.extend({

	tagName: 'li',

	template: _.template( $('#food-item-template').html()),

	events: {
		'dblclick label': 'edit'
	},

	initialize: function() {
	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );

		return this;
	}

});