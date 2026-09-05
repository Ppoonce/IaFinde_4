'use client';

import { useMemo, useState } from 'react';
import { tools } from '@/data/tools';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';
import PriceBadge from './PriceBadge';
import ToolLogo from './ToolLogo';

const MAX_TOOLS = 3;

export default function ComparatorPicker() {
  const [selected, setSelected] = useState<string[]>([]);

  const selectedTools = useMemo(
    () => selected.map((slug) => tools.find((t) => t.slug === slug)).filter(Boolean) as typeof tools,
    [selected]
  );

  function toggle(slug: string) {
    setSelected((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : prev.length < MAX_TOOLS
        ? [...prev, slug]
        : prev;
      trackEvent(AnalyticsEvents.COMPARATOR_SELECT, { tools: next.join(',') });
      return next;
    });
  }

  const attributeRows: { label: string; get: (t: (typeof tools)[number]) => string }[] = [
    { label: 'Precio', get: (t) => t.priceTier },
    { label: 'Detalle de precio', get: (t) => t.priceNote },
    { label: 'Versión gratuita', get: (t) => (t.freeVersion ? 'Sí' : 'No') },
    { label: 'Prueba gratuita', get: (t) => (t.freeTrial ? 'Sí' : 'No') },
    { label: 'Valoración editorial (demo)', get: (t) => `${t.editorialScore.toFixed(1)}/5` },
    { label: 'Para quién es', get: (t) => t.bestFor },
  ];

  return (
    <div>
      <div className="rounded-2xl border border-line bg-surface p-4">
        <label htmlFor="comparator-select" className="text-sm font-medium text-ink">
          Elige entre 2 y {MAX_TOOLS} herramientas para comparar
        </label>
        <select
          id="comparator-select"
          onChange={(e) => {
            if (e.target.value) toggle(e.target.value);
            e.target.value = '';
          }}
          className="mt-2 w-full rounded-xl border border-line bg-surface px-3 py-2.5 text-sm text-ink"
        >
          <option value="">Añadir herramienta…</option>
          {tools
            .filter((t) => !selected.includes(t.slug))
            .map((t) => (
              <option key={t.slug} value={t.slug}>
                {t.name}
              </option>
            ))}
        </select>

        {selectedTools.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedTools.map((t) => (
              <button
                key={t.slug}
                onClick={() => toggle(t.slug)}
                className="flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink hover:border-signal"
              >
                {t.name}
                <span aria-hidden="true" className="text-inkmuted">
                  ✕
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedTools.length < 2 ? (
        <p className="mt-4 text-sm text-inkmuted">
          Selecciona al menos dos herramientas para ver la comparación lado a lado.
        </p>
      ) : (
        <div className="mt-6 overflow-x-auto rounded-xl border border-line">
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line bg-surface text-left">
                <th className="p-3 font-medium text-inkmuted">Aspecto</th>
                {selectedTools.map((t) => (
                  <th key={t.slug} className="p-3 font-medium text-ink">
                    <div className="flex items-center gap-2">
                      <ToolLogo tool={t} size={28} rounded="rounded-md" />
                      {t.name}
                    </div>
                    <div className="mt-1">
                      <PriceBadge tier={t.priceTier} />
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attributeRows.map((row) => (
                <tr key={row.label} className="border-b border-line last:border-0 align-top">
                  <td className="p-3 text-inkmuted">{row.label}</td>
                  {selectedTools.map((t) => (
                    <td key={t.slug} className="p-3 text-ink">
                      {row.get(t)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
