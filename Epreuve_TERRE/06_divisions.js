// Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

// Exemples d’utilisation :
// $> python exo.py 5 2
// résultat: 2
// reste: 1
// $> python exo.py 10 0
// erreur.
// $> python exo.py 3 5
// erreur.

let arg1 = Number(process.argv[2])
let arg2 = Number(process.argv[3])

const division = (arg1, arg2) => {
    if (arg2 > arg1 || arg2 === 0 || isNaN(arg1) || isNaN(arg2)) {
        console.log("erreur")
        return
    }
    console.log("résultat:", Math.floor(arg1 / arg2))
    console.log("reste:", arg1 % arg2)

}
division(arg1, arg2)
