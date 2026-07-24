import rosPhoto from "../assets/ros.JPG";
import Button from "./Button";

export default function Hero({ ready }) {
  return (
    <section className="border-b border-ink/20">
      {/* perforated strip, top */}
      <div className="h-3.5 bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_8px,transparent_8px_22px)] bg-[length:22px_6px] bg-center bg-repeat-x opacity-80" />

      {/* frame meta */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between font-type text-[11px] uppercase tracking-widest text-pencil">
        <span>ED.2026.01</span>
        <span>Surakarta, Indonesia</span>
      </div>

      {/* headline */}
      <div className="max-w-6xl mx-auto px-6 pb-14 md:pb-20">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-20">
          {/* Left: headline + roles */}
          <div className={`flex-1 min-w-0 pt-10 md:pt-16 transition-all duration-700 ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <span className="relative inline-block">
              {/* corner brackets */}
              <span className="absolute -top-3.5 -left-3.5 w-6 h-6 border-t-[3px] border-l-[3px] border-press-red opacity-0 [animation:af-snap_1s_ease-out_0.3s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none" />
              <span className="absolute -bottom-3.5 -right-3.5 w-6 h-6 border-b-[3px] border-r-[3px] border-press-red opacity-0 [animation:af-snap_1s_ease-out_0.3s_forwards] motion-reduce:opacity-100 motion-reduce:animate-none" />

              <h1 className="font-display font-extrabold uppercase leading-[0.95] text-[clamp(2.75rem,9vw,6.5rem)] max-w-2xl text-press-red">
                Roselia
                <br />
              </h1>
              <h1 className="font-display font-extrabold uppercase leading-[0.95] text-[clamp(2.75rem,9vw,6.5rem)] max-w-2xl text-black">Puspita Asri</h1>
            </span>

            <div className={`flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 font-type text-sm transition-all duration-700 delay-150 ease-out ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span>News Reporter</span>
              <span className="text-pencil">/</span>
              <span>Public Relations</span>
              <span className="text-pencil">/</span>
              <span className="text-pencil">Administration</span>
            </div>

            {/* CTA buttons */}
            <div className={`flex flex-wrap gap-3 mt-8 transition-all duration-700 ease-out [transition-delay:300ms] ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button
                variant="solid"
                href="/Roselia_Resume.pdf"
                external
              >
                Lihat CV
              </Button>
              <Button
                variant="outline"
                href="#kontak"
              >
                Hubungi Saya
              </Button>
            </div>
          </div>

          {/* Right: photo card */}
          <div className="mt-10 md:mt-0 shrink-0 self-start mx-auto md:mx-0">
            {/* polaroid-style wrapper, slight tilt */}
            <div className="rotate-[1.5deg] hover:rotate-0 transition-transform duration-500 ease-in-out w-52 md:w-60 lg:w-64">
              <div className="bg-white border border-ink/20 shadow-md p-2 pb-0">
                {/* photo area */}
                <div className="w-full aspect-[3/4] bg-ink/[0.06] overflow-hidden relative">
                  {/* placeholder illustration — replace src with real photo */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-pencil/40"></div>
                  <img
                    src={rosPhoto}
                    alt="Roselia Puspita Asri"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* polaroid caption strip */}
                <div className="py-3 px-1 text-center">
                  <span className="font-type text-[10px] uppercase tracking-widest text-pencil">
                    Roselia · Surakarta · 2026
                  </span>
                </div>
              </div>
              {/* film-strip holes top */}
              <div className="flex justify-between px-1 -mt-0.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="w-2 h-1.5 bg-newsprint border border-ink/15 rounded-[1px]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* exif-style strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-ink/30">
        {[
          ["Beat", "News · PR · Content"],
          ["Status", "Open for Work"],
          ["Edition", "2026"],
          ["Desk", "Reporting · PR · Admin"],
        ].map(([label, value], i) => (
          <div
            key={label}
            className={`px-5 py-3.5 font-type text-[11px] uppercase tracking-wide border-ink/15 ${
              i < 3 ? "md:border-r" : ""
            } ${i % 2 === 0 ? "border-r md:border-r-0" : ""} border-b md:border-b-0`}
          >
            <span className="block text-pencil text-[10px] mb-1">{label}</span>
            {value}
          </div>
        ))}
      </div>

      {/* perforated strip, bottom */}
      <div className="h-3.5 bg-[repeating-linear-gradient(90deg,var(--color-ink)_0_8px,transparent_8px_22px)] bg-[length:22px_6px] bg-center bg-repeat-x opacity-80" />
    </section>
  );
}
