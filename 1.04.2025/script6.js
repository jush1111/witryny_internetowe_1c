function znajdzNajwiekszaLiczbe() {
    let liczby = [
        parseFloat(document.getElementById("num1").value),
        parseFloat(document.getElementById("num2").value),
        parseFloat(document.getElementById("num3").value),
        parseFloat(document.getElementById("num4").value),
        parseFloat(document.getElementById("num5").value)
    ]

    let najwieksza = liczby[0];

    for (let i = 1 ; i < liczby.length ; i++){
        if (liczby[i] > najwieksza){
            najwieksza = liczby[i];
        }
    }
    document.getElementById("wynik").innerText = "Najwieksza " + najwieksza;
}