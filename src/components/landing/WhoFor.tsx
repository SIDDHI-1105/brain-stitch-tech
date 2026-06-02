const personas = [
  { tag: "Founders", desc: "Capture product ideas, hiring notes, and investor follow-ups between back-to-back meetings." },
  { tag: "Creators", desc: "Turn shower thoughts into outlines. Never lose a hook, a title, or a story angle again." },
  { tag: "Researchers", desc: "Voice-dump after interviews. Weave links findings across papers, people, and projects." },
  { tag: "Engineers", desc: "Architecture decisions, debug threads, and TODOs — captured hands-free and synced to Linear." },
  { tag: "Writers", desc: "Dictate scenes on walks. Weave clusters characters, threads, and references automatically." },
  { tag: "Operators", desc: "Process messy 1:1s into clean action items, ownership, and next steps in one tap." },
];

export function WhoFor() {
  return (
    <section id="who" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Who Weave is for</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for people who <span className="text-gradient">think out loud</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            If your best ideas show up on walks, in the shower, or mid-meeting — Weave is your second brain.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger">
          {personas.map((p) => (
            <div key={p.tag} className="glass glass-hover rounded-2xl p-8">
              <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-label text-xs uppercase tracking-wider text-primary-glow">
                {p.tag}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
