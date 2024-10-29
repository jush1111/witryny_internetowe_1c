let age = prompt("podaj wiek: ");
let kategoria;

if(age < 13){
    kategoria = 'dziecko';
} else if (age < 20) {
    kategoria = 'nastolatek';
} else if (age < 65) {
    kategoria = 'dorosly';
} else {
kategoria = 'senior';
}

document.write(`kategoria wiekowa: ${kategoria}`);