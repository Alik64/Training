var fs = require('fs');
const tab1 = fs.readFileSync("./" + process.argv[2], 'utf-8').split("\n");



let transformGrille = function (tab) {
    let grille = [], row
    for (let line = 0; line < tab.length; line++) {

        if (tab[line] !== "---+---+---") {
            // enlever "|"" + "_"  + transformer en tableau => [1, 9, 5, 7, 8, 4, 2, 0, 0]
            row = tab[line].replace(/[_]/g, "0")
            row = row.replace(/\s/g, '')
            row = row.replace(/[|]/g, '').split('').map(i => Number(i))
            //row = row.replace(/[|_]/g, m => ({ "|": "", "_": "0" })[m]).split('').map(i => Number(i))
            grille.push(row)

        }

    }
    return grille
}
let board = transformGrille(tab1);

//Test pour controler la grille - num = numéro qu'on veut insérer
function test(board, row, col, num) {

    // On controle les rangées
    for (let d = 0; d < board.length; d++) {

        // si numéro qu'on veut inserer est déjà là => return false;
        if (board[row][d] == num) {
            return false;
        }
    }
    // on controle les colonnes
    for (let r = 0; r < board.length; r++) {

        // si numéro qu'on veut inserer est déjà là => return false;
        if (board[r][col] == num) {
            return false;
        }
    }
    // On controle le caré 3X3 

    let sqrt = Math.floor(Math.sqrt(board.length)); // 3 = racine carré du 9
    let boxRowStart = row - row % sqrt; // %sqrt => donne toujour meme range x3 |0,1,2 % sqrt = 0
    let boxColStart = col - col % sqrt; // %sqrt => donne toujour meme ligne x3 |3,4,5 % sqrt = 3

    for (let r = boxRowStart;
        r < boxRowStart + sqrt; r++) {
        for (let d = boxColStart;
            d < boxColStart + sqrt; d++) {
            if (board[r][d] == num) {
                return false; // si numero est déja là => false
            }
        }
    }

    return true; // true => on peut inserer le numéro
}
// Solution
function solveSudoku(board, n) {
    let row = -1;
    let col = -1;
    let isEmpty = true;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 0) {
                row = i;
                col = j;

                // si on a encore des zero dans la grille
                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }

    // la grille est vide
    if (isEmpty) {
        return true;
    }

    // on passe un par un les numéro
    for (let num = 1; num <= n; num++) {
        if (test(board, row, col, num)) // si le test est ok
        {
            board[row][col] = num;    // on insere notre num
            if (solveSudoku(board, n)) {

                // on envoie données => function print()
                return true;
            }
            else {
                // on remplace
                board[row][col] = 0;
            }
        }
    }
    return false;
}

//on transform la grille pour afficher la solution
let resultat = function (tab) {
    let grille = [], row;
    for (let line = 0; line < tab.length; line++) {
        row = tab[line].map(i => i.toString()).join('').replace(/[,]/g, "") //"195784263"
        row = row.match(/.{1,3}/g).join("|") // "195|784|263"
        grille.push(row)
        if (line === 2 || line === 5) {
            grille.push("---+---+---  ")
        }

    }
    return grille
}

let N = board.length;

if (solveSudoku(board, N)) {
    // ON affiche la solution
    console.log(resultat(board))
}
else {
    console.log("Resolution impossible")
    console.log(board)
}

