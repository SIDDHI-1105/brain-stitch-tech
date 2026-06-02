import { EmailCapture } from "@/components/EmailCapture";

export function FinalCTA() {
  return (
    <section id="cta" className="py-[100px]">
      <div className="mx-auto max-w-4xl px-6">
        <div className="glass relative overflow-hidden rounded-3xl px-8 py-20 text-center purple-glow">
          <div className="absolute inset-0 -z-10 radial-purple" />
          <h2 className="font-display text-4xl font-semibold tracking-tight text-gradient sm:text-6xl">
            Never lose a great idea again.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
            Join the private beta. Be among the first to build a second brain that thinks alongside you.
          </p>
          <div className="mt-10 flex justify-center">
            <EmailCapture />
          </div>
        </div>
      </div>
    </section>
  );
}
