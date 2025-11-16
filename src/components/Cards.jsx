import { ShieldCheck, Hand, Syringe, Heart, Apple, AlertTriangle, Bug, Wind, Droplets, Scale, Activity, Stethoscope, Thermometer, Bandage } from 'lucide-react'

export function EdukasiCards() {
  const items = [
    { icon: Heart, title: 'Pengertian Kesehatan Masyarakat', desc: 'Upaya kolektif untuk mencegah penyakit, memperpanjang usia, dan meningkatkan kualitas hidup melalui tindakan masyarakat terorganisir.' },
    { icon: Activity, title: 'Determinan Kesehatan', desc: 'Perilaku, lingkungan, faktor genetik, dan akses layanan kesehatan saling memengaruhi derajat kesehatan.' },
    { icon: ShieldCheck, title: 'PHBS', desc: 'Cuci tangan, konsumsi air bersih, jamban sehat, olahraga teratur, dan tidak merokok sebagai kebiasaan sehari-hari.' },
    { icon: Syringe, title: 'Imunisasi', desc: 'Melindungi dari penyakit menular serius. Ikuti jadwal imunisasi sesuai usia dan rekomendasi tenaga kesehatan.' },
    { icon: AlertTriangle, title: 'Perilaku Berisiko', desc: 'Merokok, konsumsi alkohol berlebihan, kurang tidur, dan aktivitas fisik minim meningkatkan risiko penyakit kronis.' },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
          <div className="h-10 w-10 rounded-lg bg-green-100 text-green-700 grid place-items-center mb-3">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  )
}

export function PencegahanList() {
  const items = [
    { icon: Apple, title: 'Jaga Imunitas', desc: 'Tidur cukup 7-9 jam, olahraga 150 menit/minggu, konsumsi buah dan sayur, kelola stres.' },
    { icon: Droplets, title: 'Hygiene Tangan', desc: 'Cuci tangan 6 langkah selama 20 detik terutama sebelum makan dan setelah dari toilet.' },
    { icon: Wind, title: 'Etika Batuk', desc: 'Tutup mulut dengan tisu/siku, buang tisu ke tempat sampah, cuci tangan setelahnya.' },
    { icon: Hand, title: 'Kebersihan Rumah', desc: 'Rutin pel, bersihkan permukaan yang sering disentuh, pastikan ventilasi baik dan matahari masuk.' },
    { icon: Scale, title: 'Pola Makan Seimbang', desc: 'Piring Makanku: setengah sayur-buah, seperempat protein, seperempat karbohidrat kompleks. Batasi gula, garam, lemak.' },
    { icon: Bug, title: 'Cegah DBD (3M Plus)', desc: 'Menguras, menutup, memanfaatkan kembali barang bekas + gunakan lotion anti nyamuk, perbaiki talang air.' },
    { icon: Wind, title: 'Cegah ISPA', desc: 'Gunakan masker saat sakit/keramaian, jaga jarak, istirahat cukup, minum hangat, konsultasi bila berlanjut.' },
    { icon: Thermometer, title: 'Cegah Diare', desc: 'Air minum bersih matang, cuci tangan, jaga kebersihan makanan, gunakan jamban sehat.' },
    { icon: Activity, title: 'Cegah Obesitas & PTM', desc: 'Pantau IMT, batasi makanan ultra-proses, aktif bergerak, lakukan skrining tekanan darah dan gula darah.' },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
          <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center mb-3">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  )
}

export function FirstAidGuides() {
  const items = [
    { title: 'Demam Ringan', steps: ['Kompres air hangat pada dahi/leher/ketiak', 'Perbanyak minum air, istirahat', 'Gunakan pakaian tipis'] },
    { title: 'Batuk & Sakit Tenggorokan', steps: ['Minum air hangat campur madu/jahe', 'Kumur air garam hangat', 'Hindari minuman dingin dan rokok'] },
    { title: 'Luka Ringan', steps: ['Cuci di air mengalir 5-10 menit', 'Bersihkan sekitar luka, keringkan', 'Tutup dengan kasa steril'] },
    { title: 'Diare Ringan', steps: ['Minum oralit setiap BAB cair', 'Air kelapa untuk rehidrasi', 'Hindari makanan berlemak sementara'] },
    { title: 'Gigitan Serangga', steps: ['Kompres dingin 10-15 menit', 'Oles gel lidah buaya', 'Hindari menggaruk'] },
    { title: 'Perut Kembung', steps: ['Minum wedang jahe hangat', 'Konsumsi pepaya matang secukupnya', 'Gerak ringan/berjalan'] },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ title, steps }) => (
        <div key={title} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            {steps.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <p className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded p-2">Segera ke fasilitas kesehatan bila gejala berat, menetap >3 hari, muncul sesak, dehidrasi, kejang, perdarahan, atau pada bayi/ibu hamil/lansia/komorbid.</p>
        </div>
      ))}
    </div>
  )
}

