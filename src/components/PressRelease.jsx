const socials = [
  {
    label: "roseliapuspita@gmail.com",
    href: "mailto:roseliapuspitaa@gmail.com",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "linkedin.com/in/roseliapuspita",
    href: "https://linkedin.com/in/roseliapuspita",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
      </svg>
    ),
  },
  {
    label: "instagram.com/roseliaa._",
    href: "https://instagram.com/roseliaa._/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "wa.me/+6281522671668",
    href: "https://wa.me/6281522671668",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

export default function PressRelease() {
  return (
    <footer id="kontak" className="bg-ink text-newsprint">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <p className="font-type text-xs uppercase tracking-widest text-highlighter">
          Untuk Rilis Segera — For Immediate Release
        </p>

        <div className="mt-4 flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Heading — kiri */}
          <h2 className="font-display font-extrabold text-3xl md:text-5xl max-w-2xl leading-[1.1]">
            Terbuka untuk kolaborasi, liputan, dan peluang baru.
          </h2>

          {/* Sosial — kanan */}
          <div className="flex flex-col gap-4 md:pt-2 shrink-0">
            {socials.map(({ label, href, icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 font-type text-xs uppercase tracking-widest text-newsprint/70 hover:text-highlighter transition-colors w-fit"
              >
                <span className="text-newsprint/50 group-hover:text-highlighter transition-colors">
                  {icon}
                </span>
                <span className="border-b border-newsprint/20 group-hover:border-highlighter transition-colors pb-0.5">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Footer bar — garis pembatas + copyright */}
      <div className="border-t border-newsprint/15">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <p className="font-type text-[10px] uppercase tracking-widest text-newsprint/40 text-center">
            © 2026 Roselia Puspita Asri — Dicetak dengan React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}