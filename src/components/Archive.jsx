import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";
import { newsArticles } from "../data/newsData";

// Show only the first 3 featured articles on the homepage
const featured = newsArticles.slice(0, 3);

export default function Archive() {
  const [headerRef, headerInView] = useInView();
  const [listRef, listInView] = useInView({ threshold: 0.08 });

  return (
    <section id="arsip" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
      {/* Section header */}
      <div
        ref={headerRef}
        className={`flex items-end justify-between transition-all duration-700 ease-out ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <span className="font-type text-[11px] uppercase tracking-widest text-press-red">
            Indeks
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2">
            Arsip Tulisan
          </h2>
        </div>

        {/* "Lihat Semua" button */}
        <Link
          to="/berita"
          id="lihat-semua-berita"
          className="hidden md:flex items-center gap-2 font-type text-[11px] uppercase tracking-widest text-press-red border-b border-press-red hover:tracking-[0.15em] transition-all duration-200 pb-0.5"
        >
          Lihat Semua ({newsArticles.length}) →
        </Link>
      </div>

      {/* List items — slide in from left, staggered */}
      <ul
        ref={listRef}
        className="mt-10 divide-y divide-ink/15 border-t border-b border-ink/15"
      >
        {featured.map((a, i) => (
          <li
            key={a.id}
            className={`transition-all ease-out ${
              listInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
            }`}
            style={{ transitionDuration: "0.55s", transitionDelay: `${i * 90}ms` }}
          >
            <a
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-baseline gap-1.5 md:gap-6 py-5 hover:bg-highlighter/20 transition-colors px-2 -mx-2"
            >
              <span className="font-type text-[11px] uppercase tracking-widest text-pencil w-44 shrink-0">
                {a.outlet} — {a.date}
              </span>
              <div className="flex-1 min-w-0">
                <span className="font-display font-semibold text-lg leading-snug group-hover:text-press-red transition-colors block">
                  {a.title}
                </span>
                <span className="font-type text-[10px] uppercase tracking-widest text-pencil/70 mt-1 block">
                  {a.category} · {a.role}
                </span>
              </div>
              <span className="font-type text-[11px] uppercase tracking-widest text-press-red md:ml-auto opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                Baca →
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile "Lihat Semua" button */}
      <div className="mt-6 flex items-center justify-between">
        <p className="font-body text-xs text-pencil">
          Menampilkan 3 dari {newsArticles.length} artikel. Beberapa tautan sumber tambahan tersedia atas permintaan.
        </p>
        <Link
          to="/berita"
          className="md:hidden font-type text-[11px] uppercase tracking-widest text-press-red border-b border-press-red hover:tracking-[0.15em] transition-all duration-200"
        >
          Lihat Semua →
        </Link>
      </div>

      {/* Desktop teaser cards */}
      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {newsArticles.slice(3, 6).map((a, i) => (
          <div
            key={a.id}
            className={`border border-ink/10 bg-white/40 p-4 transition-all duration-700 ease-out ${
              listInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${(i + 3) * 90}ms` }}
          >
            <span className="font-type text-[9px] uppercase tracking-widest bg-highlighter/60 px-1.5 py-0.5">
              {a.category}
            </span>
            <p className="font-display font-semibold text-sm leading-snug mt-2 line-clamp-2">
              {a.title}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="font-type text-[9px] text-pencil uppercase tracking-widest">
                {a.date}
              </span>
              <Link
                to="/berita"
                className="font-type text-[9px] uppercase tracking-widest text-press-red hover:underline"
              >
                Lihat →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <div className="mt-8 border border-ink/15 bg-white/30 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-base">
            Ada {newsArticles.length} artikel terpublikasi di portofolio ini.
          </p>
          <p className="font-body text-xs text-pencil mt-1">
            Liput berita, reportase, dan tulisan kampanye sepanjang masa magang di Humas UMS.
          </p>
        </div>
        <Link
          to="/berita"
          id="cta-lihat-berita"
          className="shrink-0 font-type text-[11px] uppercase tracking-widest bg-press-red text-white px-5 py-2.5 hover:bg-press-red/85 transition-colors duration-200"
        >
          Buka Halaman Berita →
        </Link>
      </div>
    </section>
  );
}