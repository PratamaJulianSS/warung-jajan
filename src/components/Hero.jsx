
import { ArrowRight, Heart, Star } from 'lucide-react'

export default function Hero() {
  const heroImage = `${import.meta.env.BASE_URL}images/hero-warung.jpg`

  return (
    <section
      id="beranda"
      className="overflow-hidden bg-[#fff4df]"
    >
      <div className="container-site grid min-h-[590px] items-center gap-12 py-16 lg:grid-cols-2">

        {/* BAGIAN TEKS HERO */}
        <div>
          <span className="eyebrow">
            ✨ Cita rasa tradisional, selalu istimewa
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[1.12] tracking-tight text-stone-900 sm:text-6xl">
            Cemilan WoW,
            <br />
            <span className="text-orange-600">
              Rasa yang Bikin
            </span>
            <br />
            Kangen.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-stone-600">
            Nikmati kelezatan jajanan tradisional Indonesia,
            dibuat dengan sepenuh hati untuk menemani
            momen spesialmu.
          </p>

          {/* TOMBOL */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="btn-primary">
              Jelajahi Menu
              <ArrowRight size={18} />
            </a>

            <a href="#tentang" className="btn-outline">
              Cerita Kami
            </a>
          </div>

          {/* INFORMASI */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-stone-700">
            <span className="flex items-center gap-2">
              <Heart
                size={18}
                className="text-orange-600"
              />
              Dibuat dengan cinta
            </span>

            <span className="flex items-center gap-2">
              <Star
                size={18}
                className="fill-amber-400 text-amber-400"
              />
              Cita rasa rumahan
            </span>
          </div>
        </div>

        {/* BAGIAN GAMBAR HERO */}
        <div className="relative">

          {/* EFEK CAHAYA DI BELAKANG GAMBAR */}
          <div className="absolute -inset-5 rounded-[3rem] bg-orange-200/50 blur-3xl" />

          {/* FOTO HERO */}
          <img
            src={heroImage}
            alt="Aneka jajanan Warung Jajan"
            className="relative h-[390px] w-full rounded-[2.5rem] object-cover shadow-2xl sm:h-[490px]"
          />

          {/* KARTU INFORMASI */}
          <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-xl sm:left-[-20px]">
            <p className="text-xs text-stone-500">
              Dibuat setiap hari
            </p>

            <p className="font-bold text-orange-700">
              Hangat & penuh rasa ❤️
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