export function ArtikelPopuler() {
  const items = [
    { title: 'Menjaga Kesehatan Mental di Rumah', content: 'Atur rutinitas, tidur cukup, batasi paparan berita negatif, tetap terhubung dengan keluarga/teman, latihan mindfulness atau ibadah rutin.' },
    { title: 'Kebiasaan Kecil yang Memperpanjang Umur', content: 'Berjalan 8–10 ribu langkah/hari, konsumsi sayur-buah harian, berhenti merokok, minum air cukup, periksa kesehatan berkala.' },
    { title: '5 Kesalahan Umum dalam Menjaga Kesehatan', content: 'Mengabaikan tidur, makan berlebihan saat stres, minum suplemen tanpa kebutuhan, kurang aktivitas, self-diagnosis lewat internet.' },
    { title: 'Mitos vs Fakta', content: 'Mitos: vitamin C menyembuhkan semua flu. Fakta: membantu daya tahan namun bukan obat utama; istirahat dan hidrasi tetap kunci.' },
    { title: 'Bahaya Self-Diagnosis', content: 'Informasi internet sering tidak terverifikasi; pastikan konsultasi tenaga kesehatan terutama jika gejala berat atau berulang.' },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ title, content }) => (
        <article key={title} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{content}</p>
        </article>
      ))}
    </div>
  )
}

export function RamuanAlami() {
  const items = [
    { title: 'Jahe', manfaat: 'Menghangatkan tubuh, membantu keluhan mual/kembung, meredakan tenggorokan tidak nyaman.' , risiko: 'Dapat mengiritasi lambung bila berlebihan; hati-hati pada penderita batu empedu.'},
    { title: 'Kunyit', manfaat: 'Mendukung kesehatan pencernaan dan antiinflamasi ringan.', risiko: 'Dapat berinteraksi dengan obat pengencer darah; batasi pada gangguan empedu.'},
    { title: 'Madu', manfaat: 'Menenangkan batuk pada anak >1 tahun dan dewasa, sumber energi cepat.', risiko: 'Jangan diberikan pada bayi <1 tahun (risiko botulisme).'},
    { title: 'Air Garam', manfaat: 'Kumur untuk tenggorokan sakit dan gusi bengkak.', risiko: 'Jangan ditelan berlebihan; perhatikan tekanan darah.'},
    { title: 'Lidah Buaya', manfaat: 'Gel membantu meredakan iritasi kulit ringan atau gigitan serangga.', risiko: 'Hindari pada luka terbuka dalam; patch test untuk alergi.'},
    { title: 'Daun Mint', manfaat: 'Aroma menyegarkan, membantu mual ringan saat dihirup atau sebagai teh hangat.', risiko: 'Dapat memperberat GERD pada sebagian orang.'},
    { title: 'Air Kelapa', manfaat: 'Rehidrasi ringan karena mengandung elektrolit.', risiko: 'Perhatikan pada diabetes; tidak menggantikan cairan infus saat dehidrasi berat.'},
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(({ title, manfaat, risiko }) => (
        <div key={title} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-700"><span className="font-medium">Manfaat:</span> {manfaat}</p>
          <p className="mt-2 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded p-2"><span className="font-medium">Batasan/Risiko:</span> {risiko}</p>
        </div>
      ))}
    </div>
  )
}

