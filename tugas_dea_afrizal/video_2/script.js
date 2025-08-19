document.title = "Tugas 2";
const body = document.body;
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

const defaulText = "Klik Saya";
btn1.textContent = defaulText;

btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.background = "tomato";

// Tugas munculkan html berupa nama sendiri, bukan saat tombol di klik melainkan saat mouse berada di button dan terus ubah warna text si nama sendiri tersebut saat keluar

function mouseDiDalam() {
  namaSaya = document.createElement("p");
  namaSaya.textContent = "Abidin Ramadhan Prasetyo";
  body.append(namaSaya);
}

function mouseDiLuar() {
  namaSaya.style.color = "aqua"; // ganti warna pas keluar
}
