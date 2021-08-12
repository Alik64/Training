// Créer un script qui calcul la factoriel du nombre passé en argument.
// Ex. d’appel du script :
// $> ./factoriel 3 =>  #6

let nombre = process.argv[2];

function factorielle(param){
    if (param === 0){
        return 1;
    }else {
        return param * factorielle(param-1);
    }
}
console.log (factorielle(nombre));