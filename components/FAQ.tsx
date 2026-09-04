export type FAQItem = { q: string; a: string };

export default function FAQ({ items, title = 'Preguntas frecuentes' }: { items: FAQItem[]; title?: string }) {
  if (!items.length) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section aria-labelledby="faq-heading" className="mt-12">
      <h2 id="faq-heading" className="font-display text-2xl font-semibold text-ink">
        {title}
      </h2>
      <div className="mt-5 divide-y divide-line rounded-xl border border-line bg-surface">
        {items.map((item, i) => (
          <details key={i} className="group p-5">
            <summary className="cursor-pointer list-none font-medium text-ink marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="shrink-0 text-inkmuted transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-inkmuted">{item.a}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
