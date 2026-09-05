import type { Metadata } from 'next';
import { getRanking } from '@/data/rankings';
import RankingPage from '@/components/RankingPage';

const ranking = getRanking('para-estudiantes')!;

export const metadata: Metadata = {
  title: ranking.seoTitle,
  description: ranking.metaDescription,
  alternates: { canonical: '/mejores-ias-para-estudiantes' },
};

export default function Page() {
  return <RankingPage ranking={ranking} path="/mejores-ias-para-estudiantes" />;
}
