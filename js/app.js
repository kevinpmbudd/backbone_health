var app = app || {};

$(function(){

    $('input').keyup(function(e){
        if(e.keyCode == 13){
            $(this).trigger('enter');
        }
    });

    new app.AppView();

});