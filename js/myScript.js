
// SELECTEURS DE BASE ---
$('body').css('fontSize', '15px').css('lineHeight', '1.25em');
$('.text').css('color','lightGreen');

//alert($('li[class="impair"]').length);
$('.pseudoSelecteur > p:even').css('color', 'green');
$('.pseudoSelecteur > p:lt(2)').css('text-decoration', 'underline');
$('.pseudoSelecteur > p:odd').css('font-weight', 'bold');
$('.pseudoSelecteur > p:nth-child(4)').css('background', '#ececec');

$('.selectParticulier > :header').css('background', 'rgba(0,174,239,0.5)');
$('.selectParticulier > :header:gt(2)').hide();

// SELECTEURS FORMULAIRES ---
$(':input[name="nom"]').focus();
$(':focus').css('background', 'yellow');

//SELECTEURS > VALEURS DE FORMULAIRES
var myVal   = $('#selectFormValue > :radio:checked').attr({id:'H',name:'sexe'}).val();
var myVal2  = $('#selectFormValue > :input[name="nom2"]').val('Jean').css('color', 'rgba(0,174,239,0.5)');
//alert(myVal2);

// text() et html()
var pText       = $('#textEtHtml > div > p');
var pLastText   = $('#textEtHtml > p:last');

//pText.text(function(index,encours){alert('Paragraphe ' + (index+1)+ ' : ' + encours);});
$('#textEtHtml > div > p:first').html('<b>Rem.: contrairement à la méthode text(), html() ne balaie pas tous les éléments,' + pText + ' mais se contente du premier.</b>');

// SELECTEURS TABLEAUX ---
//alert($('#idTable').html());
typeof($('#idTable').html()) !== "undefined" ? $('tr:odd').css('background','lightGrey') : $('tr:even').css('background','lightBlue');


$('#insertHtml').html('Texte inséré dans le p de class insertHtml').css('color', '#000').css('backgroundColor', 'lightBlue');

//POSITION ET TAILLE DES ELEMENTS
var posparent = $('#parent').offset();
var posenfant = $('#enfant').position();
//posparent.top = 400;
//posparent.left = 650;
$('#parent').offset(posparent);
//$('#resultat').html('<b>Position du parent:</b>' + ' y ='  + posparent.top + ' et x = ' + posparent.left);
//$('#resultatEnfant').html('<b>Position de l\'enfant:</b>' + ' y ='  + posenfant.top + ' et x = ' + posenfant.left);
var the_size = $('#test_size');
var dimensions = 'width = ' + the_size.width() + '<br />height = ' + the_size.height() + '<br />innerWidth = ' + the_size.innerWidth()
        + '<br />outerWidth = ' + the_size.outerWidth() + '<br />outerWidth(true) = ' + the_size.outerWidth(true) +
        '<br />height = ' + the_size.height() + '<br />innerHeight = ' + the_size.innerHeight() + '<br />outerHeight = ' + the_size.outerHeight()
        + '<br />outerHeight(true) = ' + the_size.outerHeight(true);
the_size.width('300px');
the_size.height('200px');
$('#resultatSize').html(dimensions);

// INSERTION DE DONNEES / CONTENUS DANS LES ELEMENTS
var divData = $('#assocDataToElem');
//$.removeData('mesValeurs');
$.data(divData, 'mesValeurs', {premier:'bonjour', deuxieme:12,troisieme:'http://www.gwma.be'});
var val1 = $.data(divData, 'mesValeurs').premier;
var val2 = $.data(divData, 'mesValeurs').deuxieme;
var val3 = $.data(divData, 'mesValeurs').troisieme;
$('#sp1').text(val1);
$('#sp2').text(val2);
$('#sp3').text(val3);

var myAppendText = ' un complément de contenu inséré avec append() ';
var myPrependText = ' un complément de contenu inséré avec prepend() ';
var myBeforeText = ' <hr /> &lt;hr /&gt;&nbsp;before() ';
var myAfterText = '&lt;hr /&gt;&nbsp;after() <hr /> ';

//contenu inséré au début du p, APRES le contenu déjà existant
$('#testAppendPrepend > p:first').addClass('text-success').css('font-weight', 'bolder').append(myAppendText);

