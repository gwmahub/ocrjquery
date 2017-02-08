$(function(){
    $('#displayProvs').click(function(){
        $('#proverbes').html('<img src="assets/loading.gif" />');
        var param = 'l=' + $('#ref').val();
        $('#proverbes').load('proverbes.php', param, function(){
            console.log('OK !');
       });
    });

    $('#displayProvsAjax').click(function(){
        $.ajax({
            type: 'GET',
            url: 'proverbes.php',
            data: 'l=' + $('#ref').val(),
            success: function(data){$('#proverbes').append(data);},
            error: function(){alert('Erreur')},
            timeout: 3000
        });
    });
});