import type { Metadata } from 'next';
import { getRanking } from '@/data/rankings';
import RankingPage from '@/components/RankingPage';

const ranking = getRanking('gratis')!;

export const metadata: Metadata = {
  title: ranking.seoTitle,
  description: ranking.metaDescription,
  alternates: { canonical: '/mejores-ias-gratis' },
};

export default function Page() {
  return <RankingPage ranking={ranking} path="/mejores-ias-gratis" />;
}
