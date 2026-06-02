export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="inline-block h-6 w-6 rounded-md bg-gradient-to-br from-primary to-primary-glow purple-glow" />
          Weave
        </a>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="transition hover:text-foreground">How it works</a>
          <a href="#features" className="transition hover:text-foreground">Features</a>
          <a href="#faq" className="transition hover:text-foreground">FAQ</a>
        </nav>
        <a href="#cta" className="btn-primary rounded-lg px-4 py-2 text-sm font-medium">
          Early Access
        </a>
      </div>
    </header>
  );
}
