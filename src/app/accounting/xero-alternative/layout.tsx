import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xero Accounting Alternative | Otto AI vs Xero',
  description: 'Discover why Otto AI is the top Xero alternative for small businesses. Get AI-powered automation, advanced tax tools, and real-time insights.',
  keywords: ['Xero Accounting alternative, Xero vs Otto AI, Xero competitor, creator accounting software, AI bookkeeping, freelancer accounting, small business accounting, tax automation, Xero replacement'],
  openGraph: {
    title: 'Xero Accounting Alternative | Otto AI vs Xero',
    description: 'Discover why Otto AI is the top Xero alternative for small businesses. Get AI-powered automation, advanced tax tools, and real-time insights.',
    url: 'https://joinotto.com/accounting/xero-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xero Accounting Alternative | Otto AI vs Xero',
    description: 'Discover why Otto AI is the top Xero alternative for small businesses. Get AI-powered automation, advanced tax tools, and real-time insights.',
  },
  alternates: {
    canonical: 'https://joinotto.com/accounting/xero-alternative',
  },
};

export default function XeroAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
