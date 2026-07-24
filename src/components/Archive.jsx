const articles = [
  {
    outlet: "Kumparan.com",
    date: "2026",
    title: "Hari Kusta Sedunia: FK UMS Ajak Publik Ubah Stigma Jadi Empati",
    link: "https://kumparan.com/humas-and-humed-um-surakarta/hari-kusta-sedunia-fk-ums-ajak-publik-ubah-stigma-jadi-empati-26idXuaBTRH",
  },
  {
    outlet: "Kumparan.com",
    date: "2026",
    title: "UMS Resmi Buka PMB 2026, Luncurkan Beasiswa OSC untuk Siswa Berprestasi",
    link: "https://kumparan.com/humas-and-humed-um-surakarta/ums-resmi-buka-pmb-2026-luncurkan-beasiswa-osc-untuk-siswa-berprestasi-26CfbG4iXdl",
  },
  {
    outlet: "Indonesiana.id",
    date: "2026",
    title: "Mahasiswa Fisioterapi UMS Hadirkan Layanan Kesehatan Komunitas di CFD Solo",
    link: "https://www.indonesiana.id/read/189349/mahasiswa-fisioterapi-ums-hadirkan-layanan-kesehatan-komunitas-di-cfd-solo",
  },
  {
    outlet: "Indonesiana.id",
    date: "2026",
    title: "Banjir Tak Patahkan Asa, Lazismu UMS Salurkan Beasiswa untuk Mahasiswa Sumatra",
    link: "https://share.google/Flvfw9CuJZuV4HGNr",
  },
];

export default function Archive() {
  return (
    <section id="arsip" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <span className="font-type text-[11px] uppercase tracking-widest text-press-red">
        Indeks
      </span>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2">
        Arsip Tulisan
      </h2>

      <ul className="mt-10 divide-y divide-ink/15 border-t border-b border-ink/15">
        {articles.map((a) => (
          <li key={a.link}>
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-baseline gap-1.5 md:gap-6 py-5 hover:bg-highlighter/20 transition-colors px-2 -mx-2"
            >
              <span className="font-type text-[11px] uppercase tracking-widest text-pencil w-40 shrink-0">
                {a.outlet} — {a.date}
              </span>
              <span className="font-display font-semibold text-lg leading-snug group-hover:text-press-red transition-colors">
                {a.title}
              </span>
              <span className="font-type text-[11px] uppercase tracking-widest text-press-red md:ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                Baca →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="font-body text-xs text-pencil mt-4">
        Beberapa tautan sumber tambahan dari liputan yang sama tersedia atas permintaan.
      </p>
    </section>
  );
}