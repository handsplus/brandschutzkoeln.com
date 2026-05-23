import Link from "next/link";
import type { RatgeberArticle } from "@/content/ratgeber";
import { RATGEBER_ARTICLES } from "@/content/ratgeber";
import { getClusterLabel, getClusterPeerSlugs } from "@/content/ratgeber-clusters";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/ui/CTA";
import { SeoLandingLinks } from "@/components/sections/SeoLandingLinks";
import { RATGEBER_EDITORIAL } from "@/lib/ratgeber-article-meta";

const linkClass =
  "text-brand-red font-medium hover:underline focus-visible:rounded focus-visible:outline focus-visible:ring-2 focus-visible:ring-brand-red";

function isServiceOrContactLink(href: string): boolean {
  return !href.startsWith("/ratgeber/");
}

export function RatgeberArticleView({ article }: { article: RatgeberArticle }) {
  const clusterLabel = getClusterLabel(article.slug);
  const clusterPeers = getClusterPeerSlugs(article.slug, 4)
    .map((slug) => RATGEBER_ARTICLES.find((a) => a.slug === slug))
    .filter((a): a is RatgeberArticle => Boolean(a));

  const serviceLinks = article.relatedLinks.filter(({ href }) => isServiceOrContactLink(href));

  return (
    <>
      <section className="border-b border-stone-200 bg-white py-16 sm:py-20">
        <div className="container-narrow">
          <p className="text-sm text-stone-500">
            {RATGEBER_EDITORIAL.authorLabel}
            <span className="mx-2 text-stone-300" aria-hidden>
              ·
            </span>
            {RATGEBER_EDITORIAL.standLabel}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-stone-600">{article.excerpt}</p>
        </div>
      </section>

      <section className="bg-stone-50 py-16 sm:py-20">
        <div className="container-narrow space-y-14">
          {article.sections.map((section) => (
            <article key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl font-bold text-stone-900 sm:text-2xl">{section.title}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mt-4 text-stone-600">
                  {p}
                </p>
              ))}
              {section.list && section.list.length > 0 ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-stone-600" role="list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}

          {article.faq.length > 0 ? (
            <section aria-labelledby="ratgeber-faq">
              <SectionHeader id="ratgeber-faq" title="Häufige Fragen" />
              <dl className="mt-6 space-y-6">
                {article.faq.map(({ question, answer }) => (
                  <div key={question}>
                    <dt className="font-semibold text-stone-900">{question}</dt>
                    <dd className="mt-2 text-stone-600">{answer}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {serviceLinks.length > 0 ? (
            <section className="rounded-xl border border-stone-200 bg-white p-6">
              <h2 className="font-semibold text-stone-900">Passende Leistungen</h2>
              <ul className="mt-4 flex flex-col gap-2" role="list">
                {serviceLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className={linkClass}>
                      {label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {clusterPeers.length > 0 ? (
            <section className="rounded-xl border border-stone-200 bg-white p-6">
              <h2 className="font-semibold text-stone-900">
                Weitere Ratgeber{clusterLabel ? `: ${clusterLabel}` : ""}
              </h2>
              <ul className="mt-4 flex flex-col gap-2" role="list">
                {clusterPeers.map((peer) => (
                  <li key={peer.slug}>
                    <Link href={`/ratgeber/${peer.slug}`} className={linkClass}>
                      {peer.title} →
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/ratgeber" className={linkClass}>
                    Alle Ratgeber-Artikel →
                  </Link>
                </li>
              </ul>
            </section>
          ) : (
            <section className="rounded-xl border border-stone-200 bg-white p-6">
              <h2 className="font-semibold text-stone-900">Weitere Ratgeber-Artikel</h2>
              <p className="mt-2">
                <Link href="/ratgeber" className={linkClass}>
                  Zum Ratgeber-Überblick →
                </Link>
              </p>
            </section>
          )}
        </div>
      </section>

      <SeoLandingLinks />

      <CTA
        title="Brandschutz in Köln – wir beraten Sie"
        description="Sie haben Fragen zu Ihrem Objekt oder Vorhaben? Wir melden uns mit einer passenden Einschätzung."
        buttonLabel="Erstberatung anfragen"
        buttonHref="/kontakt"
        variant="filled"
      />
    </>
  );
}
