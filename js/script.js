$(document).ready(function(){
    $('.nav i').click(function(){
        //navClick();
        var cerchioAttivo=$('.nav i.first');
        cerchioAttivo.removeClass('active');
        
        $(this).addClass('active');
        
        
        var click=$(this).index(); //individuo l'indice/index del pallino cliccato
        console.log(click);
        var img=$('.img-container img').eq(click);  // individuo l'immagine con lo stesso index del pallino cliccato
        $('.img-container img.active').removeClass('active');
        img.addClass('active');

    });

    $('.prev').click(function(){
        prevImg();
    });

    $('.next').click(function(){
        nextImg();
    });

});



// funzioni
//-> prossima immagine +1
function nextImg(){

    var activeImg=$('.img-container .active');

    var cerchioAttivo=$('.nav i.active');
    cerchioAttivo.removeClass('active');

    if(activeImg.hasClass('close')){

        activeImg.removeClass('active');
        $('.img-container .first').addClass('active');
        $('.nav i.first').addClass('active');

    }else{

        activeImg.next().addClass('active');
        activeImg.removeClass('active').next().addClass('active');
        cerchioAttivo.next().addClass('active');
    }

    
}

//-> immagine prima -1
function prevImg(){ 

    var activeImg=$('.img-container .active');

    var cerchioAttivo=$('.nav i.active');
    cerchioAttivo.removeClass('active');

    if(activeImg.hasClass('first')){

        activeImg.removeClass('active');
        $('.img-container img.close').addClass('active');
        $('.nav i.last').addClass('active');

    }else{

        activeImg.prev().addClass('active');
        activeImg.removeClass('active').prev().addClass('active');
        cerchioAttivo.prev().addClass('active');
    }
}