//contenu inséré au début du p, AVANT le contenu déjà existant
$('#testAppendPrepend > p:first').prepend(myPrependText);

//contenu inséré AVANT le p
$('#testAppendPrepend > p:first').before(myBeforeText);

//contenu inséré APRES le p
$('#testAppendPrepend > p:first').after(myAfterText);


//REMPLACEMENT D'ELEMENTS

// Rem.: each et $(this) sinon répétition sur chaque élément -> Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet !!!
function replaceElemets(){
    $('#testReplaceWith h3').each(
        function(){
            var myH3 = $(this);
            myH3.replaceWith('<h2>' + myH3.text() + '</h2>');
            }
    );
}
replaceElemets();



// INSERTION D'ELEMENTS
// Attention invertion : d'abord l'élément / contenu à insérer puis l'élément visé !!
// Attention prependTo et appendTo ajoute après balise ouvrante ou avant la balise fermante de l'élément visé
//  -> <ul> <p>Mon paragraphe</p> <li>contenu... </li><li>contenu... </li> <p>Mon paragraphe</p> </ul>

// Insertion de l'élément / contenu au début, dans le tag visé.
$('<p>Mon paragraphe <b>inséré DANS le ul <u>avant</u> le PREMIER li</b> avec prependTo().</p>').prependTo('#test_ul_InsertElements');

// Insertion de l'élément / contenu à la fin, dans le tag visé.
$('<p>Mon paragraphe <b>inséré DANS le ul <u>après</u> le DERNIER li</b> avec appendTo().</p>').appendTo('#test_ul_InsertElements');

// Insertion de l'élément / contenu AVANT l'élément visé
$('<li>Mon élément li inséré avec insertBefore().</li>').addClass('list-group-item text-success').insertBefore('#testInsertElements ul li:nth-child(3)');

// Insertion de l'élément / contenu APRES l'élément visé
$('<hr />').insertAfter('#testInsertElements h3');

// DEPLACEMENT DE CONTENUS / ELEMENTS
var p_1 = $('#un');
$('#testMovingElements #deux').after(p_1);

// CLONAGE D'ELEMENTS / CONTENUS
$('#testMovingElements #un').clone().insertAfter($('#testMovingElements h3:first'));

// ENTOURER DES ELEMENTS
//La méthode wrap() permet d'entourer un élément par un ou plusieurs autres éléments créés à la volée. 
//Ces éléments peuvent être du code HTML, un sélecteur, un élément jQuery ou un élément du DOM. 
//Quelle que soit leur nature, ils encadrent les éléments à entourer

//entoure dans l'élément visé
$('#testEncloseElements li').wrapInner('<i><b></b></i>');

//entoure l'élément visé
$('#testEncloseElements ul').wrap('<p></p>');

//entoure tous les éléments visés
$('#testEncloseElements p').wrapAll('<div class ="col-xs-12"></div>');

// SUPPRIMER DES ELEMENTS
$('#testRemoveElements h2.h2ToRemove').remove();
$('#testRemoveElements p').remove(':contains("second")');


// TP: Questionnaire interactif en jQuery
// Mise en forme des blocs
$('.question').each(function(){
    $(this).addClass('row bg-success').css('marginBottom','10px');
});
$('div.texte').addClass('col-xs-10');
$('div.question img').addClass('pull-right img-responsive').css('marginTop','5%').css('marginRight','2%');


// Cacher les réponses
$('.reponse').hide();
// Mise en forme du lien
$('#testAnswers').wrap('<p class="col-xs-2 text-center alert alert-info"></p>');

// Fonctionnalités au hover
$('#testAnswers').hover(
        //fonction au survol du lien
        function(){
            $('.reponse').fadeIn(500);
            // Q1
            if($(':radio[id="r1"]:checked').val()){
                $('#reponse1').addClass('text-success');
                $('#img1').attr('src','assets/bon.png');
            }else{
                $('#reponse1').addClass('text-danger');
                $('#img1').attr('src','assets/mauvais.png');
            }
            
            //Q2
            if($(':radio[id="r4"]:checked').val()){
                $('#reponse2').addClass('text-success');
                $('#img2').attr('src','assets/bon.png');
            }else{
                $('#reponse2').addClass('text-danger');
                $('#img2').attr('src','assets/mauvais.png');
            }
            
            //Q3
            if($(':radio[id="r8"]:checked').val()){
                $('#reponse3').addClass('text-success');
                $('#img3').attr('src','assets/bon.png');
            }else{
                $('#reponse3').addClass('text-danger');
                $('#img3').attr('src','assets/mauvais.png');
            }        
        },
        //fonction après le survol du lien
        function(){
            $('.reponse').fadeOut(250);
            $('.imgResponse').attr('src','assets/question.png');
        }
        
);


