var x = window.prompt("choisissez un nombre");
var n = window.prompt('choisissez un atre nombre');
var a = 0;
n = Number(n)+1;
for (let b = 1; b < n; b++) {
    a=b*x;
    document.write(b + '*' + x + '=' + a + '<br>');

}