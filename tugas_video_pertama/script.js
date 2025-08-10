// Tugas Kecil

// 1.Prompt untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
// 2.Menentukan hari dari tanggal yang ada saat ini di pc kalian

// let inputSaldoCostumer = prompt("Tolong masukan saldo akhir camu");
// alert(inputSaldoCostumer);

let hari = new Date().getDay();
switch (hari) {
  case 0:
    hari = "Minggu";
    break;
  case 1:
    hari = "Senin";
    break;
  case 2:
    hari = "Selasa";
    break;
  case 3:
    hari = "Rabu";
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari = "Jum'at";
    break;
  case 6:
    hari = "Sabtu";
    break;
}
console.log(`Hari ini adalah ${hari}`);

// console.log(`Hari ini adalah hari ${hari}`)

// const namaHari = ["Minggu", "Senin", "Selasa"];
// console.log(namaHari[0]);
