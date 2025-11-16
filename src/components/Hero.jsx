import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.15),transparent_50%)]"/>
      <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full mb-4">
              <ShieldCheck className="h-4 w-4" />
              Edukasi Kesehatan Terverifikasi
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Sehat Dimulai dari Pengetahuan yang Benar.
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg">
              Portal ringkas untuk memahami kesehatan masyarakat: dari pencegahan harian hingga pertolongan pertama yang aman.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pencegahan" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg shadow-sm transition">
                Mulai dari Pencegahan
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#edukasi" className="inline-flex items-center gap-2 bg-white text-gray-800 px-5 py-3 rounded-lg border border-gray-200 hover:border-gray-300">
                Baca Edukasi Dasar
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 p-6">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
                alt="Ilustrasi kesehatan masyarakat"
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
