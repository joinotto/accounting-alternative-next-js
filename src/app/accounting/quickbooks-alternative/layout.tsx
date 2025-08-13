import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'QuickBooks Alternative | Otto AI Accounting vs QuickBooks',
  description: 'Discover why Otto AI is the smarter QuickBooks alternative for creators, freelancers, and small businesses. Enjoy AI-powered accounting and tax insights.',
  keywords: ['QuickBooks alternative', 'QuickBooks vs Otto AI', 'accounting software for creators', 'AI accounting', 'freelancer bookkeeping', 'small business accounting', 'tax deduction software', 'QuickBooks competitor'],
  openGraph: {
    title: 'QuickBooks Alternative | Otto AI Accounting vs QuickBooks',
    description: 'Discover why Otto AI is the smarter QuickBooks alternative for creators, freelancers, and small businesses. Enjoy AI-powered accounting and tax insights.',
    url: 'https://joinotto.com/accounting/quickbooks-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickBooks Alternative | Otto AI Accounting vs QuickBooks',
    description: 'Discover why Otto AI is the smarter QuickBooks alternative for creators, freelancers, and small businesses. Enjoy AI-powered accounting and tax insights.',
  },
  alternates: {
    canonical: 'https://joinotto.com/accounting/quickbooks-alternative',
  },
};

export default function QuickBooksAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
