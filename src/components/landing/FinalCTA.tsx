import { EmailCapture } from "@/components/EmailCapture";

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
          <div className="mt-8 flex justify-center">
            <EmailCapture />
          </div>
          <p className="mt-3 font-label text-xs text-muted-foreground">No spam · Unsubscribe anytime</p>
        </div>
      </div>
    </section>
  );
}
