document.addEventListener("DOMContentLoaded", () => {

    const addButton = document.getElementById("addToCart");
    const imageInput = document.getElementById("imageSelect");
    const copiesInput = document.getElementById("copies");
    const cart = document.getElementById("cart");

    const LINKS = document.querySelectorAll("nav a[data-section]");
    const SECTIONS = document.querySelectorAll("aside > div");


    LINKS.forEach(link => {
        link.addEventListener("click", () => {
            const target = link.dataset.section;
            SECTIONS.forEach(s => s.classList.add("hidden"));
            document.getElementById(target).classList.remove("hidden");
        });
    });

    addButton.addEventListener("click", () => {

        if (!imageInput.files.length) {
            alert("Wybierz plik JPG");
            return;
        }

        const file = imageInput.files[0];
        const copies = parseInt(copiesInput.value);

        if (!copies || copies < 1) {
            alert("Podaj prawidłową liczbę kopii");
            return;
        }

        const paper = document.querySelector("input[name='paper']:checked").value;
        const unitPrice = paper === "blyszczacy" ? 1.5 : 2.0;
        const total = unitPrice * copies;

        const item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `
            <p><strong>${file.name}</strong></p>
            <p>Kopie: ${copies}</p>
            <p>Papier: ${paper}</p>
            <p>Cena: ${total.toFixed(2)} zł</p>
        `;

        cart.appendChild(item);
    });

});
