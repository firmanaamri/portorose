import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newsArticles } from "../data/newsData";
import { useInView } from "../hooks/useInView";

const categories = ["Semua", ...new Set(newsArticles.map((a) => a.category))];

function NewsCard({ article, index, inView }) {
  return (
    <article
      className={`group relative bg-white/60 border border-ink/15 overflow-hidden hover:shadow-lg transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        transitionDuration: "0.55s",
      }}
    >
      {/* Category ribbon */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-press-red" />

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="font-type text-[10px] uppercase tracking-widest bg-highlighter/70 px-2 py-0.5 text-ink">
            {article.category}
          </span>
          <span className="font-type text-[10px] uppercase tracking-widest text-pencil">
            {article.date}
          </span>
        </div>

        <h3 className="font-display font-bold text-lg leading-snug group-hover:text-press-red transition-colors duration-200 mt-2">
          {article.title}
        </h3>

        <p className="font-body text-sm text-ink/75 mt-3 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-type text-[10px] uppercase tracking-widest text-pencil">
            {article.outlet} — <span className="text-press-red">{article.role}</span>
          </span>
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-type text-[10px] uppercase tracking-widest text-press-red border-b border-press-red hover:tracking-[0.16em] transition-all duration-200"
          >
            Baca Sumber →
          </a>
        </div>
      </div>
    </article>
  );
}

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [headerRef, headerInView] = useInView();
  const [gridRef, gridInView] = useInView({ threshold: 0.05 });

  const filtered =
    activeCategory === "Semua"
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeCategory);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-newsprint text-ink font-body">
      {/* ── Header bar ─────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-newsprint/95 backdrop-blur-sm border-b border-ink/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="font-display font-extrabold text-lg tracking-wide hover:text-press-red transition-colors"
          >
            rose.
          </Link>
          <Link
            to="/"
            className="font-type text-[11px] uppercase tracking-widest text-pencil hover:text-press-red transition-colors flex items-center gap-2"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </header>

      {/* ── Hero strip ─────────────────────────────────────── */}
      <div
        ref={headerRef}
        className={`border-b border-ink/20 bg-white/30 transition-all duration-700 ease-out ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <span className="font-type text-[11px] uppercase tracking-widest text-press-red">
            Portofolio Jurnalistik
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-3 leading-tight max-w-2xl">
            Semua Berita & Liputan
          </h1>
          <p className="font-body text-sm text-ink/70 mt-4 max-w-xl leading-relaxed">
            Kumpulan karya jurnalistik yang telah dipublikasikan melalui berbagai
            platform media, meliputi liputan berita, reportase kegiatan, dan tulisan
            opini.
          </p>
          <div className="mt-2 font-type text-[11px] uppercase tracking-widest text-pencil">
            {newsArticles.length} artikel terpublikasi
          </div>
        </div>
      </div>

      {/* ── Filter tabs ────────────────────────────────────── */}
      <div className="sticky top-[65px] z-40 bg-newsprint/95 backdrop-blur-sm border-b border-ink/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat}`}
              onClick={() => setActiveCategory(cat)}
              className={`font-type text-[10px] uppercase tracking-widest px-3 py-1.5 border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-press-red text-white border-press-red"
                  : "border-ink/25 hover:border-press-red hover:text-press-red text-pencil"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ───────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((article, i) => (
            <NewsCard
              key={article.id}
              article={article}
              index={i}
              inView={gridInView}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="font-body text-sm text-pencil text-center py-16">
            Tidak ada artikel di kategori ini.
          </p>
        )}

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-ink/15 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="font-body text-xs text-pencil">
            Seluruh artikel merupakan karya jurnalistik yang dipublikasikan atas nama Humas UMS
            selama masa magang.
          </p>
          <Link
            to="/"
            className="font-type text-[11px] uppercase tracking-widest text-press-red border-b border-press-red hover:tracking-[0.15em] transition-all duration-200 self-start md:self-auto"
          >
            ← Kembali ke Beranda
          </Link>
        </div>
      </main>
    </div>
  );
}
