import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

export type RatgeberDeepenLink = {
  href: string;
  label: string;
};

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  links: RatgeberDeepenLink[];
  className?: string;
};

/** Verlinkung passender Ratgeber-Artikel – ohne Marketing-Spielchen. */
export function RatgeberDeepenSection({
  id = "ratgeber-vertiefen",
  title = "Fachlich vertiefen",
  subtitle = "Ausführliche Erläuterungen zu BauO NRW, Nachweisen und typischen Fällen.",
  links,
  className = "bg-white py-16 sm:py-20",
}: Props) {
  if (links.length === 0) return null;

  return (
    <section className={className} aria-labelledby={id}>
      <div className="container-narrow">
        <SectionHeader id={id} title={title} subtitle={subtitle} />
        <ul className="mt-6 space-y-3" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-stone-600 text-sm">
          <Link href="/ratgeber" className="text-brand-red font-medium hover:underline">
            Alle Ratgeber-Artikel
          </Link>
        </p>
      </div>
    </section>
  );
}
