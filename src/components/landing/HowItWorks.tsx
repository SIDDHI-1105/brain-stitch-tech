const steps = [
  { n: "01", title: "Speak", desc: "Open Weave and talk. Walking, driving, between meetings — capture thoughts the moment they happen." },
  { n: "02", title: "AI organizes", desc: "Weave extracts tasks, notes, people, and topics — then files them where they belong." },
  { n: "03", title: "Build your second brain", desc: "Every idea becomes a node. Watch your knowledge graph grow with every voice memo." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-[100px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground">Three steps. Zero friction.</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="glass glass-hover relative rounded-2xl p-8">
              <div className="font-display text-sm text-primary-glow">{s.n}</div>
              <h3 className="mt-3 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
