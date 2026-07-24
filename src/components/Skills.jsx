import Highlight from "./Highlight";

const beats = [
  {
    label: "News Reporting",
    terms: ["News Coverage & Broadcasting", "Copy Writing", "Press Release & Article", "News SEO"],
  },
  {
    label: "Public Relations",
    terms: [
      "Corporate Social Responsibility",
      "Event Organizing",
      "Risk Management",
      "Stakeholder Management",
      "Master of Ceremony",
      "Public Communication",
    ],
  },
  {
    label: "Content & Digital Media",
    terms: [
      "Social Media Management",
      "Content Production",
      "Content Analytics",
      "Multi-Platform Adaptability",
      "Editing (CapCut & Canva)",
    ],
  },
  {
    label: "Administration",
    terms: [
      "Document Management",
      "News Release Coordination",
      "Event Administration",
      "Public Service",
      "Activity Documentation",
    ],
  },
  {
    label: "Research",
    terms: ["Content Analysis Media", "Persuasive Communication", "Environmental Conservation"],
  },
];

export default function Skills() {
  return (
    <section id="keahlian" className="bg-ink/[0.03] border-y border-ink/15">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <span className="font-type text-[11px] uppercase tracking-widest text-press-red">
          Meja Redaksi
        </span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2">
          Keahlian
        </h2>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-10">
          {beats.map((beat) => (
            <div key={beat.label}>
              <h3 className="font-type text-[11px] uppercase tracking-widest text-pencil mb-2">
                {beat.label}
              </h3>
              <p className="font-body text-base leading-loose">
                {beat.terms.map((term, i) => (
                  <span key={term}>
                    <Highlight>{term}</Highlight>
                    {i < beat.terms.length - 1 ? "  " : ""}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}