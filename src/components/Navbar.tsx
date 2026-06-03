import weaveLogo from "@/assets/weave-logo.png.asset.json";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container-page mt-3">
        <div className="flex h-16 items-center justify-between rounded-2xl glass px-5">
          <a href="#" className="flex items-center gap-2 font-display text-lg font-semibold">
            <img src={weaveLogo.url} alt="Weave logo" style={{ height: 36, width: "auto" }} />
            Weave
          </a>
          <nav className="hidden gap-8 font-label text-sm text-muted-foreground md:flex">
            <a href="#how" className="transition hover:text-foreground">How it works</a>
            <a href="#features" className="transition hover:text-foreground">Features</a>
            <a href="#who" className="transition hover:text-foreground">Who it's for</a>
            <a href="#faq" className="transition hover:text-foreground">FAQ</a>
          </nav>
          <a href="#cta" className="btn-primary rounded-lg px-4 py-2 text-sm font-medium">
            Early Access
          </a>
        </div>
      </div>
    </header>
  );
}
