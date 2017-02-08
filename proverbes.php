<?php

$proverbe = array("On ne rassasie pas un chameau en le nourrissant à la cuillère.",
            "Connaître son ignorance est la meilleure part de la connaissance.",
            "Une maison en paille où l'on rit, vaut mieux qu'un palais où l'on pleure.",
            "Le vrai voyageur ne sait pas où il va.",
            "Point n'est besoin d'élever la voix quand on a raison.",
            "Un ami c'est une route, un ennemi c'est un mur.",
            "Un peu de parfum demeure toujours sur la main qui te donne des roses.",
            "Si élevé que soit l'arbre, ses feuilles tombent toujours à terre.",
            "Si ce que tu as à dire n'est pas plus beau que le silence, tais toi.",
            "Trois coupes de vin font saisir une doctrine profonde."
            );


$l= isset($_GET["l"])?$_GET["l"]:null;
$displayForm = 0;

if ($l && ($l != "") && ($l>0) && ($l<11))
{
    $displayForm=1;
    echo "<u>Proverbe chinois N° ".$l."</u><br><br>";
    echo "<b>".$proverbe[$l-1]."</b>";
    echo '<p><a href="proverbes.html">Retour formulaire</a></p>';
}
else{
    if($displayForm !==1){
        echo "<form method='get' action='proverbes.php?l=$l'>";
        echo "<span style='color: red;'>Entrez un nombre compris entre 1 et 10 : </span><br />";
        echo "<input type='text' name='l' />";
        echo "<input type='submit' value='Envoyer'/>";

    }
}
?>
