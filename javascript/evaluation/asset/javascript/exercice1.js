var age = window.prompt("Veuillez saisir votre aĝe");
var mem = [];
var jeune = 0;
var moyen = 0;
var vieux = 0;

while (age < 100) {
    age = window.prompt("veuillez saisir votre âge");
    mem.push(age);
}

for (let i = 0; i < mem.length; i++) {
if (mem[i]<20) {
    jeune = +jeune+1;
}
else if (mem[i]>40) {
    vieux = +vieux + 1;
}
else{
    moyen = +moyen + 1;
}

}
window.alert('il y a ' + jeune + 'jeune. Il y a ' + moyen + "personne d'âge moyen. Il y a " + vieux + "personne âgée.")