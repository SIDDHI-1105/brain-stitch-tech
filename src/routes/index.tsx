import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { WhyTraditionalFails } from "@/components/landing/WhyTraditionalFails";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { HowConnects } from "@/components/landing/HowConnects";
import { Features } from "@/components/landing/Features";
import { WhoFor } from "@/components/landing/WhoFor";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const description =
  "Weave is the AI second brain for voice notes. Speak your thoughts and Weave turns them into organized notes, tasks, and a connected knowledge graph — automatic task extraction, semantic search, and zero busywork.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Weave — AI second brain for voice notes & knowledge graphs" },
      { name: "description", content: description },
      { name: "keywords", content: "AI note taking, voice notes, knowledge graph, second brain, productivity, task extraction, voice to text, AI notes app" },
      { property: "og:title", content: "Weave — AI second brain for voice notes" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Sora:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Weave",
          applicationCategory: "ProductivityApplication",
          operatingSystem: "iOS, Android, macOS, Web",
          description,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhyTraditionalFails />
        <BeforeAfter />
        <HowItWorks />
        <HowConnects />
        <Features />
        <WhoFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
