export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 font-label text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="inline-block h-5 w-5 rounded-md bg-gradient-to-br from-primary to-primary-glow" />
          <span className="font-display text-foreground">Weave</span>
          <span>© {new Date().getFullYear()} · AI second brain for voice notes</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="transition hover:text-foreground">Privacy</a>
          <a href="#" className="transition hover:text-foreground">Terms</a>
          <a href="#" className="transition hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
