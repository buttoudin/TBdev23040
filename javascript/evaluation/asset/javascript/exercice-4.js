

var paye = 0;
var REM = 0;
var PORT = 0;
var TOT = 0;
var TOT1 = 0;
var arret = "";
var PU = 0;

while (arret != 'stop') {
    PU = window.prompt("Saisi du Prix de l'article");
    var QTECOM = window.prompt("Saisi du nombre d'article");
    TOT1 = PU * QTECOM;
    console.log(TOT1);
    TOT = TOT + TOT1; 
    arret = window.prompt("Saisir 'stop' si il ne vous reste plus d'article");
}

if (TOT >= 100 && TOT <= 200) {
    REM = TOT * 5 / 100;
    TOT = TOT - REM + 6;
}
else if (TOT > 200 && TOT<500) {
    REM = TOT * 10 / 100;
    PORT = TOT * 2 / 100;
    if (PORT>6) {
        TOT = TOT - REM + PORT;
    }
    else{
        TOT = TOT - REM + 6;
    }
    
}
else if ( TOT>500){
    REM = TOT * 10 / 100;
    TOT = TOT - REM;
}
else{
    TOT = TOT + 6;
}

window.alert('Le prix totale est de ' + TOT + '€');