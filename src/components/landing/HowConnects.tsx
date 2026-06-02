import { KnowledgeGraph } from "@/components/KnowledgeGraph";

const points = [
  { title: "Entities, not just text", desc: "Weave recognizes people, projects, dates, and topics — and turns each into a node in your graph." },
  { title: "Semantic links", desc: "Ideas connect by meaning, not just shared keywords. Mention a project once and every related note finds it." },
  { title: "Resurfacing that feels magical", desc: "When you start a new note about #pricing, Weave quietly pulls the three most relevant past thoughts to the surface." },
];

export function HowConnects() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 radial-purple opacity-60" />
      </div>
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="eyebrow">The knowledge graph</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            How Weave <span className="text-gradient">connects your ideas</span> automatically
          </h2>
          <p className="mt-4 text-muted-foreground">
            Most note apps are filing cabinets. Weave is a thinking partner — it builds a living map of how every idea relates to the next.
          </p>
          <ul className="mt-8 space-y-5 stagger">
            {points.map((p) => (
              <li key={p.title} className="glass glass-hover rounded-2xl p-6">
                <h3 className="font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <KnowledgeGraph />
        </div>
      </div>
    </section>
  );
}
