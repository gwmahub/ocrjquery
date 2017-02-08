<?php
//On récupère le pseudo et on le stocke dans une variable
$nom        = isset($_POST['nom'])?$_POST['nom']:null;
//On fait de même avec le message
$message    = isset($_POST['message'])?$_POST['message']:null;
//Le message est créé
$ligne      = $nom.' >>> '.$message.'<br>';
//On lit le fichier chatdata.htm et on stocke la réponse dans une variable (de type tableau)
$leFichier  = file('ressources/chatdata.htm');

//On ajoute le texte calculé dans la ligne précédente au début du tableau
array_unshift($leFichier, $ligne);

//On écrit le contenu du tableau $leFichier dans le fichier chatdata.htm
file_put_contents('ressources/chatdata.htm', $leFichier);
