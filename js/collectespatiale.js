$(function(){
    var stopDetection = 0;
    $(document).keydown(function(e){
        if(e.which == 39) // Droite
        {
            posX = parseInt($('#soucoupe').css('left'));
            if(posX < 470){
                $('#soucoupe').css('left', posX+30);
            }
        }
        if(e.which == 37) // Gauche
        {
            posX = parseInt($('#soucoupe').css('left'));
            if(posX > 20){
                $('#soucoupe').css('left', posX-30);
            }
        }

        if(e.which == 40) // Bas
        {
            posY = parseInt($('#soucoupe').css('top'));
            if(posY < 230){
                $('#soucoupe').css('top', posY+30);
            }
        }

        if(e.which == 38) // Haut
        {
            posY = parseInt($('#soucoupe').css('top'));
            if(posY > 20){
                $('#soucoupe').css('top', posY-30);
            }
        }

        if(e.which == 36) // Haut et gauche
        {
            posX = parseInt($('#soucoupe').css('left'));
            posY = parseInt($('#soucoupe').css('top'));
            if(posX > 20 && posY > 20){
                $('#soucoupe').css('left', posX-30).css('top', posY-30);
            }
        }

        if(e.which == 33) // Haut et droite
        {
            posX = parseInt($('#soucoupe').css('left'));
            posY = parseInt($('#soucoupe').css('top'));
            if(posX < 470 && posY > 20){
                $('#soucoupe').css('left', posX+30).css('top', posY-30);
            }
        }

        if(e.which == 35) // Bas et gauche
        {
            posX = parseInt($('#soucoupe').css('left'));
            posY = parseInt($('#soucoupe').css('top'));
            if(posX > 20 && posY < 230){
                $('#soucoupe').css('left', posX-30).css('top', posY+30);
            }
        }

        if(e.which == 34) // Bas et droite
        {
            posX = parseInt($('#soucoupe').css('left'));
            posY = parseInt($('#soucoupe').css('top'));
            if(posX < 470 && posY < 230){
                $('#soucoupe').css('left', posX+30).css('top', posY+30);
            }
        }

    });

    function afficheElements(){
        var elemX = Math.floor(Math.random()*500)+20;
        var elemY = Math.floor(Math.random()*300)+20;
        var elemType = Math.floor(Math.random()*2);

        if(elemType == 0){
            $('#vache').css('left',elemX).css('top',elemY);
            $('#vache').show();
            $('#vn').css('display','none');
        }else{
            $('#vn').css('left',elemX).css('top',elemY);
            $('#vn').show();
            $('#vache').css('display','none');
        }
    }

    function collisions()
    {
        posX = parseInt($('#soucoupe').css('left'));
        posY = parseInt($('#soucoupe').css('top'));
        if ($('#vache').css('display') == 'none')
        {
            elemType = 'vn';
            elemX = parseInt($('#vn').css('left'));
            elemY = parseInt($('#vn').css('top'));
        }
        else
        {
            elemType = 'vache';
            elemX = parseInt($('#vache').css('left'));
            elemY = parseInt($('#vache').css('top'));
        }
        if ((elemX>posX-20) && (elemX<(posX+125-50+20)) && (elemY>posY-20) && (elemY<(posY+177-116+20)) && (stopDetection == 0))
        {
            stopDetection = 1;
            if (elemType=='vache')
            {
                var nbBon = parseInt($('#info1').text())+1;
                $('#info1').text(nbBon);
                var score = parseInt($('#info3').text())+5;
                $('#info3').text(score);
                $('#vache').css('display', 'none');
            }
            else
            {
                var nbMauvais = parseInt($('#info2').text())+1;
                $('#info2').text(nbMauvais);
                var score = parseInt($('#info3').text())-5;
                $('#info3').text(score);
                $('#vn').css('display', 'none');
            }
        }
    }

    setInterval(afficheElements, 2000);
    setInterval(collisions, 200);

});