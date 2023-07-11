var n = window.prompt("Quelle sera la taille du tableau ?");

var tableau = Array(n);

for (let i = 0; i < n; i++) {
    tableau[i] = window.prompt("Quelle valeur voulez vous ajouter au tableau ?");
}

console.table(tableau);