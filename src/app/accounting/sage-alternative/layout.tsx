import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sage Accounting Alternative | Otto AI vs Sage',
  description: 'See why Otto AI is the smarter Sage Accounting alternative for small businesses. Get AI-powered automation, tax optimization, and real-time insights.',
  keywords: ['Sage Accounting alternative, Sage vs Otto AI, Sage competitor, creator accounting software, AI bookkeeping, freelancer accounting, small business accounting, tax automation, Sage replacement'],
  openGraph: {
    title: 'Sage Accounting Alternative | Otto AI vs Sage',
    description: 'See why Otto AI is the smarter Sage Accounting alternative for small businesses. Get AI-powered automation, tax optimization, and real-time insights.',
    url: 'https://joinotto.com/accounting/sage-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sage Accounting Alternative | Otto AI vs Sage',
    description: 'See why Otto AI is the smarter Sage Accounting alternative for small businesses. Get AI-powered automation, tax optimization, and real-time insights.',
  },
  alternates: {
    canonical: 'https://joinotto.com/accounting/sage-alternative',
  },
};

export default function SageAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
