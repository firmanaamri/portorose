export default function About() {
  return (
    <section id="tentang" className="bg-ink/[0.03] border-y border-ink/15">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      <span className="font-type text-[11px] uppercase tracking-widest text-press-red">
        Profil
      </span>
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2">
        Tentang Saya
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">
        {/* Bio text */}
        <div className="space-y-4 font-body text-base leading-relaxed text-ink/85 text-justify ">
          <p>
            Saya adalah seorang komunikator muda yang berfokus pada jurnalistik, hubungan
            masyarakat, dan produksi konten digital. Berasal dari Surakarta, Indonesia, saya
            memiliki pengalaman lintas bidang: meliput berita, mengelola media sosial instansi,
            hingga tampil di depan kamera sebagai talent produksi.
          </p>
          <p>
            Latar belakang akademik saya di Ilmu Komunikasi memberi fondasi kuat untuk memahami
            bagaimana pesan dibentuk, disebarkan, dan diterima oleh publik. Saya percaya pada
            komunikasi yang jujur, terukur, dan berdampak.
          </p>
          <p>
            Di luar tugas utama, saya senang mendalami desain editorial, fotografi dokumenter,
            dan menulis esai tentang budaya pop.
          </p>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Domisili", value: "Surakarta, Jawa Tengah" },
            { label: "Pendidikan", value: "S1 Ilmu Komunikasi, UMS" },
            { label: "Fokus", value: "News · PR · Content" },
            { label: "Status", value: "Open for Work — 2026" },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="border border-ink/15 bg-white/40 px-4 py-4 hover:bg-highlighter/10 transition-colors"
            >
              <span className="font-type text-[10px] uppercase tracking-widest text-pencil block mb-1">
                {label}
              </span>
              <span className="font-display font-semibold text-sm leading-snug">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
