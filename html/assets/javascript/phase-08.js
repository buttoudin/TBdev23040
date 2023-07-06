var mot = window.prompt("entrer un mot");
var voy = ['a', 'e', 'i', 'o', 'u', 'y'];
var a = 0;
var b = 0;
var c = "";
var e = "";
var nb = 0;

for (let b = 0; b < mot.length; b++) {
    for (var i in voy) {
        mot.indexOf(voy[i]);
        console.log(mot.indexOf(voy[i]));
        if (mot.indexOf(voy[i]) != -1) {
            if (mot.indexOf(voy[i])!=0 || (mot.indexOf(voy[i])!=mot.length)){

          
            c = mot.substring(0,mot.indexOf(voy[i]))
            console.log(c);
            e = mot.substring((mot.indexOf(voy[i])+1),mot.length);
            console.log(e);
            mot = c + e;
            console.log(mot) ;
            nb = nb + 1;
            console.log("voyelle trouvé");
        }
        }else if(mot.indexOf(voy[i])==0)
        {
         mot = mot.substring(1,mot.length);
         nb+=1;
        }else if (mot.indexOf(voy[i])==mot.length){
         mot = mot.substring(0,mot.indexOf(voy[i]));
         nb+=1;
        }
        console.log("+1");
    }
    
}
window.alert(nb);