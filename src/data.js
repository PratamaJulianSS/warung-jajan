export const phone = '6281234567890' // Ganti dengan nomor WhatsApp warung
export const pempekPaket = [
  { pcs: 8, price: 11000 },
  { pcs: 13, price: 16000 },
  { pcs: 18, price: 21000 },
  { pcs: 23, price: 26000 },
  { pcs: 29, price: 31000 },
]
export const menu = [
  {name:'Pempek 74', price:11000, desc:'Pempek Kapal Selam atau Lenjer, tersedia berbagai pilihan paket. Isian bisa request.', image:`${import.meta.env.BASE_URL}images/pempek-74.jpeg`, emoji:'🍲', pempek:true},
  {name:'Pempek Kapal Selam', price:5000, desc:'Bola ketan pandan, gula merah lumer, dan kelapa parut.', image:'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80', emoji:'🍡'},
  {name:'Pempek Kapal Selam', price:4000, desc:'Ketan gurih dengan isian ayam berbumbu.', image:'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80', emoji:'🍙'},
  {name:'Pempek Kapal Selam', price:5000, desc:'Kulit wijen renyah dengan isian kacang hijau.', image:'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80', emoji:'🥮'},
  {name:'Putu Ayu', price:5000, desc:'Kue pandan lembut dengan taburan kelapa.', image:'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80', emoji:'🧁'},
  {name:'Nagasari', price:4000, desc:'Kue tepung beras berisi pisang yang legit.', image:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80', emoji:'🍌'},
  {name:'Dadar Gulung', price:5000, desc:'Kulit pandan lembut dengan unti kelapa manis.', image:'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80', emoji:'🥞'},
]
export const rupiah = value => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(value)
export const waLink = message => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
