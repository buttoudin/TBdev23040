const tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];





var arret = "";

while (arret != "stop") {
    var nom = window.prompt("Veuillez saisir un prénom");
    var verif = tab.indexOf(nom);
    
    if (verif != -1) {
        tab.splice(verif, 1);
        tab.push(' ');
    }
    if (verif == -1){
        arret = window.prompt('La valeur entrez est incorrect, pour arreter écrivez "stop"');
    }
    
}
console.table(tab);



