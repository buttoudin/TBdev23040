//exercice 1//
var parite = window.prompt("choisissez un nombre");
if (Number(parite)%2==0)
{
    window.alert("le nombre est pair");
}
else 
{
    window.alert("le nombre est impair");
}
//exercice 2//
let now = new Date();
var birth = window.prompt("Votre année de naissance ?");
age = now.getFullYear()-Number(birth);

if (Number(age)>18)
{
    window.alert("vous avez "+age+"ans et vous êtes majeur");
}
else
{
    window.alert("vous avez "+age+"ans et vous êtes mineur");
}

//exercice 3//
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



