var app = app || {};

app.DataPoint = Backbone.Model.extend({

	initialize: function(value) {
		this.set(value);
	}

});