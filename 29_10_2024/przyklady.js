let age = 18;
if(age >= 18 ) {
    console.log ("jestes pelnoletni.");
} else {
    console.log (" nie jestes pelnoletni.");
}



//------------------------------

let score = 85;
if(score >= 90) {
    console.log ("Ocena A");
} else if (score >= 80) {
    console.log ("Ocena B");
} else if (score >= 70) {
    console.log ("Ocena C");
} else {
    console.log ("Ocena D lub nizsza");
}




//-----------------------------


let day = "poniedziałek";
switch (day) {
case "poniedziałek":
console.log("Dziś jest poniedziałek.");
break;
case "wtorek":
console.log("Dziś jest wtorek.");
break;
default:
console. log("To nie jest poniedziałek ani wtorek.");
}




//-------------------------------------

 let age1 = 18;
  let status = (age >= 18 ) ? "plenoletni" : "niepelnoletni";
console.log(status);