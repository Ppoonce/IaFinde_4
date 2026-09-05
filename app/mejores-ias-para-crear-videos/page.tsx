import type { Metadata } from 'next';
import { getRanking } from '@/data/rankings';
import RankingPage from '@/components/RankingPage';

const ranking = getRanking('para-crear-videos')!;

export const metadata: Metadata = {
  title: ranking.seoTitle,
  description: ranking.metaDescription,
  alternates: { canonical: '/mejores-ias-para-crear-videos' },
};

export default function Page() {
  return <RankingPage ranking={ranking} path="/mejores-ias-para-crear-videos" />;
}
