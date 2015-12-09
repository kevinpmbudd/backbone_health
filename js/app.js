var app = app || {};

$(function(){

    $('input').keyup(function(e){
        if(e.keyCode == 13){
            $(this).trigger('enter');
        }
    });

    new app.AppView();

    // app.Queries.create({ name: 'hello', calories: 100 });
    // app.Queries.create({ name: 'hello', calories: 100 });
    // app.Queries.create({ name: 'hello', calories: 100 });
    // app.Queries.create({ name: 'hello', calories: 100 });
    // app.Queries.create({ name: 'hello', calories: 100 });
    // app.Queries.create({ name: 'hello', calories: 100 });
    // app.Queries.create({ name: 'hello', calories: 100 });
    // app.Queries.create({ name: 'hello', calories: 100 });

});