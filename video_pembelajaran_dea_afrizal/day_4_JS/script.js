// Selasa 12/08/25
// Baru 10 menit

// DOM
// Di dalam dom ada document dulu dan isinya seperti
document.body();

// Jika ingin menambahkan sesuatu di halaman bodynya kurleb
const iniBagianBody = document.body;

// Ada banyak cara untuk memasukkan suatu kode untuk beberapa body seperti
// append, textContent, innerText, innerHtml
const menambahkanH1 = document.createElement('h1');
menambahkanH1.textContent = 'gw di h1'