export default function PressRelease() {
  return (
    <footer id="kontak" className="bg-ink text-newsprint">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <p className="font-type text-xs uppercase tracking-widest text-highlighter">
          Untuk Rilis Segera — For Immediate Release
        </p>
        <h2 className="font-display font-extrabold text-3xl md:text-5xl mt-4 max-w-2xl leading-[1.1]">
          Terbuka untuk kolaborasi, liputan, dan peluang baru.
        </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 font-type text-xs uppercase tracking-widest">
          <a href="mailto:roseliapuspita@gmail.com" className="border-b border-newsprint/40 hover:text-highlighter hover:border-highlighter transition-colors">
            Email
          </a>
          <a href="https://linkedin.com/in/roseliapuspita" target="_blank" rel="noopener noreferrer" className="border-b border-newsprint/40 hover:text-highlighter hover:border-highlighter transition-colors">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/roseliaa._/" target="_blank" rel="noopener noreferrer" className="border-b border-newsprint/40 hover:text-highlighter hover:border-highlighter transition-colors">
            Instagram
          </a>
          <a href="https://wa.me/6281522671668" target="_blank" rel="noopener noreferrer" className="border-b border-newsprint/40 hover:text-highlighter hover:border-highlighter transition-colors">
            WhatsApp
          </a>
        </div>

        <p className="font-type text-[10px] uppercase tracking-widest text-newsprint/40 mt-16">
          © 2026 Roselia Puspita Asri — Dicetak dengan React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}