/*================================
 * LA GESTION EVENEMENTIELLE 
 * ===============================
 */

/*
 * Clics et positions de la souris
 */
$('#testMoveImg').css('height','192px').css('width','256px');


var largeur = ($(window).width()) - 50;
var hauteur = ($(window).height()) - 50;
//on définit un objet jQuery par lequel les coordonnées de l'image pourront être modifiées
var p = $('#testMoveImg').offset();
//modification des coordonnées de l'image
//p.top = 256;
//p.left = 192;

$('#testMoveImg').offset(p);

$('#testMoveImg').mouseout(
        
    function(){
        x = Math.floor(Math.random()*largeur);
        y = Math.floor(Math.random()*hauteur);
        
        var p = $('#testMoveImg').offset();
        p.top = x;
        p.left = y;
        
        $('#testMoveImg').offset(p);
    }
);

/*
 * La méthode scroll -> désactivée a cause des alert()
 */

/*
 * $('#testScroll');

$(function(){
  $('#testScroll').scroll(
        function(){
            alert('Utilisation de la roulette dans la balise <div>');
        }
    );
    $(window).scroll(
        function(){
            alert('Utilisation de la roulette dans le document');
        }
    );
});
*/


/*
 * which et type
 */

$('#testBlocWichAndType');
$('#testImgWichAndType');
$('#rapportTestWichType');

$(function(){
    $('#testImgWichAndType').mousedown(
            function(e){
                $('#rapportTestWichType').html("<b>Evénement</b> : " + e.type + " <b>Bouton pressé</b> : " + e.which);
            }
        );
});

/*
 * LE CLAVIER
 */
$('#testClavier').css('width','100px').css('height','100px').css('background','white');


$(function(){
    $('#testClavierTxt').keydown(
        function(){
            $('#testClavier').css('background','green');
        }
    );
    $('#testClavierTxt').keyup(
        function(){
            $('#testClavier').css('background','blue');
        }
    );
});

$(function(){
    $('#testClavier2').keypress(
        function(e){
            var c = String.fromCharCode(e.which); //le caractère saisi
            $('#testClavierTxt2').text(e.which + " / " + c); // le numéro du caractère + le caractère saisi
        }    
    );
});

$(function(){
    $('.f').focus(function(){
                    $('#testclavierFocusResultat').text($(this).attr('id')); // affichage au focus
                }
            );
    $('.f').blur(function(){
                $('#testclavierFocusResultat2').text($(this).attr('id'));// affichage au blur
            }
        );
});

$(function(){
    $('#focusInOutForm fieldset').focusin(function(){
        $('#focusInOutForm fieldset').css('background','green');
    });
    
    $('#focusInOutForm fieldset').focusout(function(){
        $('#focusInOutForm fieldset').css('background','white');
    });    
});

// resize()

// mémorisation et affichage dynamique de la taille de la fenêtre -> utile pour le responsive
$(function(){
    $(window).resize(function(){
        //affichage de la taille dans le span
        $('#resultat').text(
                    "Taille de la fenêtre : " + "L: " + $(window).width() + "H: " + $(window).height()
                );
    });
});

// change()
$(function(){
    $('select').change(function(){
        $('#resultat').text(
                "Vous avez sélectionné : " + $(this).val() + "."
                );
    });
});

/*
 * LES PAGES
 */

/*
 *     alert("Le DOM est chargé");
    $(window).load(function(){
        alert("La page est chargée");
    });
    
    $(window).unload(function(){
        alert("Changement de page !");
    });
 */
$(function(){
    $(window).load(function(){
        $('#image1').load(function(){
            alert("bonjour");
        });
    });
});

/*
 * Evénements personnalisés
 */

