import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as SonnerToaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Providers } from "@/components/Providers"
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Invoicing Alternatives',
  description: 'Find the best invoicing alternatives to popular platforms',
  icons: {
    icon: 'https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/66da15c9e32d16a4c98586f0_favicon-32x32.png',
    shortcut: 'https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/66da15c9e32d16a4c98586f0_favicon-32x32.png',
    apple: 'https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/66da15c9e32d16a4c98586f0_favicon-32x32.png',
  },
  manifest: 'https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/66da15c9e32d16a4c98586f0_favicon-32x32.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WW5MJJW2');`}
        </Script>
        
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QKK3XRK2R2" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('set', 'developer_id.dZGVlNj', true);
            gtag('config', 'G-QKK3XRK2R2');
          `}
        </Script>
        
        {/* LaunchList Widget */}
        <Script src="https://getlaunchlist.com/js/widget-diy.js" strategy="afterInteractive" />
        
        {/* VTag AI */}
        <Script 
          id="vtag-ai-js" 
          src="https://r2.leadsy.ai/tag.js" 
          data-pid="jvTEk1tqxa74rtu2" 
          data-version="062024" 
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-WW5MJJW2"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <SonnerToaster />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
} 