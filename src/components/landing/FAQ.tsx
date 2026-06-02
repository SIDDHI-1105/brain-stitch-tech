import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "How is my data handled?", a: "All voice recordings and notes are encrypted end-to-end. Your data is yours — we never train models on it, and you can export or delete everything in one click." },
  { q: "What platforms do you support?", a: "iOS and Android at launch, with a macOS menu bar app and a web dashboard. Windows and Linux clients are on the roadmap." },
  { q: "Does Weave work offline?", a: "Yes. Recordings capture offline and sync the moment you reconnect. Transcription happens on-device when possible for instant capture." },
  { q: "How much will it cost?", a: "Free during private beta. After launch: a generous free tier, with Pro starting at $9/month for unlimited transcription and graph history." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[100px]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="mt-14 space-y-3">
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
