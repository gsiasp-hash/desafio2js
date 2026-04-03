const nombreSpan = document.getElementById("nombre");
nombreSpan.textContent = nombre;
// Borde imagen
const planta = document.querySelector(".planta");

planta.addEventListener("click", () => {
  planta.classList.toggle("borde");
});
// Reto stickers
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
// Reto password
const numeroUno = document.getElementById("numeroUno");
const numeroDos = document.getElementById("numeroDos");
const numeroTres = document.getElementById("numeroTres");
const verificarPassword = document.getElementById("verificarPassword");
const resultadoPassword = document.getElementById("resultadoPassword");

verificarPassword.addEventListener("click", () => {
  const valor1 = parseInt(numeroUno.value);
  const valor2 = parseInt(numeroDos.value);
  const valor3 = parseInt(numeroTres.value);

  if (valor1 === 9 && valor2 === 1 && valor3 === 1) {
    resultadoPassword.textContent = "Password 1 correcto";
  } 
  else if (valor1 === 7 && valor2 === 1 && valor3 === 4) {
    resultadoPassword.textContent = "Password 2 correcto";
  }
  else {
    resultadoPassword.textContent = "Password incorrecto. Inténtalo de nuevo.";
  }
});
