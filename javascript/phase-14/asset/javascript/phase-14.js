var min = 1;
var max = 100;
var nbMagique = Math.floor(Math.random() * (max - min) + min);
console.log(nbMagique);
var historique = [];
var a = 0;
var taille = historique.length;



function verif() {

    var nbProp = document.getElementById('textBox1').value;

    if (nbProp > nbMagique) {
        window.alert("vous avez saisi " + nbProp + " le nombre magique est plus petit");
    }
    if (nbProp < nbMagique) {
        window.alert("vous avez saisi " + nbProp + " le nombre magique est plus grand");
    }
    if (nbMagique == nbProp) {
        window.alert("felicitation");
    }
    document.getElementById('textBox1').value = "";
    historique[a] = [nbProp];
    a = a + 1;
    console.table(historique[taille]);
}

