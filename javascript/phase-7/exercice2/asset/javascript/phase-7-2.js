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
