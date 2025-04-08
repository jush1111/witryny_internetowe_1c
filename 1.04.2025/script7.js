function znajdzNajmniejszaLiczbe() {
    let liczby = [
        parseFloat(document.getElementById("num1").value),
        parseFloat(document.getElementById("num2").value),
        parseFloat(document.getElementById("num3").value),
        parseFloat(document.getElementById("num4").value),
        parseFloat(document.getElementById("num5").value)
    ]

    let najmniejsza = liczby[0];

    for (let i = 0 ; i < liczby.length ; i++){
        if (liczby[i] < najmniejsza){
            najmniejsza = liczby[i];
        }
    }
    document.getElementById("wynik").innerText = "Najmniejsza " + najmniejsza;
}