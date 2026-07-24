import rosePhoto from "../assets/rose.jpg";

const facts = [
  { label: "Domisili", value: "Surakarta, Jawa Tengah" },
  { label: "Pendidikan", value: "S1 Ilmu Komunikasi, UMS" },
  { label: "Fokus", value: "News · PR · Content" },
  { label: "Status", value: "Open for Work — 2026" },
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
            <p>
              Di luar tugas utama, saya senang mendalami desain editorial, fotografi dokumenter,
              dan menulis esai tentang budaya pop.
            </p>
          </div>

          {/* Foto — dibuat menyatu dengan section, bukan card terpisah */}
          <div className="relative min-h-[300px] md:min-h-0 -mx-6 md:mx-0 overflow-hidden">
            
              <img
                src={rosePhoto}
                alt="Roselia Puspita Asri"
                className="absolute inset-0 w-full h-full object-cover object-[center_75%] grayscale contrast-125"
              />
            
            <div className="absolute inset-0 bg-ink/15" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-extrabold text-8xl text-newsprint/10 select-none">
                R
              </span>
            </div>

            {/* tint duotone biar senada dengan palet situs */}
            <div className="absolute inset-0 bg-press-red mix-blend-multiply opacity-30" />
            <div className="absolute inset-0 bg-ink mix-blend-color opacity-40" />

            {/* tekstur halftone ala cetak koran */}
            <div
              className="absolute inset-0 opacity-30 mix-blend-multiply"
              style={{
                backgroundImage: "radial-gradient(var(--color-ink) 1px, transparent 1.2px)",
                backgroundSize: "4px 4px",
              }}
            />

            {/* fade di tepi biar nyatu ke halaman, bukan kotak tegas */}
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-newsprint to-transparent hidden md:block" />
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-newsprint to-transparent" />

            {/* caption / credit line, overlay langsung di atas foto */}
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
      </div>
    </section>
  );
}