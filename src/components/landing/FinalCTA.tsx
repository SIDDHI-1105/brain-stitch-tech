import { Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta" className="section">
      <div className="container-page max-w-4xl">
        <div className="glass relative overflow-hidden rounded-3xl px-8 py-16 text-center purple-glow">
          <div className="absolute inset-0 -z-10 radial-purple" />
          <p className="eyebrow">Join the private beta</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">
            Never lose a great idea again.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Build a second brain that thinks alongside you. Early users get lifetime perks.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://forms.gle/ZwecTxfx7aS5heS88"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary rounded-full px-6 py-3 text-sm font-medium"
            >
              Get Early Access
            </a>
            <a
              href="https://calendly.com/shivam164pandey/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
            >
              <Calendar size={16} strokeWidth={2} />
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
