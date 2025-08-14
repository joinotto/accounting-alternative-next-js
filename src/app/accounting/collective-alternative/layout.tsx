import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collective Accounting Alternative for Small Businesses',
  description: 'See why Otto AI is the smarter alternative to Collective Accounting. Get AI-powered automation, 24/7 reconciliation, tax deduction detection, and insights.',
  keywords: ['Collective Accounting alternative, Collective vs Otto AI, Collective competitor, AI bookkeeping, small business accounting software, creator accounting tools, freelancer tax automation, Collective replacement'],
  openGraph: {
    title: 'Collective Accounting Alternative for Small Businesses',
    description: 'See why Otto AI is the smarter alternative to Collective Accounting. Get AI-powered automation, 24/7 reconciliation, tax deduction detection, and insights.',
    url: 'https://joinotto.com/accounting/collective-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Collective Accounting Alternative for Small Businesses',
    description: 'See why Otto AI is the smarter alternative to Collective Accounting. Get AI-powered automation, 24/7 reconciliation, tax deduction detection, and insights.',
  },
  alternates: {
    canonical: 'https://joinotto.com/accounting/collective-alternative',
  },
};

export default function CollectiveAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
