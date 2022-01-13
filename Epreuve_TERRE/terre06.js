// Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.

// Exemples d’utilisation :
// $> node exo.js “Hello world!”
// !dlrow olleH
// $> node exo.js “lehciM”
// Michel

// Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

let str = process.argv[2]
if (!str) {
    console.log("Add a valid argument")
    return
}
let newStr = str.split('').reverse().join("")
console.log(newStr)