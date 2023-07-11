

function cacheImg(papillon) {
    document.getElementById("papillon").style.display = "none";
}



var produit = function produit(x, y) {
    var x = window.prompt("entrez un nombre");
    var y = window.prompt("saisir un multiplicateur");
    var b = x * x * x;
    
    document.write("le cube de " + x + " est " + b + "<br>");
    
    var a = x * y;

    document.write(" le produit de " + x + "x" + y + " est " + a);
    

}
function afficheImg(papillon) {
    document.getElementById("papillon").style.display = "block";


}


cacheImg();

produit();

afficheImg();

