import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zoho Invoice Alternative | Otto AI Accounting vs Zoho',
  description: 'Discover why Otto AI is the smarter Zoho Invoice alternative for creators, freelancers, and small businesses. Enjoy unlimited invoicing, advanced features, and AI-powered accounting tools.',
  keywords: ['Zoho alternative', 'Zoho vs Otto AI', 'Zoho Invoice alternative', 'invoicing software', 'small business accounting', 'expense tracking', 'financial management', 'bookkeeping software'],
  openGraph: {
    title: 'Zoho Invoice Alternative | Otto AI Accounting vs Zoho',
    description: 'Discover why Otto AI is the smarter Zoho Invoice alternative for creators, freelancers, and small businesses. Enjoy unlimited invoicing, advanced features, and AI-powered accounting tools.',
    url: 'https://joinotto.com/accounting/zoho-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoho Invoice Alternative | Otto AI Accounting vs Zoho',
    description: 'Discover why Otto AI is the smarter Zoho Invoice alternative for creators, freelancers, and small businesses. Enjoy unlimited invoicing, advanced features, and AI-powered accounting tools.',
  },
  alternates: {
    canonical: 'https://joinotto.com/accounting/zoho-alternative',
  },
};

export default function ZohoAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
