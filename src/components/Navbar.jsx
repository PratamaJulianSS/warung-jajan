import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
const links = [['#beranda','Beranda'],['#tentang','Tentang'],['#menu','Menu'],['#galeri','Galeri'],['#kontak','Kontak']]
export default function Navbar(){
 const [open,setOpen]=useState(false)
 return <header className="sticky top-0 z-50 border-b border-orange-100 bg-[#fffaf1]/95 backdrop-blur"><nav className="container-site flex h-20 items-center justify-between"><a href="#beranda" className="flex items-center gap-2 text-xl font-extrabold text-orange-800"><span className="rounded-xl bg-orange-600 p-2 text-white"><ShoppingBag size={21}/></span>Warung Safa Berkah</a><div className="hidden items-center gap-8 md:flex">{links.map(([href,label])=><a key={href} href={href} className="text-sm font-semibold text-stone-700 hover:text-orange-600">{label}</a>)}</div><a href="#menu" className="btn-primary hidden md:inline-flex">Lihat Menu</a><button aria-label={open?'Tutup menu':'Buka menu'} aria-expanded={open} onClick={()=>setOpen(!open)} className="rounded-lg p-2 text-orange-800 md:hidden">{open?<X/>:<Menu/>}</button></nav>{open&&<div className="border-t border-orange-100 bg-[#fffaf1] px-6 pb-5 md:hidden">{links.map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)} className="block border-b border-orange-100 py-3 font-medium">{label}</a>)}</div>}</header>
}
