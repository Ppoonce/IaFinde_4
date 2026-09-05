import { PriceTier } from '@/data/tools';

const styles: Record<PriceTier, string> = {
  Gratis: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Freemium: 'bg-amber-50 text-amber-800 border-amber-200',
  Pago: 'bg-slate-100 text-slate-700 border-slate-200',
};

export default function PriceBadge({ tier }: { tier: PriceTier }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[tier]}`}>
      {tier}
    </span>
  );
}
