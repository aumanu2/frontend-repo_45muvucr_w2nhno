export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Jelajah Sejarah Indonesia
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Dari kerajaan kuno hingga era modern, pelajari peristiwa penting yang membentuk jati diri bangsa.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#timeline" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-colors">
                Lihat Linimasa
              </a>
              <a href="#tokoh" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">
                Tokoh Penting
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white/70 p-6 shadow-sm">
            <img src="https://images.unsplash.com/photo-1620549146396-9024d914cd99?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYW5kaSUyMEJvcm9idWR1cnxlbnwwfDB8fHwxNzYyNjYyNTU1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Candi Borobudur" className="rounded-lg object-cover w-full h-72"/>
            <p className="text-xs text-gray-500 mt-2">Candi Borobudur, simbol kejayaan peradaban Nusantara</p>
          </div>
        </div>
      </div>
    </section>
  );
}
