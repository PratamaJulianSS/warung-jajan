import { ArrowUpRight, ImageOff, X } from 'lucide-react'
import { menu, pempekPaket, rupiah, waLink } from '../data'
import { useState } from 'react'

function MenuPhoto({ item }) {
  const [error, setError] = useState(false)
  return error ? (
    <div className="flex h-52 items-center justify-center bg-orange-100 text-6xl" aria-label={item.name}>{item.emoji}</div>
  ) : (
    <img src={item.image} onError={() => setError(true)} alt={item.pempek ? 'Daftar harga resmi Pempek 74' : `Ilustrasi ${item.name}`} loading="lazy" className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
  )
}

function PempekDetail({ onClose }) {
  const [jenis, setJenis] = useState('Kapal Selam')
  const [paket, setPaket] = useState(8)
  const [request, setRequest] = useState('')
  const harga = pempekPaket.find(p => p.pcs === paket)?.price ?? 11000
  const pesan = `Halo Warung Jajan, saya ingin pesan Pempek 74.\nJenis: ${jenis}\nPaket: ${paket} pcs\nHarga: ${rupiah(harga)}\nRequest isian: ${request.trim() || 'Tidak ada'}. Apakah tersedia?`

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <div role="dialog" aria-modal="true" aria-label="Pesan Pempek 74" className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl font-extrabold">Pesan Pempek 74</h3>
          <button type="button" aria-label="Tutup" onClick={onClose} className="rounded-full bg-stone-100 p-2 hover:bg-stone-200"><X size={20}/></button>
        </div>
        <img src={`${import.meta.env.BASE_URL}images/pempek-74.jpeg`} alt="Daftar harga Pempek 74" className="mt-4 max-h-64 w-full rounded-xl object-contain bg-orange-50" />
        <label htmlFor="jenis-pempek" className="mt-5 block text-sm font-bold">Jenis pempek</label>
        <select id="jenis-pempek" value={jenis} onChange={e => setJenis(e.target.value)} className="mt-2 w-full rounded-xl border border-orange-200 bg-white p-3">
          <option>Kapal Selam</option><option>Lenjer</option>
        </select>
        <label htmlFor="paket-pempek" className="mt-4 block text-sm font-bold">Pilih paket</label>
        <select id="paket-pempek" value={paket} onChange={e => setPaket(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-orange-200 bg-white p-3">
          {pempekPaket.map(p => <option key={p.pcs} value={p.pcs}>{p.pcs} pcs — {rupiah(p.price)}</option>)}
        </select>
        <label htmlFor="request-pempek" className="mt-4 block text-sm font-bold">Request isian (opsional)</label>
        <textarea id="request-pempek" rows={2} value={request} onChange={e => setRequest(e.target.value)} placeholder="Contoh: timun dipisah, sambal lebih banyak" className="mt-2 w-full rounded-xl border border-orange-200 p-3" />
        <div className="mt-5 flex items-center justify-between"><span className="text-stone-600">Total harga</span><strong className="text-xl text-orange-700">{rupiah(harga)}</strong></div>
        <a href={waLink(pesan)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 w-full">Pesan via WhatsApp <ArrowUpRight size={18}/></a>
        <p className="mt-3 text-center text-xs text-stone-500">Harga mengikuti daftar Pempek 74. Konfirmasi ketersediaan melalui WhatsApp.</p>
      </div>
    </div>
  )
}

export default function Menu() {
  const [bukaPempek, setBukaPempek] = useState(false)
  return (
    <section id="menu" className="section bg-[#fff7eb]">
      <div className="container-site">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">Pilihan jajanan</span>
          <h2 className="section-title">Menu <span className="text-orange-600">Favorit</span> Kami</h2>
          <p className="mt-4 text-stone-600">Aneka jajanan tradisional, termasuk Pempek 74 dengan pilihan paket. Harga produk lain masih contoh.</p>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map(item => (
            <article key={item.name} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-orange-100 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="overflow-hidden"><MenuPhoto item={item}/></div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-extrabold">{item.name}</h3>
                  <span className="whitespace-nowrap font-extrabold text-orange-600">{item.pempek ? 'Mulai ' : ''}{rupiah(item.price)}</span>
                </div>
                <p className="mt-3 min-h-12 text-sm leading-6 text-stone-600">{item.desc}</p>
                {item.pempek ? (
                  <button type="button" onClick={() => setBukaPempek(true)} className="mt-5 inline-flex items-center gap-2 font-bold text-orange-700 hover:text-orange-900">Pilih paket <ArrowUpRight size={18}/></button>
                ) : (
                  <a href={waLink(`Halo Warung Jajan, saya ingin pesan ${item.name}. Apakah tersedia?`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-orange-700 hover:text-orange-900">Pesan sekarang <ArrowUpRight size={18}/></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      {bukaPempek && <PempekDetail onClose={() => setBukaPempek(false)} />}
    </section>
  )
}
