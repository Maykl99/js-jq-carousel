$(document).ready(function(){
    $('.next').click(function(){
        nextImg();
    });

    $('.prev').click(function(){
        prevImg();
    });
});


// funzioni
function nextImg(){
    var activeImg=$('.img-container .active');
    activeImg.removeClass('active').next().addClass('active');
    if(activeImg.hasClass('close')){
        $('.img-container .first').addClass('active');
    }else{
        activeImg.next().addClass('active');
    }
}

function prevImg(){
    var activeImg=$('.img-container .active');
    activeImg.removeClass('active').next().addClass('active');
    if(activeImg.hasClass('close')){
        $('.img-container .first').addClass('active');
    }else{
        activeImg.next().addClass('active');
    }
}
