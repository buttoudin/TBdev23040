var num1 = window.prompt("saisissez un nombre entier");
var num2 = window.prompt("saisissez un autre nombre entier");
var operateur = window.prompt("choisissez entre : +,-,*,/");

if (operateur=="+" || operateur=="-" || operateur=="*" || operateur=="/") 
{
    switch (operateur) {
        case "+":
            window.alert(Number(num1) + Number(num2));
            break;
        case "-":
            window.alert(Number(num1) - Number(num2));
            break;
        case "*":
            window.alert(Number(num1) * Number(num2));
            break;
        case "/":
            window.alert(Number(num1) / Number(num2));
            break;
    }
}
else {
document.write("fkdn");
}