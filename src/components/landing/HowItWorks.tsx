const steps = [
  { n: "01", title: "Speak", desc: "Open Weave and talk. Walking, driving, between meetings — capture voice notes the moment ideas happen." },
  { n: "02", title: "AI organizes", desc: "Weave's AI extracts tasks, notes, people, and topics from your voice notes — then files them where they belong." },
  { n: "03", title: "Build your second brain", desc: "Every idea becomes a node in your knowledge graph. Watch your second brain grow with every recording." },
];

export function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Three steps. Zero friction.
          </h2>
          <p className="mt-3 text-muted-foreground">
            From voice note to organized second brain in seconds — no manual tagging, no folders, no busywork.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 stagger">
          {steps.map((s) => (
            <div key={s.n} className="glass glass-hover relative rounded-2xl p-8">
              <div className="font-label text-sm text-primary-glow">{s.n}</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
