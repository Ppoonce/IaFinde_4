import Link from 'next/link';
import { Tool, getToolLink } from '@/data/tools';
import PriceBadge from './PriceBadge';
import TrackedToolLink from './TrackedToolLink';
import ToolLogo from './ToolLogo';

export default function ToolCard({ tool }: { tool: Tool }) {
  const link = getToolLink(tool);

  return (
    <article className="lift-on-hover flex flex-col justify-between rounded-xl border border-line bg-surface p-5">
      <div>
        <div className="flex items-start gap-3">
          <ToolLogo tool={tool} size={44} />
          <div className="min-w-0">
            <h3 className="truncate font-display text-lg font-semibold text-ink">
              <Link href={`/herramientas/${tool.slug}`} className="hover:text-signal">
                {tool.name}
              </Link>
            </h3>
            <p className="text-sm text-inkmuted">{tool.tagline}</p>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-inkmuted">{tool.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <PriceBadge tier={tool.priceTier} />
          {tool.isNew && (
            <span className="rounded-full border border-signal/30 bg-signal/10 px-2.5 py-0.5 text-xs font-medium text-signaldark">
              Nueva
            </span>
          )}
          {tool.sponsored && (
            <span className="rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800">
              Patrocinado
            </span>
          )}
          <span className="text-xs text-inkmuted">Valoración editorial: {tool.editorialScore.toFixed(1)}/5</span>
        </div>
      </div>

      <div className="mt-5 flex gap-2">
        <Link
          href={`/herramientas/${tool.slug}`}
          className="press-feedback flex-1 rounded-lg border border-line px-3 py-2 text-center text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal"
        >
          Leer análisis
        </Link>
        <TrackedToolLink
          href={link.href}
          rel={link.rel}
          toolSlug={tool.slug}
          className="press-feedback flex-1 rounded-lg bg-ink px-3 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-signal"
        >
          Ver herramienta
        </TrackedToolLink>
      </div>
    </article>
  );
}
