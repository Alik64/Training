// Afficheur d'arguments
// Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.
// Exemples d’utilisation :
// $> ruby exo.rb je suis solide !
// je
// suis
// solide
// !


const args = process.argv.splice(2)
for (let i = 0; i < args.length; i++) {
    console.log(args[i])
}