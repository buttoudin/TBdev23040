const str1 = 'robert ;dupont ;amiens ;80000';
const str2 = ";";
// var n = 0;

function strtok(str1, str2, n) {

    const a = str1.split(str2);
    window.alert(a[n-1]);
}

var n = window.prompt("emplacement du mot souhaité");
strtok(str1,str2,n);
// const str = 'peut êre que ça fonctionne';

// const words = str.split(' ');
// console.log(words[4]);

// const str = 'The quick brown fox jumps over the lazy dog.';

// const words = str.split(' ');
// console.log(words[3]);



