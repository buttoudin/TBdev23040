var mot = window.prompt("choisissez un mot");
var mottiret='';
for (i=0; i<mot.length;i++)
{
    mottiret+='_ ';
}
console.log(mottiret);
var mem = mot;
var tableMot = [];
var cache = [];
var tableMotbis = [];
var alphabet = new RegExp("^[a-z]{1}$");
var lettreMot = "";
var e = "";
var c = "";

var temp;
var reunion = "";


//definir la table de "_"
for (let c = 0; c < mot.length; c++) {
    cache.push("_");

}

//couper le mot
for (let a = 0; a < mot.length; a++) {
    lettreMot = mot.substring(a, a + 1);
    tableMot.push(lettreMot);
}

function verif() {
    var lettreProp = document.getElementById('textBox1').value;
    console.log(alphabet.test);
    if (alphabet.test(lettreProp) == false) {
        window.alert("veuillez saisir une valeur correcte");
    }

    function decoupe(){
        mot.indexOf(lettreProp);
        console.log(mot.indexOf(lettreProp));
        if (mot.indexOf(lettreProp) != -1) {
            console.log(mot + ".");
            cache[mot.indexOf(lettreProp)] = tableMot[mot.indexOf(lettreProp)];;
            tableMotbis[mot.indexOf(lettreProp)] = '_';
            c = mot.substring(0, mot.indexOf(lettreProp));
            console.log(c);
            e = mot.substring((mot.indexOf(lettreProp) + 1), mot.length);
            console.log(e);
            mot = c + e;
            console.log(mot);
           

        }
        if (mot==""){
            window.alert("bravo");
        }
    }


   
    decoupe();
    for (let i = 0; i < mot.length; i++) {
        decoupe();
       
    }
   



}

