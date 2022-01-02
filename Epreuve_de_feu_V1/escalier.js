/*  Créer un script qui affiche un escalier en fonction du premier argument.
Ex. d’appel du script : $> ./escalier 4
   #
  ##
 ###
####
*/

const argument1 = process.argv[2]; //Notre argument passé après le nom de fichier

function escalier(arg) {
  if (isNaN(arg)) {
    console.log("Put a number as argument and try again :D");
  }
  for (let i = 1; i <= arg; i++) {
    let espace = arg - i;
    console.log(" ".repeat(espace) + "#".repeat(i));
  }
}
escalier(argument1);
