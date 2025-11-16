export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{title}</h2>
          {subtitle && <p className="mt-2 text-gray-600 max-w-3xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
