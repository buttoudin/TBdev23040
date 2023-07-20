function verif() {
    var societe = document.getElementById('societe').value;
    var contact = document.getElementById('contact').value;
    var postal = document.getElementById('postal').value;
    var ville = document.getElementById('ville').value;
    var email = document.getElementById('mail').value;

    var mailVerif = RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
    var lettre = RegExp('^[a-zA-Z]+$');
    var postalVerif = RegExp('^[0-9]{5}$')
    
 
    if (lettre.test(societe) == false) {
        alert('Veuillez saisir un nom de société correct.');
    }
    if (lettre.test(contact) == false) {
        alert('Veuillez saisir une valeur correcte.');
    }
    if (postalVerif.test(postal) == false){
        alert('Veuillez saisir un code postal correct');
    }
    if (lettre.test(ville) == false) {
        alert('Veuillez saisir un nom de ville correct.');
    }
    if (mailVerif.test(email) == false) {
        alert('Veuillez saisir un Email correct.');
    }
}
