$(function(){
    // New form elements set displayed if click on one of the 3 main buttons
    var blocNewLabelHtml        = '<div id="BlocNewLabel" class="formCreator"><p><label>Texte du label :</label><input name="inputNewLabel" type="text" /><input type="submit" value="OK" class="newFormElOk" /><input type="button" class="formCreatorRemover" value="Annuler" /></p><div id="userHelpMsg"></div></div>';
    var blocNewTextInputHtml    = '<div id="BlocNewTextInput" class="formCreator"><p><label>Id de la zone de texte  :</label><input name="inputNewIdText" type="text" /><input type="submit" value="OK" class="newFormElOk" /><input type="button" class="formCreatorRemover" value="Annuler" /></p><div id="userHelpMsg"></div></div>';
    var blocNewButtonHtml       = '<div id="BlocNewButton" class="formCreator"><p><label>Texte du bouton  :</label><input name="inputNewButtonValue" type="text" /><input type="submit" value="OK" class="newFormElOk" /><input type="button" class="formCreatorRemover" value="Annuler" /></p><div id="userHelpMsg"></div></div>';
    $('<br /><br /><hr />').insertAfter($('#droite button:last'));
    $('<form id="myForm" action="sendingformmessage.html" method="post">').appendTo('#gauche');
    // Specially for Firefox which keep this attribute even if the user refresh the page
    $('#droite button').removeAttr('disabled');

    // Applies the starting class. See style.css file for more info.
    $('button:contains("Label")').addClass('currentButton');
    $('button:contains("Bouton")').addClass('buttonBouton');
    /**
     * Click event on the main button Label / Zone de texte and Button on the top right side
     */
    $('#droite button').on('click',function(){
        // Disabling of the main buttons until the user will create the new element or start again in case of error
        $('#droite button').attr('disabled','disabled');
        /***************
         * Label
         ***************/
        // Catch the button with "btnLabel" id
        if($(this).attr('id') === "btnLabel") {
            // Test if the bloc already exists to avoid creating multiple elements
            if (!$('.formCreator').length) {
                $('hr').after(blocNewLabelHtml);
                $('#userHelpMsg').load('userHelpFormMsg.html #labelmsg');
                // If not, add the new set in the right side after clicking on the button
                $('#BlocNewLabel').hide().appendTo('#droite').fadeIn('slow');
                $('#BlocNewLabel label, #BlocNewLabel input').css('margin-right','10px');
                $('input[name="inputNewLabel"]').focus();
                // Click event for creation of the new element on the LEFT side
                $('.newFormElOk').on('click', function(){
                    if($('input[name="inputNewLabel"]').val() !== ""){
                        // First letter in uppercase
                        var labelText = $('input[name="inputNewLabel"]').val().substr(0,1).toUpperCase() + $('input[name="inputNewLabel"]').val().substr(1);
                        // Label creation in the left side
                        $('<p id="'+$('input[name="inputNewLabel"]').val()+'"><span style="padding: 10px;">' + labelText + '</span></p>').appendTo('#gauche form');
                        $('.formCreator').fadeOut('slow',function(){return $(this).remove()});
                        $('#droite button').removeAttr('disabled');
                        $('#btnLabel').removeClass('currentButton');
                        $('#btnGiveIdAndName').addClass('currentButton');
                    }else{
                        $('input[name="inputNewLabel"]').css('background-color','#ff9999').attr('placeholder','!! Empty field !!');
                    }
                });
                // Click event on "Annuler" button to delete the new elements set
                $('.formCreatorRemover').on('click', function(){
                        $('.formCreator').fadeOut('slow',function(){
                        $(this).remove();
                    });
                    $('#droite button').removeAttr('disabled');
                });
            }
        }
        /**
         * Zone de texte
         */
        // Catch the button with "btnGiveIdAndName" id
        if($(this).attr('id') === "btnGiveIdAndName"){
            // Test if the bloc already exists to avoid creating multiple elements
            if (!$('.formCreator').length) {
                $('hr').after(blocNewTextInputHtml);
                $('#userHelpMsg').load('userHelpFormMsg.html #zonedetxtmsg');

                $('#BlocNewTextInput').hide().appendTo('#droite').fadeIn('slow');
                $('#BlocNewTextInput label, #BlocNewTextInput input').css('margin-right','10px');
                $('input[name="inputNewIdText"]').focus();
                // Click event on the .formCreatorRemover button to delete the new elements set
                $('.formCreatorRemover').on('click', function(){$('.formCreator').fadeOut('slow',function(){ $(this).remove();}); });
                $('.newFormElOk').on('click', function(){
                    if($('input[name="inputNewIdText"]').val() !== ""){
                        // New input creation and inserting on the left side after the last span wich has been created
                        $('<input style="margin: 10px;" type="text" id="' + $('input[name="inputNewIdText"]').val() + '" name="'+$('input[name="inputNewIdText"]').val()+'" />').insertAfter('#gauche span:last');
                        // Button created to delete the current p if user makes an error
                        $('<button class="deleterRow"> X </button>').insertAfter('input[id="' + $('input[name="inputNewIdText"]').val() + '"]');
                        // "Click" event attached to all buttons which delete the current paragraph on the left side
                        $('.deleterRow').each(function(){$(this).on('click', function(){$(this).closest('p').remove(); }); });
                        //  Form elements set removing in the right side
                        $('.formCreator').fadeOut('slow',function(){return $(this).remove()});

                        $('#droite button').removeAttr('disabled');

                        $('#btnGiveIdAndName').removeClass('currentButton');
                        $('#btnLabel').addClass('currentButton');
                    }else{
                        $('input[name="inputNewIdText"]').css('background-color','#ff9999').attr('placeholder','!! Empty field !!');
                    }
                });
                // Click event on "Ok" or "Annuler"
                $('.formCreatorRemover').on('click', function(){
                    // Main buttons reactivation
                    $('.formCreator').fadeOut('slow',function(){return $(this).remove()});
                    $('#droite button').removeAttr('disabled');
                });
            }
        }
        /**
         * Button
         */
        // Catch the button with "Bouton" value
        if($(this).attr('id') == "btnButton"){
            // Test if the bloc already exists to avoid the multiple displaying of the same elements
            if (!$('.formCreator').length) {
                $('hr').after(blocNewButtonHtml);
                $('#userHelpMsg').load('userHelpFormMsg.html #buttonmsg');

                $('#BlocNewButton').hide().appendTo('#droite').fadeIn('slow');
                $('#BlocNewButton label, #BlocNewButton input').css('margin-right','10px');
                $('input[name="inputNewButtonValue"]').focus();
                // Click event on the .formCreatorRemover button to delete the new elements set
                $('.formCreatorRemover').on('click', function(){ $('.formCreator').fadeOut('slow',function(){ $(this).remove(); }); });
                $('.newFormElOk').on('click', function(){
                    if($('input[name="inputNewButtonValue"]').val() !== ""){
                        // First letter in uppercase
                        var buttonText = $('input[name="inputNewButtonValue"]').val().substr(0,1).toUpperCase() + $('input[name="inputNewButtonValue"]').val().substr(1);
                        // New bloc creation and insertion on the left side
                        $('<p><button type="submit" style="padding: 10px;">' + buttonText + '</button></p>').insertAfter('#gauche p:last');
                        // Adding of the remover button
                        var deleterSubmiBut = $('<button> X </button>').appendTo('#gauche p:last');
                        deleterSubmiBut.click(function(){
                            $('#gauche p:last').remove();
                        });
                        $('.formCreator').fadeOut('slow',function(){return $(this).remove()});
                        $('#droite button').removeAttr('disabled');
                    }else{
                        $('input[name="inputNewButtonValue"]').css('background-color','#ff9999').attr('placeholder','!! Empty field !!');
                    }
                });
                // Click event on "Ok" or "Annuler"
                $('.formCreatorRemover').on('click', function(){
                    //  Form elements set removing in the right side
                    $('.formCreator').fadeOut('slow',function(){return $(this).remove()});
                    // Main buttons reactivation
                    $('#droite button').removeAttr('disabled');
                });
            }
        }
    });

});

