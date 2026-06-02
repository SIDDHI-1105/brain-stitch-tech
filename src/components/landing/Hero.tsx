import { EmailCapture } from "@/components/EmailCapture";
import { KnowledgeGraph } from "@/components/KnowledgeGraph";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 radial-purple" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
            Now in private beta
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl lg:text-7xl">
            Never lose a great idea again.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Speak your thoughts → Weave turns them into organized notes, tasks, and a connected second brain.
          </p>
          <div className="mt-10">
            <EmailCapture />
            <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in">
          <KnowledgeGraph />
        </div>
      </div>
    </section>
  );
}
