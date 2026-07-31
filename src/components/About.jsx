import rosePhoto from "../assets/rose.jpg";

const facts = [
  { label: "Domisili", value: "Surakarta, Jawa Tengah" },
  { label: "Pendidikan", value: "S1 Ilmu Komunikasi, UMS" },
  { label: "Fokus", value: "News · PR · Content" },
  { label: "Status", value: "Open for Work — 2026" },
];

const experiences = [
  {
    period: "Sekarang",
    type: "Organisasi",
    title: "Indonesian Youth Research Center",
    place: "IYORC",
    desc: "IYORC adalah lembaga riset kepemudaan yang dibentuk untuk menghidupkan ekosistem penelitian dan literasi ilmiah di kalangan generasi muda.",
    tags: ["Organisasi", "Penelitian", "Literasi Ilmiah"]
  },
  {
    period: "2025",
    type: "Magang",
    title: "News Reporter & Content Creator",
    place: "Humas UMS — Universitas Muhammadiyah Surakarta",
    desc: "Meliput dan menulis berita kegiatan, kebijakan, dan pencapaian institusi melalui wawancara serta observasi lapangan dengan kaidah piramida terbalik dan 5W+1H. Memproduksi konten media sosial harian, termasuk infografis dan video pendek. Tampil sebagai talent produksi video Humas UMS.",
    tags: ["Jurnalistik", "Media Sosial", "Video Production", "Copywriting"],
  },
  {
    period: "2025",
    type: "Magang",
    title: "Content Creator & Front Officer",
    place: "DPMPTSP Kabupaten Karanganyar",
    desc: "Mengelola penuh Instagram, TikTok, dan Facebook instansi: produksi konten harian, penyusunan kalender konten, dan evaluasi performa mingguan. Berperan sebagai front officer untuk stakeholder eksternal dan tamu institusi.",
    tags: ["Instagram", "TikTok", "Konten Harian", "Front Officer"],
  },
  {
    period: "2025",
    type: "Produksi Berita",
    title: "News Reporter & Videographer",
    place: "TV Mu — Televisi Muhammadiyah",
    desc: "Menulis naskah dan mengambil footage liputan Masta PMB Batch 2, mencakup pernyataan Rektor & Wakil Rektor UMS mengenai inklusivitas serta testimoni mahasiswa non-muslim dan internasional tentang toleransi kampus.",
    tags: ["Reportase TV", "Naskah Berita", "Videografi", "Wawancara"],
  }
  ];

export default function About() {
  return (
    <section id="tentang" className="border-y border-ink/15">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <span className="font-type text-[11px] uppercase tracking-widest text-press-red">
          Profil
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2">
          Tentang Saya
        </h2>

        <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-6 mt-10 items-stretch">
          {/* Bio */}
          <div className="space-y-4 font-body text-base leading-relaxed text-ink/85 text-justify max-w-xl py-2">
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
          </div>

          {/* Foto */}
          <div className="relative min-h-[300px] md:min-h-0 -mx-6 md:mx-0 overflow-hidden">
            <img
              src={rosePhoto}
              alt="Roselia Puspita Asri"
              className="absolute inset-0 w-full h-full object-cover object-[center_65%] grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-ink/15" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-extrabold text-8xl text-newsprint/10 select-none">
                R
              </span>
            </div>
            <div className="absolute inset-0 bg-press-red mix-blend-multiply opacity-30" />
            <div className="absolute inset-0 bg-ink mix-blend-color opacity-40" />
            <div
              className="absolute inset-0 opacity-30 mix-blend-multiply"
              style={{
                backgroundImage: "radial-gradient(var(--color-ink) 1px, transparent 1.2px)",
                backgroundSize: "4px 4px",
              }}
            />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-newsprint to-transparent hidden md:block" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-newsprint to-transparent" />

            {/* caption overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-newsprint/85 backdrop-blur-sm border-t border-ink/15">
              <div className="grid grid-cols-2 divide-x divide-y divide-ink/10">
                {facts.map(({ label, value }) => (
                  <div key={label} className="px-4 py-3">
                    <span className="font-type text-[9px] uppercase tracking-widest text-pencil block mb-0.5">
                      {label}
                    </span>
                    <span className="font-display font-semibold text-xs leading-snug">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pengalaman */}
        <div className="mt-16 pt-10 border-t border-ink/15">
          <span className="font-type text-[11px] uppercase tracking-widest text-press-red">
            Rekam Jejak
          </span>
          <h3 className="font-display font-extrabold text-2xl md:text-3xl mt-2">
            Pengalaman & Organisasi
          </h3>

          <div className="mt-8 divide-y divide-ink/12">
            {experiences.map(({ period, type, title, place, desc, tags }) => (
              <div
                key={title}
                className="group grid md:grid-cols-[200px_1fr] gap-3 md:gap-10 py-7 hover:bg-highlighter/10 transition-colors px-2 -mx-2"
              >
                <div className="shrink-0">
                  <span className="font-type text-[10px] uppercase tracking-widest text-press-red block">
                    {period}
                  </span>
                  <span className="font-type text-[10px] uppercase tracking-widest text-pencil block mt-1">
                    {type}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg leading-snug group-hover:text-press-red transition-colors">
                    {title}
                  </h4>
                  <p className="font-type text-[11px] uppercase tracking-widest text-pencil mt-1">
                    {place}
                  </p>
                  <p className="font-body text-sm text-ink/75 mt-3 leading-relaxed max-w-2xl text-justify">
                    {desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-type text-[9px] uppercase tracking-widest bg-highlighter/60 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}