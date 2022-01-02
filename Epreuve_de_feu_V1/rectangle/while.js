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
let petit = fs.readFileSync('c1.txt', 'utf-8').split('\n')//[ '123', '321', '123' ]
let grand = fs.readFileSync('c2.txt', 'utf-8').split('\n')//[ '930870', '081235', '973217', '091230', '883700' ]
//let petit = ['123', '321', '123'];
//let grand = ['930870', '081235', '973217', '091230', '883700']


var small = petit.map((m) => m.split("").map(m => Number(m)));
var big = grand.map((m) => m.split("").map(m => Number(m)))

// si vide - gerer


function test(small, big, line, column) {
    var line2 = 0;
    while (line2 < small.length) {
        var column2 = 0;
        while (column2 < small[line2].length) {
            if (small[line2][column2] != big[line + line2][column + column2]) {
                return false
            }

            column2++
        }

        line2++
    }
    return true
}

function rectangle(small, big) {
    var line = 0;
    while (line < big.length) {
        var column = 0;
        while (column < big[line].length) {
            if (big[line][column] == small[0][0]) {
                if (test(small, big, line, column)) {
                    console.log(column, line)
                    return true
                }
            }

            column++
        }

        line++
    }
    console.log("Le carré n'est pas présent")
    return false
}

rectangle(small, big)