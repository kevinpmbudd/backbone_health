var app = app || {};


var FoodsFirebaseList = Backbone.Firebase.Collection.extend({

  model: app.Food,

  url: "https://scorching-heat-842.firebaseio.com/foods",

  totals: function () {
		var calories = 0;

		this.each(function ( food ) {
			// console.log(food);
			calories += food.attributes.calories;
		});

		return calories;
	}

});

app.FoodsFirebase = new FoodsFirebaseList();
