import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FreshBooks Alternative for Creators | Otto AI vs FreshBooks',
  description: 'Looking for a FreshBooks alternative? Otto AI delivers AI-powered automation, smarter tax tools, and real-time insights designed for small businesses.',
  keywords: ['FreshBooks alternative, FreshBooks vs Otto AI, creator accounting software, AI bookkeeping, freelancer accounting, small business accounting, tax automation, FreshBooks competitor'],
  openGraph: {
    title: 'FreshBooks Alternative for Creators | Otto AI vs FreshBooks',
    description: 'Looking for a FreshBooks alternative? Otto AI delivers AI-powered automation, smarter tax tools, and real-time insights designed for small businesses.',
    url: 'https://joinotto.com/accounting/freshbooks-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreshBooks Alternative for Creators | Otto AI vs FreshBooks',
    description: 'Looking for a FreshBooks alternative? Otto AI delivers AI-powered automation, smarter tax tools, and real-time insights designed for small businesses.',
  },
  alternates: {
    canonical: 'https://joinotto.com/accounting/freshbooks-alternative',
  },
};

export default function FreshBooksAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
