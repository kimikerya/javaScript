// Tugas JavaScript dari Gua

//1. Variabel & Console
// Buat variabel nama, umur, dan isPelajar. Tampilkan ke konsol kayak gini:

//Jawaban no 1.
let namaPengguna = "Icibos";
let umurPengguna = "17";
let pekerjaanPengguna = "Siswa";
console.log(`${namaPengguna} ${umurPengguna} ${pekerjaanPengguna}`);

//2. Operator Matematika
// Buat program yang menghitung:
// luas persegi panjang (panjang × lebar)
// keliling lingkaran (2 × π × r)

// Jawaban No 2. Bagian Pertama
let inputPanjang = prompt("Masukan Panjang luas Persegi :");
inputPanjang = Number(inputPanjang);
let inputLebar = prompt("Masukan Lebar luas Persegi :");
inputLebar = Number(inputLebar);
alert(`${inputPanjang * inputLebar}`);

// Jawaban No 2. Bagian Kedua
let inputBilanganR = prompt("Maasukan Bilangan R");
inputBilanganR = Number(inputBilanganR);
let pi;

switch (inputBilanganR % 7) {
  case 0: // kalau habis dibagi 7
    pi = 22 / 7;
    break;
  default: // kalau nggak habis dibagi 7
    pi = 3.14;
}

let hasilKeliling = 2 * pi * inputBilanganR;
alert(`Keliling dengan jari-jari ${inputBilanganR} = ${hasilKeliling}`);

//3. Percabangan (if-else)
// Buat program yang cek nilai ujian:
// Kalau nilainya ≥ 75 → tampilkan "Lulus"
// Kalau nilainya < 75 → tampilkan "Tidak lulus"

let nilaiProgram = prompt("Masukan nilai ulangan anda");
nilaiProgram = Number(nilaiProgram);

if (nilaiProgram >= 75) {
  nilaiProgram = "Lulus";
} else {
  nilaiProgram = "Tidak lulus";
}

alert(`Ini hasil ujian kamu = ${nilaiProgram}`);

//4. Loop (for loop)
// Tampilkan angka dari 1 sampai 20, tapi cuma angka genapnya aja.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) console.log(`${i}`);
}
