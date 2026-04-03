const nombreSpan = document.getElementById("nombre");
nombreSpan.textContent = nombre;

const planta = document.querySelector(".planta");

planta.addEventListener("click", () => {
  planta.classList.toggle("borde");
});

const cantidad = document.querySelector(".cantidad");
const sticker1 = document.getElementById("sticker1");
const sticker2 = document.getElementById("sticker2");
const sticker3 = document.getElementById("sticker3");
const boton = document.getElementById("pedirStickers");

cantidad.textContent = "Llevas 0 stickers.";

boton.addEventListener("click", () => {
  const cantidad1 = parseInt(sticker1.value) || 0;
  const cantidad2 = parseInt(sticker2.value) || 0;
  const cantidad3 = parseInt(sticker3.value) || 0;

  const totalStickers = cantidad1 + cantidad2 + cantidad3;
  if (totalStickers <= 10) {
    cantidad.textContent = "Llevas " + totalStickers + " stickers.";
  } else {
    cantidad.textContent = "Llevas demasiados stickers.";
  }
});