// on() off()
// -> Limiter l'écriture en associant une même méthode événementielle à plusieurs éléments ;
// -> Relier plusieurs méthodes événementielles à un élément en une seule instruction ;
// -> Désactiver une méthode événementielle précédemment attachée avec la méthode on() ;
// -> Relier plusieurs méthodes événementielles entre elles. Par la suite, vous pourrez toutes les déclencher, ou toutes les désactiver en une seule instruction jQuery.


// ('img').on('mouseenter mousemove', function() { … });
// $('img.grand').on({mouseenter:traitement1, mousemove:traitement2});


// Désactiver une méthode de gestion événementielle


$(function(){
    function traitement(){
        alert("Image cliquée !");
    }
    $('#activer').on('click', function(){
        $('#image1').click(traitement);
    });
    $('#desactiver').on('click', function(){
        $('#image1').off('click', traitement);
    });    
});


//Cet exemple demande à l'utilisateur de cliquer sur une image. Un message est alors affiché dans une balise <span>. 
//L'utilisateur peut également cliquer sur un bouton. 
//Dans ce cas, c'est la procédure événementielle liée au clic sur le bouton qui déclenche l'affichage du message.
$(function(){
    $('#imgClick').click(function(event, texte){
        if(texte === undefined){texte = "par Vous !";}
        $('#message').text("L'image à été cliquée " + texte).fadeIn(2000).fadeOut(2000);
    });
    
    $('#btnClick').click(function(event, texte){
        if(texte === undefined){texte = "par jQuery !!!";}
        $('#imgClick').trigger('click', texte);
    });
});

/*
 * Délégation d'événement
 */

$(function(){
    var elemBase = $('#elemBase').css('width','100px').css('height', '100px').css('background','lightblue').css('margin','20px');
    
    $('#elemBase').on('click','div',function(){
        $(this).after('<div>Ce div a les mêmes caractéristiques que son parent !</div>');
    });
});

/*
 * Apparition et disparition


  $(function() {
    $('tr:even').css('background','yellow');
    //$('td').css('width','200px');
    //$('td').css('text-align','center');
    
    $('#affiche').click(function() {
      $('tr:even').show('slow', 'linear');
    } ); 
    $('#cache').click(function() {
      $('tr:even').hide(1000, 'swing');
    });
  });
 */

// Animation avec un modèle de progression
 
// $('tr:even').show('slow', 'linear');
// $('tr:even').show('slow', 'swing'); -> par défaut
 
 
// Apparition/disparition en cascade

// show() and hide()

$(function(){
    // boutton apparaître
    $('#afficheImg').click(function(){
        //.first() permet de commencer par la 1ère image
        $('#blocDiplayHideElem img').first().show('slow',function showNextOne(){
            $(this).next('#blocDiplayHideElem img').show('slow', showNextOne);
        });
    });
    // boutton disparaître
    $('#cacheImg').click(function(){
        $('#blocDiplayHideElem img').first().hide('slow',function hideNextOne(){
            $(this).next('#blocDiplayHideElem img').hide('slow', hideNextOne);
        });
    });
});


// fadeIn(), fadeOut(), fadeTo() -> idem avec opacité en plus
$(function(){
    // boutton apparaître
    $('#afficheImgV2').click(function(){
        //.first() permet de commencer par la 1ère image
        $('#blocFadeInOutToElem img').first().fadeTo('slow',1,function showNextOne(){
            $(this).next('#blocFadeInOutToElem img').fadeTo('slow',1, showNextOne);
        });
    });
    // boutton disparaître
    $('#cacheImgV2').click(function(){
        $('#blocFadeInOutToElem img').first().fadeTo('slow',0.25,function hideNextOne(){
            $(this).next('#blocFadeInOutToElem img').fadeTo('slow',0.25, hideNextOne);
        });
    });
});

/*=========================
 * FILES D'ATTENTE ET TIMER
 * ========================
 */

// Les files d'attente jQuery

$('#enchainer');
$('#nePasEnchainer');
$('#executerEnMemeTemps');
$('#etatInitial');
$('#fdet');

