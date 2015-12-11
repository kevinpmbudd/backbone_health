var app = app || {};

// Query Collection

var QueryFirebaseList = Backbone.Firebase.Collection.extend({

	model: app.Food,

	url: "https://scorching-heat-842.firebaseio.com/query"

});

app.QueryFirebase = new QueryFirebaseList();