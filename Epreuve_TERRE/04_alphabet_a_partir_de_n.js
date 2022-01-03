// Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.

// Exemples d’utilisation :
// $> python exo.py n
// nopqrstuvwxyz
// $>
// Attention : votre programme devra utiliser une boucle.

const alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]

let index = alphabet.indexOf(process.argv[2])
if (isNaN(index)) {
    let str = ""
    for (let i = index; i < alphabet.length; i++) {
        str += alphabet[i]
    }
    console.log(str)
} else {
    console.log('ERROR! Only letters are alowed!')
}

