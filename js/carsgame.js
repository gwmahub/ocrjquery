// Test collision
var ok = 1;

function deplace(){
    // Animation voiture rouge
    $('#vr').animate(
        {top:'-=600'},
        2250,
        'linear',
        function(){
            var vrX = Math.floor(Math.random()*194)+70;
            var vrY = 400;
            $('#vr').css('top',vrY);
            $('#vr').css('left',vrX);

            // Test collision
            ok = 1;
        }
    );

    // Animation route
    $('.fond').animate(
        {top:'-=360'},
        1000,
        'linear',
        function(){
            $('.fond').css('top',0);
            deplace();
        }
    );

} // END function deplace()

// Gestion déplacement latéraux voiture jaune
$(document).keydown(function(e){
    if(e.which == 39){
        var vjX = parseInt($('#vj').css('left'));
        if(vjX < 280){
            $('#vj').css('left', vjX+30);
        }
    }
    if(e.which == 37){
        var vjX = parseInt($('#vj').css('left'));
        if(vjX > 70){
            $('#vj').css('left', vjX-30);
        }
    }
});

// Gestion des collision
function collision(){
    vjX = parseInt($('#vj').css('left'));
    vrX = parseInt($('#vr').css('left'));
    vjY = 50;
    vrY = parseInt($('#vr').css('top'));
    // Test collision par la droite
    if( (vrX > vjX) && (vrX < (vjX+66)) && (vrY > vjY) && (vrY < (vjY+150) ) && (ok == 1)
    // OU collision par la gauche
        ||(vjX > vrX) && (vjX < (vrX+66)) && (vrY > vjY) && (vrY < (vjY+150) ) && (ok == 1)
    ){
        $('#son')[0].play();
        var collision = parseInt($('#info').text()) + 1 ;
        $('#info').text(collision);
        ok = 0;
    }

}

// deplace();
// setInterval(collision, 20);
