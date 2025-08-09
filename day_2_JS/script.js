// Sabtu 9/8/25

// Belajar pengkondisian
// Kurleb maksud dari pengkondisian ini jika variable "pacarSaya datanya sama null maka output engga ada"
// Kalau tidak / isi datanya bukan null maka output ada
// penggunaan `${}` dipake supaya bisa nampilin data lain ketimbang nyusun satu" menggunakan +
// Switch sama kek if else tapi paling break ya ituu jangan di lupakan ajaa , ama defaultnyaa jika case 1 dan case 2 tidak sama

let namaSaya = "Abidin Ramadhan Prasetyo";
let umurSaya = 16;
let kotaSaya = "Depok";
let pacarSaya = 1;

if (pacarSaya == null) {
  pacarSaya = "Engga ada"
} else {
  pacarSaya = "Ada"
};

// switch (pacarSaya) {
//   case 1:
//     pacarSaya = "Ada 1 Alhamdullilah"
//     break;
//   case 2:
//     pacarSaya = "Play boy gw"
//   default:
//     pacarSaya = "Keknya engga ada"
//     break
// };

alert(
  `Halo nama saya ${namaSaya}, Umur saya ${16} tahun, saya tinggal di ${kotaSaya} saya ${pacarSaya} pacar`
);

// Operator
// Intinya MTK (tandanya kek  "%, *, **, -, +")
let duitAwalSaya = 100000
let duitTambahanOrtu = 15000
const kenaPajak = 10000
const duitAkhir = duitAwalSaya + duitTambahanOrtu - kenaPajak

alert (`Abidin duit awalnya Rp.${duitAwalSaya} Ditambah dari ortu Rp.${duitTambahanOrtu} tetapi kena pajak dengan Rp.${kenaPajak}, jadinya duit sisa Abidin yaitu Rp.${duitAkhir}`)