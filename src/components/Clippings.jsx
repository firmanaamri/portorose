import { useInView } from "../hooks/useInView";

const items = [
  {
    kicker: "Kampanye PR",
    title: "Campaign Attachment Style",
    dateline: "Ilmu Komunikasi — Tugas Akhir Semester",
    desc: "Merancang dan menjalankan kampanye komunikasi selama satu semester bertema attachment style, dengan konten mingguan berupa infografis, reels, dan Instagram Stories.",
    link: "https://www.instagram.com/ruanggema.soc",
    linkLabel: "Lihat kampanye →",
  },
  {
    kicker: "Magang — Media Sosial",
    title: "DPMPTSP Kabupaten Karanganyar",
    dateline: "Content Creator & Front Officer",
    desc: "Mengelola penuh Instagram, TikTok, dan Facebook instansi: produksi konten harian, penyusunan kalender konten, evaluasi performa mingguan, serta menjadi front officer untuk stakeholder eksternal.",
    link: "https://www.instagram.com/reels/DJ_ysd-Pvzv/",
    linkLabel: "Lihat contoh konten →",
  },
  {
    kicker: "Magang — Jurnalistik",
    title: "News Reporter, Humas UMS",
    dateline: "Hubungan Masyarakat — Universitas Muhammadiyah Surakarta",
    desc: "Meliput dan menulis berita kegiatan, kebijakan, dan pencapaian institusi melalui wawancara serta observasi lapangan, mengikuti kaidah piramida terbalik dan 5W+1H. Juga tampil sebagai talent produksi video Humas.",
    link: null,
  },
  {
    kicker: "Produksi Berita TV",
    title: "News Reporter, TV Mu",
    dateline: "Naskah Reportase & Videographer",
    desc: "Menulis naskah dan mengambil footage liputan Masta PMB Batch 2, mencakup pernyataan Rektor & Wakil Rektor UMS soal inklusivitas serta testimoni mahasiswa non-muslim dan internasional tentang toleransi kampus.",
    link: "https://youtu.be/W4tD3jg08XU?si=ZsJCLkEU9Y1PfExn",
    linkLabel: "Tonton liputan →",
  },
];

export default function Clippings() {
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView({ threshold: 0.08 });

  return (
    <section id="karya" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      {/* Section header — slides up on scroll */}
      <div
        ref={headerRef}
        className={`transition-all duration-700 ease-out ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <span className="font-type text-[11px] uppercase tracking-widest text-press-red">
          Rubrik
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2">
          Liputan &amp; Kampanye
        </h2>
      </div>

      {/* Cards grid — staggered fade-up */}
      <div ref={gridRef} className="grid md:grid-cols-2 gap-6 mt-10">
        {items.map((item, i) => (
          <article
            key={item.title}
            className={`bg-white/50 border border-ink/15 p-6 shadow-sm hover:rotate-0 hover:shadow-md transition-all duration-300 ${
              i % 2 === 1 ? "-rotate-[0.6deg]" : "rotate-[0.4deg]"
            } ${
              gridInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transition: `opacity 0.6s ease-out ${i * 110}ms, transform 0.6s ease-out ${i * 110}ms, box-shadow 0.3s, rotate 0.3s`,
            }}
          >
            <span className="font-type text-[10px] uppercase tracking-widest bg-highlighter/70 px-1.5 py-0.5">
              {item.kicker}
            </span>
            <h3 className="font-display font-bold text-xl mt-3 leading-snug">
              {item.title}
            </h3>
            <p className="font-type text-[11px] uppercase tracking-wide text-pencil mt-2">
              {item.dateline}
            </p>
            <p className="font-body text-sm text-ink/80 mt-3 leading-relaxed">
              {item.desc}
            </p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-type text-[11px] uppercase tracking-widest text-press-red mt-4 inline-block border-b border-press-red hover:tracking-[0.15em] transition-all duration-200"
              >
                {item.linkLabel}
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}