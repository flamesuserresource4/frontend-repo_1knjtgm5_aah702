import { useState } from 'react'
import { Menu, X, HeartPulse, BookOpen, ShieldCheck, FirstAidKit, Leaf, Image, HelpCircle, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#beranda', label: 'Beranda', icon: HeartPulse },
    { href: '#edukasi', label: 'Edukasi', icon: BookOpen },
    { href: '#pencegahan', label: 'Pencegahan', icon: ShieldCheck },
    { href: '#pertolongan', label: 'Pertolongan', icon: FirstAidKit },
    { href: '#ramuan', label: 'Bahan Alami', icon: Leaf },
    { href: '#infografik', label: 'Infografik', icon: Image },
    { href: '#faq', label: 'FAQ', icon: HelpCircle },
    { href: '#kontak', label: 'Kontak', icon: Phone },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#beranda" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-green-500 text-white grid place-items-center shadow-sm">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm leading-tight text-gray-500">Portal</p>
              <p className="-mt-1 font-semibold text-gray-900">Kesehatan Masyarakat</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a key={href} href={href} className="flex items-center gap-2 px-3 py-2 rounded-md text-sm text-gray-700 hover:text-green-700 hover:bg-green-50 transition">
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md border border-gray-200">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-2 gap-2">
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm text-gray-700 hover:text-green-700 hover:bg-green-50 transition">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
