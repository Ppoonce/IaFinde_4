'use client';

import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

export default function TrackedToolLink({
  href,
  rel,
  toolSlug,
  className,
  children,
}: {
  href: string;
  rel: string;
  toolSlug: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={rel}
      className={className}
      onClick={() => trackEvent(AnalyticsEvents.TOOL_VISIT_CLICK, { tool: toolSlug })}
    >
      {children}
    </a>
  );
}
