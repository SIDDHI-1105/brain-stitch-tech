import { ArrowDown } from "lucide-react";

export function BeforeAfter() {
  const flow = [
    { label: "Voice Note", desc: "Capture in seconds" },
    { label: "AI Understanding", desc: "Extract tasks, notes, people" },
    { label: "Second Brain", desc: "Connected, searchable, yours" },
  ];

  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Weave Flow</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            From scattered thoughts to <span className="text-gradient">structured clarity</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Weave listens, understands, and organizes — turning raw voice notes into a living knowledge graph.
          </p>
        </div>

        {/* Visual flow */}
        <div className="mt-12 flex flex-col items-center gap-3 stagger">
          {flow.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center gap-3">
              <div className="glass rounded-2xl px-6 py-3 text-center purple-glow">
                <div className="font-display text-base font-semibold">{step.label}</div>
                <div className="font-label text-xs text-muted-foreground">{step.desc}</div>
              </div>
              {i < flow.length - 1 && (
                <ArrowDown className="h-5 w-5 text-primary-glow animate-pulse-glow" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="glass glass-hover rounded-2xl p-8">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-muted px-2 py-0.5 font-label text-xs text-muted-foreground">Before</span>
              <span className="font-label text-xs text-muted-foreground">voice_note_03.m4a · 2:14</span>
            </div>
            <div className="space-y-2 font-mono text-sm leading-relaxed text-muted-foreground">
              <p>"uhh okay so the landing page... we need to ship it by friday,</p>
              <p>and remind me to email Sarah about the pricing tier,</p>
              <p>also the onboarding flow feels broken — maybe try the linear approach,</p>
              <p>oh and that Stripe thing, look at it later..."</p>
            </div>
            <div className="mt-6 flex items-end gap-0.5 h-8">
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-full bg-muted-foreground/40"
                  style={{ height: `${20 + Math.abs(Math.sin(i * 0.6)) * 80}%` }}
                />
              ))}
            </div>
          </div>

          <div className="glass glass-hover rounded-2xl p-8 purple-glow">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-primary/20 px-2 py-0.5 font-label text-xs text-primary-glow">After</span>
              <span className="font-label text-xs text-muted-foreground">Organized by Weave</span>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <div className="mb-2 eyebrow">Tasks</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-primary/50" /> Ship landing page by Friday</li>
                  <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-primary/50" /> Email Sarah re: pricing tier</li>
                  <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-primary/50" /> Review Stripe integration</li>
                </ul>
              </div>
              <div>
                <div className="mb-2 eyebrow">Notes</div>
                <p className="text-muted-foreground">Onboarding flow feels broken — explore Linear's pattern.</p>
              </div>
              <div>
                <div className="mb-2 eyebrow">Linked</div>
                <div className="flex flex-wrap gap-2">
                  {["#launch", "@sarah", "#pricing", "#onboarding", "Linear"].map((t) => (
                    <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-label text-xs text-primary-glow">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