export function Infografik() {
  const items = [
    { title: '6 Langkah Cuci Tangan', points: ['Basahi tangan & sabuni', 'Gosok telapak tangan', 'Punggung tangan', 'Sela-sela jari', 'Kuku & ibu jari', 'Bilas & keringkan'] },
    { title: 'Tanda Bahaya Serius', points: ['Sesak napas hebat', 'Demam tinggi >39°C menetap', 'Nyeri dada', 'Penurunan kesadaran', 'Dehidrasi berat pada anak'] },
    { title: 'Membuat Oralit', points: ['1 gelas (200 ml) air matang', '1/2 sendok teh garam', '2 sendok teh gula', 'Aduk hingga larut'] },
    { title: 'PHBS', points: ['Air bersih & jamban sehat', 'Cuci tangan', 'Makanan bergizi', 'Olahraga', 'Tidak merokok', 'Kelola sampah'] },
  ]
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map(({ title, points }) => (
        <div key={title} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
            {points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function FAQ() {
  const items = [
    { q: 'Kapan harus periksa ke dokter?', a: 'Jika gejala berat, tiba-tiba, tidak membaik >3 hari, atau ada tanda bahaya seperti sesak, dehidrasi, perdarahan, nyeri dada, atau pada bayi/ibu hamil/lansia/komorbid.' },
    { q: 'Bahan alami apa yang aman untuk anak?', a: 'Gunakan yang sederhana: madu untuk batuk pada anak >1 tahun, kompres hangat untuk demam, air garam untuk kumur pada anak yang sudah bisa berkumur. Selalu perhatikan alergi dan dosis sesuai usia.' },
    { q: 'Bolehkah mencampur obat dan herbal?', a: 'Hindari mencampur tanpa saran tenaga kesehatan karena interaksi dapat terjadi (misal kunyit/jahe dengan pengencer darah). Pisahkan waktu konsumsi dan konsultasikan.' },
    { q: 'Berapa sering harus olahraga?', a: 'Setidaknya 150 menit/minggu intensitas sedang atau 75 menit intensitas tinggi, ditambah latihan kekuatan 2x/minggu.' },
  ]
  return (
    <div className="space-y-3">
      {items.map(({ q, a }) => (
        <details key={q} className="group bg-white border border-gray-200 rounded-xl p-4">
          <summary className="cursor-pointer font-medium text-gray-900 flex items-center justify-between">
            {q}
            <span className="text-green-600 group-open:rotate-45 transition">+</span>
          </summary>
          <p className="mt-2 text-sm text-gray-600">{a}</p>
        </details>
      ))}
    </div>
  )
}

export function KontakRujukan() {
  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-6">
        <a className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition" href="https://www.kemkes.go.id/" target="_blank" rel="noreferrer">
          <h3 className="font-semibold text-gray-900">Kemenkes RI</h3>
          <p className="text-sm text-gray-600">Kementerian Kesehatan Republik Indonesia</p>
        </a>
        <a className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition" href="https://www.who.int/" target="_blank" rel="noreferrer">
          <h3 className="font-semibold text-gray-900">WHO</h3>
          <p className="text-sm text-gray-600">Organisasi Kesehatan Dunia</p>
        </a>
        <a className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition" href="https://www.cdc.gov/" target="_blank" rel="noreferrer">
          <h3 className="font-semibold text-gray-900">CDC</h3>
          <p className="text-sm text-gray-600">Centers for Disease Control and Prevention</p>
        </a>
        <a className="block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition" href="https://promkes.kemkes.go.id/" target="_blank" rel="noreferrer">
          <h3 className="font-semibold text-gray-900">Promosi Kesehatan</h3>
          <p className="text-sm text-gray-600">Sumber promosi kesehatan resmi</p>
        </a>
      </div>
      <p className="text-xs text-gray-600">Disclaimer: Konten hanya edukasi, bukan pengganti konsultasi medis.</p>
    </div>
  )
}
