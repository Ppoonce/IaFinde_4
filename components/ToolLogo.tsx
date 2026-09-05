'use client';

import { useState } from 'react';
import { Tool } from '@/data/tools';

function getDomain(url: string): string {
  try {
    return new URL(url).hostname;
  } catch {
    return '';
  }
}

export default function ToolLogo({
  tool,
  size = 44,
  rounded = 'rounded-lg',
}: {
  tool: Tool;
  size?: number;
  rounded?: string;
}) {
  const [failed, setFailed] = useState(false);
  const domain = getDomain(tool.website);

  // Favicon público del propio sitio de la herramienta (no un logo alojado por
  // nosotros): mismo enfoque que usan directorios como G2 o Capterra para
  // identificar visualmente cada producto sin reproducir su marca como propia.
  const faviconUrl = domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=128` : '';

  if (!faviconUrl || failed) {
    return (
      <div
        className={`flex shrink-0 items-center justify-center text-white font-semibold ${tool.color} ${rounded}`}
        style={{ width: size, height: size, fontSize: size * 0.32 }}
        aria-hidden="true"
      >
        {tool.initials}
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden bg-white border border-line ${rounded}`}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={faviconUrl}
        alt={`Logo de ${tool.name}`}
        width={size * 0.6}
        height={size * 0.6}
        loading="lazy"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
