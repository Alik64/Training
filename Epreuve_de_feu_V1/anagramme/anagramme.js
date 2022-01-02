var fs = require('fs')
const list = fs.readFileSync('fr.txt', 'utf-8').split('\n')//[ 'amour', 'arbre', 'balade', 'barre', 'beau' ]
const arg1 = process.argv[2] // arbre


let newList = list.map((word) => word.toLowerCase().match(/[a-z0-9]/g).sort().join("")) //[ 'amoru', 'aberr', 'aabdel', 'aberr', 'abeu' ]
let newWord = arg1.toLowerCase().match(/[a-z0-9]/g).sort().join("") // 'aberr'
tab = []
for (let i = 0; i < newList.length; i++) {
    if (newList[i] === newWord) {
        tab.push(list[i])
    }
}
console.log(tab)
