$(function(){

    $('#envoyer').click(function(){
        $.ajax({
            type: 'POST',
            url: 'chat.php',
            data: {nom:$('#nom').val(),message:$('#message').val()},
            success: function(){afficheConversation(); msgCleaner();},
            error: function(){alert('Erreur dans la requête')},
            timeout: 3000
        });

    });

    function afficheConversation(){
        $('#conversation').load('ressources/chatdata.htm');
    }

    function msgCleaner(){
        $('#message').val('');
        $('#message').focus();
    }

});