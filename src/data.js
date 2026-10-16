
export const phone = '62882019110898';

// Daftar paket Pempek 74
export const pempekPaket = [
  { pcs: 8, price: 11000 },
  { pcs: 13, price: 16000 },
  { pcs: 18, price: 21000 },
  { pcs: 23, price: 26000 },
  { pcs: 29, price: 31000 },
];

// Lokasi gambar untuk GitHub Pages
const img = (filename) =>
  `${import.meta.env.BASE_URL}images/${filename}`;

// Daftar produk Warung Jajan
export const menu = [
  {
    name: 'Pempek 74',
    price: 11000,
    desc: 'Pempek khas Palembang dengan pilihan Kapal Selam dan Lenjer. Tersedia berbagai paket.',
    image: img('pempek-74.jpeg'),
    emoji: '🍲',
    category: 'Pempek',
    pempek: true,
  },
  {
    name: 'Pempek Kapal Selam 8Pcs',
    price: 11000,
    desc: 'Paket 8 pcs Pempek Kapal Selam, disajikan dengan kuah cuko, timun, dan sambal.',
    image: img('kapal-selam-8.jpg'),
    emoji: '🍲',
    category: 'Pempek',
  },
  {
    name: 'Pempek Kapal Selam 13Pcs',
    price: 16000,
    desc: 'Paket 13 pcs Pempek Kapal Selam, cocok untuk dinikmati bersama.',
    image: img('kapal-selam-13.jpg'),
    emoji: '🍲',
    category: 'Pempek',
  },
  {
    name: 'Pempek Kapal Selam 18Pcs',
    price: 21000,
    desc: 'Paket 18 pcs Pempek Kapal Selam, lengkap dengan kuah cuko.',
    image: img('kapal-selam-18.jpg'),
    emoji: '🍲',
    category: 'Pempek',
  },
  {
    name: 'Pempek Lenjer 8Pcs',
    price: 11000,
    desc: 'Paket 8 pcs Pempek Lenjer dengan tekstur kenyal dan kuah cuko khas.',
    image: img('lenjer-8.jpg'),
    emoji: '🍢',
    category: 'Pempek',
  },
  {
    name: 'Pempek Lenjer 13Pcs',
    price: 16000,
    desc: 'Paket 13 pcs Pempek Lenjer, disajikan dengan kuah cuko dan timun.',
    image: img('lenjer-13.jpg'),
    emoji: '🍢',
    category: 'Pempek',
  },
  {
    name: 'Pempek Lenjer 18Pcs',
    price: 21000,
    desc: 'Paket 18 pcs Pempek Lenjer, cocok untuk keluarga.',
    image: img('lenjer-18.jpg'),
    emoji: '🍢',
    category: 'Pempek',
  },
];

// Format harga Rupiah
export const rupiah = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);

// Link pemesanan WhatsApp
export const waLink = (message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
