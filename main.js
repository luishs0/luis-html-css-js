
//Prendo il bottone e il div:
const btn = document.getElementById("btn");
const div = document.getElementById("div-1");

// Click del bottone:
btn.addEventListener("click", function () {
    toGreen(div);
});

// Funzione per fare diventare verde lo sfondo di un elemento:
function toGreen(element) {
    element.classList.remove("red");
    element.classList.add("green");
};
