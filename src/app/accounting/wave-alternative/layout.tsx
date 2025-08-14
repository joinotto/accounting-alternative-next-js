import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Wave Accounting Alternative | Otto AI vs Wave',
  description: 'See why Otto AI outperforms Wave Accounting for freelancers and small businesses. Get AI-powered automation, smarter tax tools, and real-time insights.',
  keywords: ['Wave Accounting alternative, Wave vs Otto AI, Wave competitor, creator accounting software, AI bookkeeping, freelancer accounting, small business accounting, tax automation, Wave competitor'],
  openGraph: {
    title: 'Best Wave Accounting Alternative | Otto AI vs Wave',
    description: 'See why Otto AI outperforms Wave Accounting for freelancers and small businesses. Get AI-powered automation, smarter tax tools, and real-time insights.',
    url: 'https://joinotto.com/accounting/wave-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Wave Accounting Alternative | Otto AI vs Wave',
    description: 'See why Otto AI outperforms Wave Accounting for freelancers and small businesses. Get AI-powered automation, smarter tax tools, and real-time insights.',
  },
  alternates: {
    canonical: 'https://joinotto.com/accounting/wave-alternative',
  },
};

export default function WaveAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
