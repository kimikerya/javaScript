//  Cara membuat array banyak seperti ini

let arrayPertama = ["Abidin", "Davian", "Anraka"];
//  console.log(arrayPertama);

let arrayKedua = [];
arrayKedua[0] = "Dewi";
arrayKedua[1] = "Dunu";
arrayKedua[2] = "Deni";

//  Mengecek panjang data
//  console.log(arrayKedua.length);

//  Mengecek ada datanya di sebuah array
//  intinya bakal output true/false
//  Mengecek index keberapa dengan indexOf

let dataBaruUntukDiCek = ["🤪", "🤤", "😣"];
const cekData = dataBaruUntukDiCek.includes("🤪");
// console.log(cekData);
// console.log(dataBaruUntukDiCek.indexOf('🤪'));

//  Penggunaan if-else
if (cekData) {
  console.log("iya Ada");
} else {
  console.log("ora ada");
}