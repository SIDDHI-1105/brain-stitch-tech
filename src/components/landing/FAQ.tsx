import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Who is Weave for?", a: "Anyone who thinks faster than they type — founders, creators, researchers, writers, engineers, and operators. If your best ideas happen away from a keyboard, Weave is built for you." },
  { q: "How is my data handled?", a: "All voice recordings and notes are encrypted in transit and at rest. Your data is yours — we never train models on it, and you can export or delete everything in one click." },
  { q: "What happens to my recordings?", a: "Audio is transcribed, then optionally discarded or kept in encrypted storage — your choice. We never share recordings, and you can wipe them at any time." },
  { q: "Can I search my old ideas?", a: "Yes. Weave's semantic search finds notes by meaning, not just keywords. Ask 'what did I think about pricing last month?' and it surfaces the right voice notes and connected ideas." },
  { q: "Can I import notes from other apps?", a: "Yes — at launch we support Apple Notes, Notion, Obsidian, Evernote, and plain markdown. Weave automatically links your imported notes into the same knowledge graph." },
  { q: "What platforms do you support?", a: "iOS and Android at launch, plus a macOS menu bar app and a web dashboard. Windows and Linux are on the roadmap." },
  { q: "Does Weave work offline?", a: "Yes. Recordings capture offline and sync the moment you reconnect. Transcription happens on-device when possible for instant capture." },
  { q: "How much will it cost?", a: "Free during private beta. After launch: a generous free tier, with Pro starting at $9/month for unlimited transcription and graph history. Early beta users get lifetime perks." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="container-page max-w-3xl">
        <div className="text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="glass glass-hover block w-full rounded-2xl p-6 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-lg font-medium">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-primary-glow transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
                </div>
                <div className={`grid transition-all duration-300 ease-out ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