$(function(){
    $('#enchainer').click(function(){
        $('#fdet').animate({'border-width':'100'},1500)
                .animate({'width':'-=100'},1500);
    });
    $('#nePasEnchainer').click(function(){
        $('#fdet').animate({'border-width':'100'},{queue:false, duration:1500})
                .animate({'width':'-=100'},1500);
    });
    $('#executerEnMemeTemps').click(function(){
        $('#fdet').animate({'border-width':'100','width':'-=100'},1500);
    });
    $('#etatInitial').click(function(){
        $('#fdet').css('border-width','2px', 'width','200px');
    });
});

// État de la file d'attente -> méthode queue() sans aucun argument

// Manipuler la file d'attente -> queue(), dequeue(), clearQueue()
$(function(){
    $('#ajouter').click(function(){
        $('#bon').toggle(5000)
                .queue(function(){
                    $('#mauvais').animate({left:'+=200'}, 'slow')
                    .animate({top:'+=200'},'slow')
                    .animate({left:'-=200'},'slow')
                    .animate({top:'-=200'},'slow');
                });
    });
    
    $('#annuler').click(function(){
        $('img').clearQueue();
    });
    
    $('#remplacer').click(function(){
        $('#mauvais').css('left','200').css('top','200');
        $('#mauvais').queue(function(){
            $(this).animate({top:'-=200'},'slow')
                    .animate({top:'+=200',left:'-=200'},'slow')
                    .animate({top:'-=200'},'slow');
            $(this).dequeue();
        });
    });
    
    $('#retour').click(function(){
        $('img').queue(function(){
           alert('Animation terminée');
        $(this).dequeue();
        });
    });
    
});

// Répéter une animation sans fin

$(function(){
   function bis(){
       $('#testBalle').animate({left:'+=200'},'slow')
               .animate({top:'+=200'},'slow')
               .animate({left:'-=200'},'slow')
               .animate({top:'-=200'},'slow',bis);
   };
   
   bis();
});
/*
$(function(){
    var blocTabSquareCol_div = $('#blocTabSquareCol td > div');
    blocTabSquareCol_div.each(index, element, function(){
        alert(typeof(index));
    });
    
});*/


/*
=========================================================================
                            TP 2: Mise en forme d'1 page web
=========================================================================
*/
$('#contenu'); // div
$('#couleur-fond'); // select
$('#texte'); // select
$('#police'); // select
$('#police-prem-phrase'); // select
$('#prem-car-phrases'); // select
$('mot'); // input text
$('#couleurMot'); // button

