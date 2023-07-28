var n = 0;
var a = "";
var tableau = [];
var b = 0;
var c = 0;
var somme = 0;
var moy = 0;
while (a == "") {
    n = window.prompt("choisissez un nombre entier");
    tableau[b] = [n];
    b = b + 1;
    a = window.prompt("ne rien écrire pour continuer et stop pour arréter");
}
while (c != b) {
    somme = Number(tableau[c]) + Number(somme);
    c = c + 1;

}
moy = somme / (b);
window.alert("la somme est de " + somme);
window.alert("la moyenne est de " + moy);