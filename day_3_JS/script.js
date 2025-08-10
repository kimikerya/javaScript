// Minggu 10/8/25
// Array, for loop (for loop of array), do while / while loop

let namaArray = ["Abidin, Raka, Sadiq"];
alert(namaArray);

// Ada juga bisa nambah menggunakan namaArray.push
// Menghilangkan data pertama namaArray.shift
// Menghilangkan data terakhir namaArray.pop
// Ada dua tipe untuk menggunakan array
// let guruArray = []
// guruArray[0] = "Abidin"
// guruArray[1] = "Raka"
// guruArray[2] = "Sadiq"

// for
// Coba baca sendiri intinya aman ekekke
// variabel i adalah 12 jika i kurang dari 11 maka i tambah terus
// i++ kurleb (i = i + i)

for (let i = 0; i <= 11; i++) {
  console.log("Sadiq");
}

// for Array
// cek panjangnya data menggunakan namaTemen.length

let namaTemen = ["Davian", "Galih", "Ilham"];
for (let i = 0; i <= 2; i++) {
  console.log(namaTemen[i]);
}

// while do / do while
// awal while do , akhir do while
// kalau while do mencari dulu baru eksekusi, sebaliknya do while esksekusi dulu satu kali baru mencari
// contohnya

///let h = 10;
// do {
//   console.log("Aziz")
// }while (h<10)

let a = 0;
while (a < 10) {
  a++
  console.log("Ilham");
}

let h = 0;
do {
  console.log("Aziz")
}while (h<10)