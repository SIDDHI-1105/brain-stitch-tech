import { EmailCapture } from "@/components/EmailCapture";
import { KnowledgeGraph } from "@/components/KnowledgeGraph";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 radial-purple" />
      </div>
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 font-label text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse-glow" />
            Private beta · Early users get lifetime perks
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-gradient sm:text-6xl lg:text-[4.25rem]">
            Never lose a great idea again.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Speak your thoughts. Weave automatically turns them into organized notes, tasks, and an interconnected second brain.
          </p>
          <div className="mt-8">
            <EmailCapture />
            <p className="mt-3 font-label text-xs text-muted-foreground">No spam · Unsubscribe anytime · Beta seats limited</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-label text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
            <span>AI note taking</span>
            <span>· Voice notes</span>
            <span>· Knowledge graph</span>
            <span>· Second brain</span>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in">
          <KnowledgeGraph />
        </div>
      </div>
    </section>
  );
}
