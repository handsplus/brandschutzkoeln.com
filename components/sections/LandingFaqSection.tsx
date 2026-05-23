import { SectionHeader } from "@/components/ui/SectionHeader";
import { FaqJsonLdFromItems } from "@/components/seo/FaqJsonLdFromItems";
import type { LandingFaqItem } from "@/content/landing-faqs";

export function LandingFaqSection({
  items,
  title = "Häufige Fragen",
}: {
  items: LandingFaqItem[];
  title?: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="landing-faq">
      <FaqJsonLdFromItems items={items} />
      <div className="container-narrow">
        <SectionHeader id="landing-faq" title={title} />
        <dl className="mt-8 space-y-6">
          {items.map(({ question, answer }) => (
            <div key={question}>
              <dt className="font-semibold text-stone-900">{question}</dt>
              <dd className="mt-2 text-stone-600">{answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
