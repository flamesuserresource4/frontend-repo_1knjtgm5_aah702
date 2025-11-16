import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import { EdukasiCards, PencegahanList, FirstAidGuides, ArtikelPopuler, RamuanAlami, Infografik, FAQ, KontakRujukan } from './components/Cards'

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row gap-2 justify-between">
        <p>© {new Date().getFullYear()} Portal Kesehatan Masyarakat</p>
        <p>Warna utama: hijau/putih/abu • Desain responsif & ramah mobile</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Hero />

      <Section id="edukasi" title="Edukasi Dasar Kesehatan Masyarakat" subtitle="Ringkasan konsep penting yang mudah dipahami.">
        <EdukasiCards />
      </Section>

      <Section id="pencegahan" title="Pencegahan Penyakit Harian" subtitle="Langkah sederhana yang bisa dilakukan setiap hari.">
        <PencegahanList />
      </Section>

      <Section id="pertolongan" title="Tindakan Awal & Pertolongan Pertama" subtitle="Panduan singkat, aman, dan mudah diikuti di rumah.">
        <FirstAidGuides />
      </Section>

      <Section id="artikel" title="Artikel Pengetahuan Kesehatan Populer">
        <ArtikelPopuler />
      </Section>

      <Section id="ramuan" title="Bahan Alami & Ramuan Rumahan yang Aman">
        <RamuanAlami />
      </Section>

      <Section id="infografik" title="Infografik / Visual">
        <Infografik />
      </Section>

      <Section id="faq" title="FAQ - Pertanyaan yang Sering Diajukan">
        <FAQ />
      </Section>

      <Section id="kontak" title="Kontak & Rujukan">
        <KontakRujukan />
      </Section>

      <Footer />
    </div>
  )
}

export default App
