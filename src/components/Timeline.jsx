const events = [
  {
    year: "Abad 7-13",
    title: "Kerajaan Sriwijaya",
    description:
      "Kekuatan maritim dan pusat pembelajaran agama Buddha di Asia Tenggara, menguasai jalur perdagangan Selat Malaka.",
  },
  {
    year: "1293-1527",
    title: "Majapahit",
    description:
      "Kerajaan Nusantara terbesar yang mempersatukan banyak wilayah. Masa keemasan di bawah Mahapatih Gajah Mada.",
  },
  {
    year: "1602-1942",
    title: "VOC & Kolonialisme",
    description:
      "Kedatangan bangsa Eropa, berdirinya VOC, monopoli perdagangan, dan perlawanan lokal di berbagai daerah.",
  },
  {
    year: "1908",
    title: "Kebangkitan Nasional",
    description:
      "Budi Utomo menandai kesadaran kebangsaan modern dan lahirnya organisasi pergerakan.",
  },
  {
    year: "1928",
    title: "Sumpah Pemuda",
    description:
      "Ikrar satu tanah air, satu bangsa, dan menjunjung bahasa persatuan: Indonesia.",
  },
  {
    year: "1945",
    title: "Proklamasi Kemerdekaan",
    description:
      "Soekarno-Hatta memproklamasikan kemerdekaan pada 17 Agustus 1945. Awal berdirinya Republik Indonesia.",
  },
  {
    year: "1950-1965",
    title: "Demokrasi Terpimpin",
    description:
      "Periode konsolidasi negara pasca-revolusi dengan dinamika politik dan ekonomi yang kompleks.",
  },
  {
    year: "1966-1998",
    title: "Orde Baru",
    description:
      "Stabilitas politik dan pembangunan ekonomi, namun dibarengi pembatasan kebebasan dan korupsi.",
  },
  {
    year: "1998-sekarang",
    title: "Reformasi & Era Modern",
    description:
      "Transisi demokrasi, otonomi daerah, kebebasan pers, dan perkembangan teknologi serta ekonomi digital.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">Linimasa Sejarah</h2>
        <p className="text-gray-600 mt-2">Sorotan peristiwa penting dari masa ke masa.</p>

        <div className="mt-10 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-gray-200" aria-hidden />
          <div className="space-y-10">
            {events.map((e, idx) => (
              <div key={idx} className="grid md:grid-cols-2 gap-6 items-start">
                <div className={`${idx % 2 === 0 ? 'md:text-right' : ''} md:pr-8 md:col-start-1 ${idx % 2 === 0 ? '' : 'md:col-start-2'}` }>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 text-red-700 text-sm font-medium border border-red-100">
                    {e.year}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-gray-900">{e.title}</h3>
                  <p className="mt-2 text-gray-600">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
