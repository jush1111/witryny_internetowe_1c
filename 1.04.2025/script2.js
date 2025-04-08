let liczby = [];

function wyswietl() {
    let liczby = [12,33,34,55,66];
    let dodane = [
        document.getElementById("num").value,
    ]
    liczby.push(dodane)
    document.getElementById("tab").innerText = "Tablica: " + liczby.join(", ");
}

