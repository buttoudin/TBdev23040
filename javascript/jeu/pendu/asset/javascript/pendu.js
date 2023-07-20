var mot = window.prompt("choisissez un mot");
//var mem = mot;
var alphabet = new RegExp("^[a-z]{1}$");
var lettreMot = "";
var e = "";
var c = "";
var lettreProp;
var temp;
var reunion = "";
var memoire = [];
var verfiMemoire = 0;


function decoupe() {
    lettreProp = document.getElementById('textBox1').value;
    console.log(mot);
    mot.indexOf(lettreProp);
    console.log(mot.indexOf(lettreProp));

    if (mot.indexOf(lettreProp) != -1) {
        c = mot.substring(0, mot.indexOf(lettreProp));
        e = mot.substring((mot.indexOf(lettreProp) + 1), mot.length);
        mot = c + e;
        //document.getElementById('textBox1').value = "";
        console.log(mot);
        console.log(mot.indexOf(lettreProp));
    }


}

function verif() {
    var lettreProp = document.getElementById('textBox1').value;
    console.log(alphabet.test);
    if (alphabet.test(lettreProp) == false) {
        window.alert("veuillez saisir une valeur correcte");
    }
    for (let r = 0; r < memoire.length; r++) {
        if (lettreProp == memoire[r] && lettreProp != "") {
            verfiMemoire = 1;
            console.log('verification');
            console.log(verfiMemoire);
        }
    
    }
    console.log(verfiMemoire);
    if (verfiMemoire != 1) {
        var aff = document.getElementById('lettre');
        lettreProp = document.getElementById('textBox1').value;
        //decoupe();
        aff.insertAdjacentHTML('afterend', lettreProp + '<br>');
        memoire.push(lettreProp);
        verfiMemoire = 0;
        console.table(memoire);
        for (let i = 0; i < mot.length; i++) {
            decoupe();
    
        }
    }
    else if (verfiMemoire == 1) {
        window.alert('Cette lettre à déjà étais saisie');
        verfiMemoire = 0;
        document.getElementById('textBox1').value = [""];
        console.log(lettreProp);
    }
    if (mot.length==0){
        window.alert('Bravo!');
    }
}




