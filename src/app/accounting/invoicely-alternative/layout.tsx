import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FreshBooks Alternative | Otto AI Accounting vs FreshBooks',
  description: 'Discover why Otto AI is the smarter FreshBooks alternative for creators, freelancers, and small businesses. Enjoy unlimited invoicing, advanced features, and AI-powered accounting tools.',
  keywords: ['FreshBooks alternative', 'FreshBooks vs Otto AI', 'accounting software for freelancers', 'invoicing software', 'small business accounting', 'time tracking software', 'expense tracking', 'financial management'],
  openGraph: {
    title: 'FreshBooks Alternative | Otto AI Accounting vs FreshBooks',
    description: 'Discover why Otto AI is the smarter FreshBooks alternative for creators, freelancers, and small businesses. Enjoy unlimited invoicing, advanced features, and AI-powered accounting tools.',
    url: 'https://joinotto.com/accounting/freshbooks-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreshBooks Alternative | Otto AI Accounting vs FreshBooks',
    description: 'Discover why Otto AI is the smarter FreshBooks alternative for creators, freelancers, and small businesses. Enjoy unlimited invoicing, advanced features, and AI-powered accounting tools.',
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
