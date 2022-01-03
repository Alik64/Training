// Créez un programme qui affiche son nom de fichier.
// Exemples d’utilisation :
// $> node exo.js
// exo.js
// $> node crevette.js
// crevette.js

import { basename } from 'path';
console.log(basename(process.argv[1]))