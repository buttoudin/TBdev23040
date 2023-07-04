var prenom = "";
var a = 0;
var tableau = [];

prenom = window.prompt("entrez un prénom");
console.log(tableau[0] = [prenom]);

while (prenom != '') {
    a = a + 1;
    prenom = window.prompt("entrez un autre prénom");
    if (prenom != "") {
        console.log(tableau[a] = [prenom]);
    }
}
console.log(a + " prénoms d'écris");
