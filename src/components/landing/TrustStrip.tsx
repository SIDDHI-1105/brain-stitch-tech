export function TrustStrip() {
  const labels = ["Founders", "Creators", "Researchers", "Writers", "Engineers", "Operators"];
  return (
    <section className="border-y border-border/50 py-8">
      <div className="container-page text-center">
        <p className="font-label text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by people who think out loud
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-label text-sm font-medium text-muted-foreground/70">
          {labels.map((l) => (
            <span key={l} className="transition hover:text-foreground">{l}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
