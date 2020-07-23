$(document).ready(function(){
    $('.nav i').click(function(){
        navClick();
    });

    $('.prev').click(function(){
        prevImg();
    });

    $('.next').click(function(){
        nextImg();
    });

});


// funzioni
function nextImg(){
    var activeImg=$('.img-container .active');
   /*  var cerchioAttivo=$('.nav i.active');
    cerchioAttivo.removeClass('active'); */

    activeImg.removeClass('active').next().addClass('active');
    if(activeImg.hasClass('close')){
        $('.img-container .first').addClass('active');
        //$('.nav i.first').addClass('active');
    }else{
        activeImg.next().addClass('active');
        //cerchioAttivo.next().addClass('active');
    }
}

function prevImg(){ 
    var activeImg=$('.img-container .active');
    //var cerchioAttivo=$('.nav i.active');
    //cerchioAttivo.removeClass('active');

    activeImg.removeClass('active').next().addClass('active');
    if(activeImg.hasClass('close')){
        $('.img-container .first').addClass('active');
        //$('.nav i.first').addClass('active');
    }else{
        activeImg.next().addClass('active');
        //cerchioAttivo.next().addClass('active');
    }
}


// punto il cerchio deve corrispondere all'immagine
function navClick(){ // funzione mostra img
    var activeImage=$('.img-container .active'); // seleziono il contenitore che contiene l'img con classe .active
    var cerchio=$('.nav i.active'); // seleziono il contenitore nav che contiene il tag i con la classe .active
    activeImage.removeClass('active').next().addClass('active'); // alla prima immagine tolgo la classe /// poi l'assegno al suo fratello
    if(activeImag.hasClass('close') || cerchio.hasClass('last')){ // SE il tag img che contiene .active ha anche la classe .close AND il tag i che ha la classe .active ha anche la classe .last
        $('.img-container .first').addClass('active'); // esegui questo, cioè il tag img che ha la classe .first riassume la classe .active
        $('nav i.first').addClass('active');   // esegui questo, cioè il tag i che ha la classe .first riassume la classe .active
    }else{
        activeImage.next().addClass('active'); //l'img con la classe .active lo passa al suo fratello 
        cerchio.next().addClass('active'); // la i con la classe .active lo passa al suo
    }

}






