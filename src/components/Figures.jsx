const figures = [
  {
    name: "R.A. Kartini",
    role: "Pejuang emansipasi perempuan",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
    quote: "Habis gelap terbitlah terang.",
  },
  {
    name: "Ir. Soekarno",
    role: "Proklamator & Presiden pertama",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop",
    quote: "Bangsa yang besar adalah bangsa yang menghargai jasa pahlawannya.",
  },
  {
    name: "Cut Nyak Dhien",
    role: "Pahlawan Perang Aceh",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop",
    quote: "Perjuangan belum selesai sebelum merdeka sepenuhnya.",
  },
];

export default function Figures() {
  return (
    <section id="tokoh" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Tokoh Penting</h2>
        <p className="text-gray-600 mt-2">Figur yang berjasa dalam perjalanan bangsa.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {figures.map((f) => (
            <article key={f.name} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={f.img} alt={f.name} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{f.name}</h3>
                <p className="text-sm text-red-700 font-medium">{f.role}</p>
                <p className="mt-3 text-gray-600 text-sm italic">“{f.quote}”</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
