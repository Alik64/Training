// Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..

// Exemples d’utilisation :
// $> ruby exo.rb 2
// pair
// $> ruby exo.rb 5
// impair
// $> ruby exo.rb Bonjour
// Tu ne me la mettras pas à l’envers.
// $> ruby exo.rb
// Tu ne me la mettras pas à l’envers.

// Attention : gérez aussi les entiers négatifs.

let arg = process.argv[2]

if (isNaN(arg) || arg < 0) {
    console.log("Tu ne me la mettras pas à l’envers")
    return
}
arg % 2 === 0 ? console.log("pair") : console.log("impair")

