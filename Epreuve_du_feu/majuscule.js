/*  Créer un script qui affiche une lettre sur deux en majuscule
et le reste en minuscule de la chaîne de caractères du premier argument.
Ex. d’appel du script :
$> ./majuscule “Bien le bonjour!” bIeN lE bOnJoUr!  */


let phrase = process.argv[2];

//let phrase = "Bien le bonjour!";
let modStr = phrase.toUpperCase().split(" ");

function upper(phrase){
    let resultat = "";
for (i=0; i<modStr.length; i++){
    var mot = modStr[i];
    for(j=0; j<mot.length;j++){
        resultat += j % 2 ==0 ? mot.charAt(j).toLowerCase() : mot.charAt(j);
    }
  resultat += " ";
}
console.log(resultat) 
}
upper(modStr)

