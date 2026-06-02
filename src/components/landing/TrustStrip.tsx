export function TrustStrip() {
  const labels = ["Founders", "Creators", "Researchers", "Writers", "Engineers", "Thinkers"];
  return (
    <section className="border-y border-border/50 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Built for founders, creators, and thinkers
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-display font-medium text-muted-foreground/70">
          {labels.map((l) => (
            <span key={l} className="transition hover:text-foreground">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