$(function(){
    //Modification de la couleur de fond en utilisant la valeur qui se trouve dans l'attribut « value »
    // de la balise <option> choisie.
    $('#couleur-fond').change(function(){
        var newBgColor = $('#couleur-fond option:selected').val();
        $('#contenu').css('background-color',newBgColor);
    });
    //Modification de l'attribut de tout le texte
    $('#texte').change(function(){
        var newFontStyle = $('#texte option:selected').val();
        //alert(newFontStyle); ok
            if(newFontStyle === "Souligne"){
                $('#contenu p').css('text-decoration', 'underline').css('font-weight', 'normal').css('font-style', 'normal');
            }else if(newFontStyle === "Gras"){
                $('#contenu p').css('font-weight', 'bold').css('font-style', 'normal').css('text-decoration', 'none');
            }else if(newFontStyle === "Italique"){
                $('#contenu p').css('font-style', 'italic').css('font-weight', 'normal').css('text-decoration', 'none');
            }else{
                $('#contenu p').css('font-weight', 'normal').css('font-style', 'normal').css('text-decoration', 'none');
            }
    });
    
    //Modification de la police de tout le texte
    $('#police').change(function(){
        var newPol = '"' + $('#police option:selected').val() + '"';
        //alert(newPol);
        $('#contenu p').css('font-family', newPol);
    });
    
    //Modification de la police de la première phrase
    $('#police-prem-phrase').change(function(){
        var newPol = '"' + $('#police-prem-phrase option:selected').val() + '"';
        //alert(newPol);
        $('#contenu p:first').css('font-family', newPol);
    });
    
//Modification des caractéristiques du premier caractère de chaque mot
/*    function capitaliseFirstLetters(s){
        return s.split(" ").map(function(w){ 
            return w.charAt(0).toUpperCase() + w.substr(1);
        }).join(" ");
    }
*/

    function changeFirstLetters(str){
        return str.split(" ").map(function(w){
            return w.charAt(0).toUpperCase() + w.slice(1);
        }).join(" ");
    }
       
    $('#prem-car-phrases').change(function(){
        var pcp    = $('#prem-car-phrases option:selected').val();
        if(pcp === "Gras"){
            // chaque para est coupé au .
            // chaque element du tableau ainsi formé contenant des phrase voit sa 1ere lettre transformée en lettre capitale
            $('#contenu p').each(function(){
                var tableau = $(this).text().split(". ");
                if(tableau.length === 1){}
                else{
                    var tableau2 = $.map(tableau, function(elem, i){
                        if(elem[0] != null){ // !== pose problème
                            return '<span class="bg-alert">' + (elem[0]) + '</span>' + elem.substring(1) + '. ';
                        }
                    });
                    $(this).html(tableau2.join(''));
                }
                });
        }
        if(pcp === "Normal"){
            $('#contenu p').each(function(){
                var unPar = $(this).html();
                if(unPar.indexOf('<img') == -1){// si indexOf ne trouve pas '<img
                    $(this).html($(this).text());
                }
            });
        }
    });

//Écriture en caractères rouges du mot spécifié dans le premier paragraphe. 
//Par exemple, si l'utilisateur tape « 10 » dans la zone de texte, le dixième mot du premier paragraphe
//doit apparaître en caractères rouges

    
    $('#couleurMot').click(function(){
        var wordIdx     = $('#mot').val(); // valeur de l'input
        var wordsTab    = $('#contenu p:first').text().split(' ');//creation du tableau contenant les mots du 1er paragraphe
        // recherche du mot et mise en couleur
        var wordsTab2   = $.map(wordsTab, function(elem, idx){
            if(wordIdx == idx+1){// == car string et number / idx+1 car commence à 0
                return "<span class='bg-success'><b>" + elem + "</b></span>";
            }else{
                return elem;
            }
        });
       $('#contenu p:first').html(wordsTab2.join(' '));
    });
});


// Affecter une bordure aux images.

$('#bordure-images');
$('#contenu img').css('border', '4px solid transparent').css('margin','30px');

$('#bordure-images').change(function(){
    var selectedBordure = $('#bordure-images option:selected').val();
    if(selectedBordure == "Double"){
        $('#contenu img').css('border', '4px double #000');
    }else if(selectedBordure == "Simple"){
         $('#contenu img').css('border', '2px solid #000');
    }else{
        $('#contenu img').css('border', 'none');
    }
});

//Remise à zéro du formulaire
$('#raz').click(function(){
   return location.reload(); 
});

// #testData
// .priceWine
// .qtyMin
// .qtyOrdered
// #total
// 
// récupération des input qtyOrdered 
// key up dans .qtyOrdered
// dans span #total -> insérer le résultat du calcul (qtyOrdered*qtyMin)*priceWine



function getTotal(unitPrices, qtymins, qtyOrders){
    //transformation en variable js
    var unitPriceAr = unitPrices,qtyminAr = qtymins, qtyOrderAr = qtyOrders;
    var total=0;
    for(var i=0, j=0, k=0;i<unitPriceAr.length,j<qtyminAr.length,k<qtyOrderAr.length;i++,j++,k++){
        unitPriceAr[i] = parseFloat(unitPriceAr[i].innerHTML.replace(",","."));
        qtyminAr[j]    = parseFloat(qtyminAr[j].innerHTML.replace(",","."));
        
        if(isNaN(parseFloat(qtyOrderAr[k].value)) || parseFloat(qtyOrderAr[k].value) === "undefined"){
            qtyOrderAr[k] = 0;
        }else{
            qtyOrderAr[k]  = parseFloat(qtyOrderAr[k].value);
        }

        total += ( unitPriceAr[i]*qtyminAr[j] ) *qtyOrderAr[k];
    }
    //2 décimame
    return total.toFixed(2).replace(".",",");
}
    

$('.qtyOrdered').val(function(){return 0;});
    
$('.qtyOrdered').on(
        {keyup: function(){
            $('#total').text( getTotal($('.priceWine'), $('.qtyMin'), $('.qtyOrdered')) + " €");
        }
});




