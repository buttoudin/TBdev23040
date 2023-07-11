var a = 0;
var num = [];
var stop = 1;
var b = 0;
var somme = 0;
while (stop != 0) {
    num[a] = window.prompt("Entrer une valeurs");
    a = a + 1
    stop = window.prompt("saisissez 0 pour arréter la saisie");
}

for (let i = 0; i < a; i++) {
    
    b = num[i];
    var somme = Number(b) + Number(somme);
    console.log(somme);
}

var moy = Number(somme) / (Number(a));
console.log("Vous avez saisi " + Number(a) + " valeurs");
console.log("La somme des valeurs est égales à " + Number(somme));
console.log("La moyenne des valeurs est " + Number(moy));
console.table(num);