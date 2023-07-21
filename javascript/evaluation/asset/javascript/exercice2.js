var a = window.prompt("Quelle table de multiplication souhaitez vous affichez ?");

function TableMultiplication(a) {
    for (let i = 0; i < 11; i++) {
        var b = a*i;
        document.write(i +"x" + a + "=" + b + "<br>");
    }
}

TableMultiplication(a);