import { FolderX, Search, Clock, Layers } from "lucide-react";

const pains = [
  { icon: FolderX, title: "Folders become graveyards", desc: "Notes get filed once and forgotten. There's no connection between related thoughts." },
  { icon: Search, title: "You can't find what you wrote", desc: "Keyword search fails when you don't remember the exact words — and you never do." },
  { icon: Clock, title: "Typing kills momentum", desc: "Great ideas happen on walks and in meetings — not when you're sitting at a keyboard." },
  { icon: Layers, title: "Tasks get lost in walls of text", desc: "Action items hide inside paragraphs. Nothing routes to your calendar or todo app." },
];

export function WhyTraditionalFails() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The problem</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Why traditional note apps <span className="text-gradient">fail you</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Notion, Apple Notes, Evernote — they store text. They don't understand it. Your second brain deserves better.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 stagger">
          {pains.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass glass-hover rounded-2xl p-8">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/15 text-destructive">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
