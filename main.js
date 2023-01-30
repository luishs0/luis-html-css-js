
//Prendo il bottone e il div:
const btn = document.getElementById("btn");
const div = document.getElementById("div-1");

// Click del bottone:
btn.addEventListener("click", function () {
    toGreen(div);
});

// Funzione per cambiare il colore:
function toGreen(element) {
    if (element.classList.contains("red")) {
        element.classList.remove("red");
        element.classList.add("green");
    } else {
        element.classList.remove("green");
        element.classList.add("red");
    }
};
