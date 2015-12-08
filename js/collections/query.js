var app = app || {};

// Query Collection

var QueryList = Backbone.Collection.extend({

	model: app.Food,

	url: '/queries'

});

app.Queries = new QueryList();