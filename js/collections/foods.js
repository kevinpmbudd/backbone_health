var app = app || {};

// Food Collection

var FoodList = Backbone.Collection.extend({

	model: app.Food,

	url: '/foods'

});

app.Foods = new FoodList();
