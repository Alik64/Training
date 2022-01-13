// Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.

// Exemples d’utilisation :
// $> python exo.py “Hello world!”
// 12
// $> python exo.py
// erreur.
// $> python exo.py “Bonjour” “Aurevoir”
// erreur.
// $> python exo.py 10
// erreur.


let str = process.argv[2]
if (process.argv.length > 3 || !isNaN(str)) {
    console.log("erreur")
    return
}
console.log(str.length)
console.log(typeof str)
