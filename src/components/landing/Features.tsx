import { Mic, Sparkles, Network, ListChecks } from "lucide-react";

const features = [
  { icon: Mic, title: "Voice capture", desc: "Speak naturally. Studio-grade voice note transcription in 40+ languages, on-device when possible." },
  { icon: Sparkles, title: "Auto organization", desc: "AI tags, categorizes, and routes every thought — no folders, no manual sorting." },
  { icon: Network, title: "Knowledge graph", desc: "See how your ideas connect. Surface patterns and resurface old thoughts at the perfect moment." },
  { icon: ListChecks, title: "Task extraction", desc: "Action items surface automatically and sync to your calendar, Todoist, Notion, and Linear." },
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Features</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to <span className="text-gradient">think clearly</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 stagger">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass glass-hover rounded-2xl p-8">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
