# Warung Jajan
Landing page React + Vite + Tailwind CSS v4.

## Menjalankan
```bash
npm install
npm run dev
```

## Deploy
1. Buat repo GitHub bernama `warung-jajan`.
2. Ubah `base` di `vite.config.js` jika nama repo berbeda.
3. Push ke branch `main`.
4. Di Settings > Pages > Build and deployment, pilih **GitHub Actions**.
5. Workflow `.github/workflows/deploy.yml` akan membangun dan mempublikasikan situs.

## Sebelum publikasi
- Ganti nomor WhatsApp pada `src/data.js`.
- Ganti harga, deskripsi, foto, alamat, jam operasional dan Instagram.
- Foto saat ini ilustrasi eksternal, bukan foto produk asli. Gunakan foto sendiri di `public/images/` dan arahkan path ke `${import.meta.env.BASE_URL}images/namafile.jpg` bila perlu.
- Testimoni masih placeholder.
