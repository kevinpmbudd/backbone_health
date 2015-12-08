var app = app || {};

$(function(){

    new app.AppView();

    var taco = app.Queries.create({ name: 'taco', calories: 100});
    var tamale = app.Queries.create({ name: 'tamale', calories: 125});
    var chips = app.Queries.create({ name: 'chips', calories: 75});

});