

function verif() {
    var mailVerif = RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$');
    var lettre = RegExp('^[a-zA-Z]+$');
    var postalVerif = RegExp('^[0-9]{5}$');

    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var sexe = document.getElementById('genre').value;
    var postal = document.getElementById('postal').value;
    var adresse = document.getElementById('adresse').value;
    var ville = document.getElementById('ville').value;
    var email = document.getElementById('email').value;
    var sujet = document.getElementById('sujet').value;
    var question = document.getElementById('question').value;
    var accord = document.getElementById('accord').value;

    if (lettre.test(nom) == false) {
        alert('Veuillez saisir un nom correct.');
    }
    if (lettre.test(prenom) == false) {
        alert('Veuillez saisir un prenom correct.');
    }
    if (sexe == false){
        alert('Veuillez saisir votre genre');
    }
    if (postalVerif.test(postal) == false) {
        alert('Veuillez saisir un code postal correct');
    }
    if (adresse == "") {
        alert('Veuillez saisir une adresse');
    }
    if (lettre.test(ville) == false) {
        alert('Veuillez saisir un nom de ville correct.');
    }
    if (mailVerif.test(email) == false) {
        alert('Veuillez saisir un Email correct.');
    }
    if (sujet == false) {
        alert('Veuillez saisir un sujet.');
    }
}   