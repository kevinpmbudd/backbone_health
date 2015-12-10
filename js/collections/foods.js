var app = app || {};

// Food Collection

var FoodList = Backbone.Collection.extend({

	model: app.Food,

	url: '/foods',

	totals: function () {
		var calories = 0;

		this.each(function ( food ) {
			console.log(food);
			calories += food.attributes.calories;
		});

		return calories;
	}

});

app.Foods = new FoodList();
