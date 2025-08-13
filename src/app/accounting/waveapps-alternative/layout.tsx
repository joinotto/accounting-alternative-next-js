import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WaveApps Alternative | Otto AI Accounting vs WaveApps',
  description: 'Discover why Otto AI is the smarter WaveApps alternative for creators, freelancers, and small businesses. Enjoy unlimited invoicing, advanced features, and AI-powered accounting tools.',
  keywords: ['WaveApps alternative', 'WaveApps vs Otto AI', 'free accounting software', 'invoicing software', 'small business accounting', 'expense tracking', 'financial management', 'bookkeeping software'],
  openGraph: {
    title: 'WaveApps Alternative | Otto AI Accounting vs WaveApps',
    description: 'Discover why Otto AI is the smarter WaveApps alternative for creators, freelancers, and small businesses. Enjoy unlimited invoicing, advanced features, and AI-powered accounting tools.',
    url: 'https://joinotto.com/accounting/waveapps-alternative',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WaveApps Alternative | Otto AI Accounting vs WaveApps',
    description: 'Discover why Otto AI is the smarter WaveApps alternative for creators, freelancers, and small businesses. Enjoy unlimited invoicing, advanced features, and AI-powered accounting tools.',
  },
  alternates: {
    canonical: 'https://joinotto.com/accounting/waveapps-alternative',
  },
};

export default function WaveAppsAlternativeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
