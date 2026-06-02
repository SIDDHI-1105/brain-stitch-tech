export function BeforeAfter() {
  return (
    <section className="py-[100px]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            From scattered thoughts to <span className="text-gradient">structured clarity</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Weave listens, understands, and organizes — so your ideas always have a place to live.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="glass glass-hover rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">Before</span>
              <span className="text-xs text-muted-foreground">voice_note_03.m4a · 2:14</span>
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

          <div className="glass glass-hover rounded-2xl p-6 purple-glow">
            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs text-primary-glow">After</span>
              <span className="text-xs text-muted-foreground">Organized by Weave</span>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">Tasks</div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-primary/50" /> Ship landing page by Friday</li>
                  <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-primary/50" /> Email Sarah re: pricing tier</li>
                  <li className="flex items-center gap-2"><span className="h-4 w-4 rounded border border-primary/50" /> Review Stripe integration</li>
                </ul>
              </div>
              <div>
                <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">Notes</div>
                <p className="text-muted-foreground">Onboarding flow feels broken — explore Linear's pattern.</p>
              </div>
              <div>
                <div className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">Linked</div>
                <div className="flex flex-wrap gap-2">
                  {["#launch", "@sarah", "#pricing", "#onboarding", "Linear"].map((t) => (
                    <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-xs text-primary-glow">{t}</span>
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
