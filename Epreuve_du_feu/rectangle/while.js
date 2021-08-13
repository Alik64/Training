/*Créer un script qui affiche la position du carré passé en premier argument dans le carré du second argument.
 Ex. d’appel du script :
$> ./rectangle c1.txt c2.txt
2,1
$> cat c1.txt           $> cat c2.txt
123                     930870
321                     081235
123                     973217
                        091230
                        883700 */

var fs = require('fs')
const petit = fs.readFileSync('c1.txt', 'utf-8').split('\n')//[ '123', '321', '123' ]
const grand = fs.readFileSync('c2.txt', 'utf-8').split('\n')//[ '930870', '081235', '973217', '091230', '883700' ]
// let petit = ['123', '321', '123'];
// let grand = ['930870', '081235', '973217', '091230', '883700']
let posY = 0 // Position Y coin Haut-Gauche
let posX = 0 // Position X coin Haut-Gauche
let localiser = function () {
    let y = 0 // position Y initiale
    let x = 0 // position X initial
    let n = 0 // numéro d'élément du Grand rectagle
    while (y < Number(grand.length)) {                  //on tourne sans dépasser le Nb des items du Grand
        while (x < Number(grand[n].length)) {        //on tourne  sans depaser taille de item
            if (grand[y][x] === petit[y][x]             // on cherche la position de l'element haut-gauche
            ) {
                posY = y
                posX = x
                x = Number(grand[0].length)
                y = Number(grand.length)

            } else {
                x++
            }
        }
        y++     // on passe au niveau superieur
        x = 0   // on annue X pour recomencer l'opération
        n++     // controle de longeur d'item

    }
}

localiser()
test()
function test() {
    const petit = fs.readFileSync('c1.txt', 'utf-8').split('\n')//[ '123', '321', '123' ]
    const grand = fs.readFileSync('c2.txt', 'utf-8').split('\n')//[ '930870', '081235', '973217', '091230', '883700' ]
    let x1 = 0
    let y1 = 0
    let posY1 = posY
    let posX1 = posX
    if (grand[posY][posX] === petit[y1][x1] && grand[posY][posX + 1] === petit[y1][x1 + 1] && grand[posY][posX + 2] === petit[y1][x1 + 2] && grand[posY + 1][posX] === petit[y1 + 1][x1] && grand[posY + 1][posX + 1] === petit[y1 + 1][x1 + 1] && grand[posY + 1][posX + 2] === petit[y1 + 1][x1 + 2] && grand[posY + 2][posX] === petit[y1 + 2][x1] && grand[posY + 2][posX + 1] === petit[y1 + 2][x1 + 1] && grand[posY + 2][posX + 2] === petit[y1 + 2][x1 + 2]
    ) {
        console.log("Le carré est présent")
        console.log("Position X = " + posX + " Position Y = " + posY)
    } else {
        console.log("Le carré n'est pas là")
    }

}
