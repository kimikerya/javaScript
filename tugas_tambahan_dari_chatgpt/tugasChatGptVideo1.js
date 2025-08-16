// Tugas JavaScript dari Gua

//1. Variabel & Console
// Buat variabel nama, umur, dan isPelajar. Tampilkan ke konsol kayak gini:

//Jawaban no 1.
// let namaPengguna = "Icibos"
// let umurPengguna = "17"
// let pekerjaanPengguna = "Siswa"
// console.log(`${namaPengguna} ${umurPengguna} ${pekerjaanPengguna}`);

//2. Operator Matematika
// Buat program yang menghitung:
// luas persegi panjang (panjang × lebar)
// keliling lingkaran (2 × π × r)

// Jawaban No 2. Bagian Pertama
// let inputPanjang = prompt('Masukan Panjang luas Persegi :')
// let inputLebar = prompt('Masukan Lebar luas Persegi :')
// alert(`${inputPanjang * inputLebar}`);

// Jawaban No 2. Bagian Kedua
let inputBilanganR = prompt('Masukkan Bilangan R');
inputBilanganR = Number(inputBilanganR);
let pi;

switch (inputBilanganR % 7) {
  case 0: // kalau habis dibagi 7
    pi = 22 / 7;
    break;
  default: // kalau nggak habis dibagi 7
    pi = 3.14;
}

let luas = pi * inputBilanganR * inputBilanganR;
alert(`Luas lingkaran dengan jari-jari ${inputBilanganR} = ${luas}`);

//3. Percabangan (if-else)
// Buat program yang cek nilai ujian:
// Kalau nilainya ≥ 75 → tampilkan "Lulus"
// Kalau nilainya < 75 → tampilkan "Tidak lulus"

//4. Loop (for loop)
// Tampilkan angka dari 1 sampai 20, tapi cuma angka genapnya aja.

//5. Function
// Buat function hitungDiskon(harga, persenDiskon) yang mengembalikan harga setelah dipotong diskon.