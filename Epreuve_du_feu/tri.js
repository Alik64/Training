/* Créer un script qui affiche les valeurs qui lui sont passées en argument triées par ordre décroissant.
Bonus : implémenter plusieurs algorithme de tri (tri à bulle, tri sélectif, ... )
Ex. d’appel du script :
$> ./tri 4 5 1 3 2  => 5 4 3 2 1 

// 1 méthode Utilisation du .sort()
//let tabOrigin = ['4', '5', '1', '3', '2']
// let tri = tableauArg
// .sort((a, b) => b - a)
// .join(" ")

//console.log(tri);*/

let tab = process.argv.slice(2)

function sortAbulle(items) {

    for (var i = 0; i < items.length; i++) {
        for (var j = 0; j < items.length; j++) {
            if (items[j] < items[j + 1]) {
                var tmp = items[j + 1];
                items[j + 1] = items[j];
                items[j] = tmp;
            }
        }
    }
    console.log(items.join(" "))
}
sortAbulle(tab)