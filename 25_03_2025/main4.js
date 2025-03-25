let oceny = [1,2,3,4,5];
let ocenyTekst = oceny.map(ocena =>{
    if(ocena == 5 ) return "bardzo dobry";
    if(ocena == 5 ) return  "dobry";
    if(ocena == 5 ) return "dostateczny";
    if(ocena == 5 ) return "dopuszczajacy";
    if(ocena == 5 ) return "niedostateczny";
});

console.log("oceny liczbowe: ", oceny);
console.log("oceny tekstowe: ", ocenyTekst);
