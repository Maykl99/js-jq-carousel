$(document).ready(function(){
    $('.nav').click(function(){
        nav();
    })
});

function nav(){
    var nav=$('.nav i.active');
    nav.removeClass('active').next().addClass('active');
    if(nav.hasClass('last')){
        $('.nav i.first').addClass('active');
    }else{
        nav.next().addClass('active');
    }
}