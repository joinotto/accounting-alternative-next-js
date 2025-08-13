"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OttoReviewShowcase from "@/components/OttoReviewShowcase";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Helmet } from 'react-helmet';
import FaqSection from "@/components/FaqSection";


const AlternativeInvoicer = () => {
  const invoicerfaqs = [
    {
      question: "Why switch from Invoicer.ai to Otto AI?",
      answer: "Otto AI invoice generator offers unlimited invoices, advanced customization, and offline access, features Invoicer.ai lacks or limits behind paywalls. It’s built for creators and service businesses that need more flexibility without extra fees or platform restrictions."
    },
    {
      question: "Does Otto AI have any invoice limits like Invoicer.ai?",
      answer: "No. Otto AI allows unlimited invoice creation on all plans, including free. Invoicer.ai limits usage unless you upgrade, which can slow down business as you grow or handle more clients."
    },
    {
      question: "Is Otto AI better for international clients than Invoicer.ai?",
      answer: "Yes. Otto AI supports multi-currency invoice generation and localized tax formats, making it easier to bill global clients. Invoicer.ai has limited support for international currencies and compliance needs."
    },
    {
      question: "Does Otto AI work on mobile?",
      answer: "Absolutely. Otto AI invoice generator is fully mobile-responsive, so you can create, edit, and send invoices from your phone or tablet just as easily as from a desktop."
    },
    {
      question: "Is there a limit to how many invoices I can send?",
      answer: "No, there’s absolutely no cap. Otto AI lets you create and send unlimited invoices, even on the free plan. You’ll never be forced to upgrade just because your business is growing or your clients increase."
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --font-size--tablet-h1: 40px;
          --line-height--tablet-h1: 48px;
          --font-size--desktop-h1: 48px;
          --line-height--desktop-h1: 56px;
          --font-size--mobile-l-h1: 35px;
          --line-height--mobile-l-h1: 43px;
          --font-size--mobile-p-h1: 30px;
          --line-height--mobile-p-h1: 38px;
          --_new-home---body: white;
          --_new-home---heading-color: #111827;
          --_new-home---text: #1f2937;
          --_new-home---font-size--d-h1: 54px;
          --_new-home---line-height--d-h1: 60px;
          --_new-home---font-size--t-h1: 40px;
          --_new-home---line-height--t-h1: 46px;
          --_new-home---font-size--ml-h1: 30px;
          --_new-home---line-height--ml-h1: 36px;
          --_new-home---font-size--mp-h1: 27px;
          --_new-home---line-height--mp-h1: 37px;
        }

        .brand-h1 {
          font-size: var(--_new-home---font-size--mp-h1);
          line-height: var(--_new-home---line-height--mp-h1);
          color: var(--_new-home---heading-color);
          font-weight: 700;
          letter-spacing: -1.62px;
        }

        @media (min-width: 768px) {
          .brand-h1 {
            font-size: var(--_new-home---font-size--t-h1);
            line-height: var(--_new-home---line-height--t-h1);
          }
        }

        @media (min-width: 1024px) {
          .brand-h1 {
            font-size: var(--_new-home---font-size--d-h1);
            line-height: var(--_new-home---line-height--d-h1);
          }
        }

        .brand-text {
          color: var(--_new-home---text);
        }

        .custom-para {
          text-align: center;
          max-width: 715px;
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
        }

        .section-h2 {
          color: black;
          font-size: 40px;
          line-height: 48px;
          letter-spacing: -.4px;
          margin-top: 0;
          margin-bottom: 0;
          font-weight: 500;
        }

        .section-para {
          font-size: 16px;
          line-height: 24px;
        }

        .us-vs-them-h2 {
          color: black;
          font-size: 40px;
          line-height: 48px;
          letter-spacing: -.4px;
          margin-top: 0;
          margin-bottom: 0;
          font-weight: 500;
        }

        .us-vs-them-para {
          font-size: 16px;
          line-height: 20px;
        }
          .cta-background {
          background-image: url('/lovable-uploads/052cd201-ffb8-480f-bfd8-5b3fff8ea9b6.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 300px;
          grid-row-gap: 18px;
          flex-flow: column;
          justify-content: flex-start;
          align-items: center;
          display: flex;
        }

        .custom-grid {
          display: grid;
          grid-column-gap: 114px;
          grid-row-gap: 16px;
          background-color: #fff;
          border-radius: 48px;
          grid-template-rows: auto;
          grid-template-columns: .9fr 1.1fr;
          align-self: stretch;
          align-items: center;
        }

        .custom-grid-reverse {
          display: grid;
          grid-column-gap: 114px;
          grid-row-gap: 16px;
          background-color: #fff;
          border-radius: 48px;
          grid-template-rows: auto;
          grid-template-columns: 1.1fr .9fr;
          align-self: stretch;
          align-items: center;
        }

        .custom-image {
          vertical-align: middle;
          max-width: 90%;
          display: inline-block;
          height: auto;
          background: transparent;
        }

        .comparison-table {
          overflow-x: auto;
        }

        .comparison-table .table-cell-feature {
          padding: 20px 24px;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #1f2937;
          border-right: 1px solid #edeff3;
          width: 280px;
        }

        .comparison-table .table-cell-check {
          padding: 20px;
          text-align: center;
          border-right: 1px solid #edeff3;
          width: 140px;
        }

        .comparison-table .table-cell-check:last-child {
          border-right: none;
        }

        .comparison-table .table-header-cell {
          padding: 20px;
          font-weight: 600;
          font-size: 16px;
          text-align: center;
          color: #1f2937;
          border-right: 1px solid #edeff3;
          width: 140px;
        }

        .comparison-table .table-header-cell:first-child {
          width: 280px;
        }

        .comparison-table .table-header-cell:last-child {
          border-right: none;
        }

        .table-check-icon {
          color: black;
          text-align: center;
          width: 100%;
          font-family: "Fa Solid 900", Arial, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
        }

        .table-cross-icon {
          color: #233ed9;
          text-align: center;
          width: 100%;
          font-family: "Fa 400", Arial, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 24px;
        }

        .faq-section {
          background-color: #f8fafc;
          padding: 80px 0;
        }

        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .faq-title {
          font-size: 48px;
          font-weight: 700;
          text-align: center;
          margin-bottom: 60px;
          color: #1a202c;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }

        .faq-item {
          background: white;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .faq-question {
          color: black;
          margin-top: 0;
          margin-bottom: 0;
          padding-right: 10px;
          font-size: 18px;
          font-weight: 400;
          line-height: 28px;
        }

        .faq-answer {
          color: #24378b;
          padding-top: 10px;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
        .feature-section {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .feature-title {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 48px;
  }
  .feature-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 48px;
  }
  .feature-toc {
    background: #fff;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    font-weight: 500;
    position: sticky;
    top: 140px;
    height: fit-content;
  }
  .feature-toc ul {
    list-style: none;
    padding: 0;
  }
  .feature-toc li {
    margin-bottom: 16px;
  }
  .feature-toc a {
    text-decoration: none;
    color: #222;
    padding: 8px 12px;
    border-radius: 8px;
    display: block;
  }
  .feature-toc a:hover,
  .feature-toc a.active {
    background: #f2f6ff;
    color: #24378b;
  }
  .feature-content {
    flex: 1;
  }
  .feature-content h3 {
    font-size: 22px;
    font-weight: 600;
    margin-top: 32px;
  }
  .feature-content p {
    margin: 8px 0;
    line-height: 1.6;
  }
    @media (max-width: 1023px) {
  .custom-grid,
  .custom-grid-reverse {
    grid-template-columns: 1fr !important;
    grid-column-gap: 0 !important;
    row-gap: 32px !important;
    padding: 24px 0 !important;
    border-radius: 24px !important;
  }
}

@media (max-width: 640px) {
  .brand-h1,
  .section-h2,
  .us-vs-them-h2 {
    font-size: 2rem !important;
    line-height: 2.4rem !important;
    letter-spacing: -0.5px;
    word-break: normal;
    hyphens: auto;
  }
  .custom-para {
    font-size: 1rem !important;
    line-height: 1.6rem !important;
    padding: 0 8px;
  }
}

.comparison-table {
  overflow-x: auto;
}
@media (max-width: 1023px) {
  .feature-layout {
    display: block !important;
  }
  .feature-toc {
    position: static !important;
    width: 100% !important;
    margin-bottom: 32px !important;
  }
  .feature-content {
    width: 100% !important;
  }
}
  @media (max-width: 768px) {
  .comparison-table .table-cell-feature {
    width: auto !important;
    padding: 12px 8px !important;
    font-size: 13px !important;
    white-space: normal !important;     /* Allow wrapping! */
    word-break: break-word;
  }
  .comparison-table .table-cell-check,
  .comparison-table .table-header-cell {
    width: auto !important;
    padding: 12px 8px !important;
    font-size: 13px !important;
    white-space: nowrap !important;   /* Keep for short values only */
  }
  .comparison-table {
    font-size: 13px !important;
    border-radius: 8px !important;
  }
}
  .feature-section h3 {
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 400;
}
  .text-foreground {
    color: #253edb;
}
  
  
  
        
      `}</style>
      <Helmet>
        <title>Otto AI Invoice Generator vs Invoicer.ai</title>
        <meta
          name="description"
          content="Compare Otto AI and Invoicer.ai. See why Otto is the better invoice generator for freelancers and small businesses, no limits, offline access, full customization, and smart automation."
        />
        <link
          rel="canonical"
          href="https://joinotto.com/invoicing/invoicer-alternative"
        />
        <meta name="keywords" content="invoicer.ai alternative, compare tools, otto ai invoice generator vs invoicer, unlimited invoices, offline invoice creator" />
        <meta
          property="og:title"
          content="Otto AI Invoice Generator vs Invoicer.ai"
        />
        <meta
          property="og:description"
          content="Compare Otto AI and Invoicer.ai. See why Otto is the better invoice generator for freelancers and small businesses, no limits, offline access, full customization, and smart automation."
        />
        <meta
          property="og:url"
          content="https://joinotto.com/invoicing/invoicer-alternative"
        />
        <meta
          property="twitter:title"
          content="Otto AI Invoice Generator vs Invoicer.ai"
        />
        <meta
          property="twitter:description"
          content="Compare Otto AI and Invoicer.ai. See why Otto is the better invoice generator for freelancers and small businesses, no limits, offline access, full customization, and smart automation."
        />
      </Helmet>
      
      <div className="min-h-screen" style={{ backgroundColor: 'var(--_new-home---body)' }}>
        <Header />
        
        {/* Main Content */}
        
          {/* Breadcrumb - Responsive */}
<div className="max-w-[1450px] mx-auto px-6 sm:px-8 mt-24">
  <Breadcrumb className="flex flex-wrap text-sm text-gray-500 space-x-1 sm:space-x-2 overflow-x-auto">
    <BreadcrumbList className="flex flex-wrap items-center gap-x-1 gap-y-1">
      <BreadcrumbItem>
        <BreadcrumbLink href="https://joinotto.com/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="https://joinotto.com/invoicing">Invoicing</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Invoicer Alternative</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>

<main className="w-full max-w-[1650px] mx-auto pt-[64px] md:pt-[70px] pb-8 px-4 sm:px-8 lg:px-[193px]">

          {/* Page Header Section */}
          <div className="text-center mb-12 mt-2">
            <h1 className="brand-h1 font-medium mb-4">
            Otto AI Invoice Generator vs Invoicer.ai
            </h1>
            <p className="custom-para brand-text mx-auto">
            Ditch manual invoicing and bloated tools. Otto AI empowers freelancers, agencies, and small business owners with an intelligent system that adapts to the way you work. Compare Otto AI with Invoicer.ai and see why more service providers are switching to smarter automation, smarter design, and smarter support.
            </p>
          </div>

          {/* comparison table */}
<div className="w-full overflow-x-auto">
  <div className="min-w-[720px] max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
    <Table className="w-full text-sm table-fixed">
      <TableHeader>
        <TableRow className="border-b border-gray-200 bg-[#f2f6ff]">
          <TableHead className="table-header-cell w-1/3 text-left font-bold text-black border-r border-gray-200">Feature</TableHead>
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black border-r border-gray-200">Otto AI</TableHead>
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black">Invoicer.ai</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          ["Unlimited Invoices", "tick", "tick"],
          ["Smart Invoice Automation", "tick", "cross"],
          ["Custom Branding", "tick", "tick"],
          ["Multi-currency Support", "tick", "cross"],
          ["Offline Access (Mobile & Web)", "tick", "cross"],
          ["Advanced Line-Item Customization", "tick", "tick"],
          ["Mobile-Responsive Interface", "tick", "tick"],
          ["Signature Upload on Invoices", "tick", "cross"],
          
        ].map(([feature, otto, invoicer], index) => (
          <TableRow className="border-b border-gray-100" key={`${feature}-${index}`}>
            <TableCell className="table-cell-feature py-2 md:py-4 px-3 text-left border-r border-gray-100 font-medium">{feature}</TableCell>
            {[otto, invoicer].map((val, i) => (
              <TableCell className="table-cell-check py-2 md:py-4 px-3 text-center border-r border-gray-100" key={i}>
                <div className="flex items-center justify-center gap-1">
                  {val.includes("tick") && (
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  {val.includes("cross") && (
                    <div className="w-5 h-5 border-2 rounded-full flex items-center justify-center" style={{ borderColor: "#233ed9" }}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" style={{ color: "#233ed9" }} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  )}
                </div>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>




          {/* New Section */}
<div className="text-center mt-20 mb-12">
  <h2 className="section-h2 mb-4">
    Limitation of Invoicer Invoice Generator Tool
  </h2>
  <p className="section-para mt-2 text-gray-600">
    No limits, more control, and the freedom to work your way, Otto AI invoice generator makes every invoice faster, smarter, and truly yours.
  </p>
</div>

{/* Section 1 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      No Limits, Just Growth
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Many tools like Invoicer.ai put caps on how many invoices you can send or require you to upgrade just to do more business. Otto AI invoice generator removes these barriers entirely. You can create and send as many invoices as your work demands, no restrictions, no extra fees. It’s designed to grow with freelancers, agencies, and small teams who don’t want their billing held back by usage tiers.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Unlimited Invoicing"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 2 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Smarter and More Flexible Setup
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      While Invoicer.ai offers basic invoice creation, it lacks the ability to adapt to complex needs like advanced line-item customization, purchase order reference, or barcode integration. Otto AI invoice generator was built with those realities in mind. You can fully customize each invoice with item details, pricing logic, tax handling, and PO support, ideal for businesses that go beyond simple service billing.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Flexible Invoicing Setup"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 3 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Works Wherever You Do
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicer.ai depends entirely on an internet connection, meaning you’re stuck when you’re offline or on the move. Otto AI invoice generator works even when you’re not connected, so you can draft or review invoices on the go and sync them automatically when you’re back online. Its mobile-responsive design ensures everything looks and works beautifully whether you’re on a phone, tablet, or laptop.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Offline Invoicing"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 4 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      More Professional, More Personal
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      With Invoicer.ai, customization options are minimal, your brand often takes a backseat. Otto AI invoice generator puts your business front and center. You can upload your logo, choose themes, and even add a signature to every invoice. It also supports multiple currencies and formats, helping you deliver polished, compliant invoices to clients around the world without the need for extra tools or formatting hassles.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Branded Invoices"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

          {/* Feature Comparison Section: Otto AI vs Invoicer.ai */}
<section className="feature-section">
  <h2 className="feature-title">
    Features by Features Comparison of the Leading Invoice Generator
  </h2>
  <div className="feature-layout">
    {/* Table of Contents */}
    <div className="feature-toc">
      <ul>
        <li><a href="#invoicer_invoicing" className="active">Unlimited Invoices Without Paywalls</a></li>
        <li><a href="#invoicer_automation">Smart Automation for Faster Billing</a></li>
        <li><a href="#invoicer_branding">Branding That Reflects Your Business</a></li>
        <li><a href="#invoicer_currency">Support for Multiple Currencies</a></li>
        <li><a href="#invoicer_offline">Create and Edit Offline</a></li>
        <li><a href="#invoicer_lineitems">Full Control Over Line Items</a></li>
        <li><a href="#invoicer_devices">Works Seamlessly on Any Device</a></li>
      </ul>
    </div>

    {/* Content Area */}
    <div className="feature-content">
      
      <div id="invoicer_invoicing">
        <h3>Unlimited Invoices Without Paywalls</h3>
        <p><strong>Otto AI Invoice Generator</strong><br />
        Download as many invoices as your business needs. Otto AI never limits your growth with hidden usage caps or forced upgrades. Whether you're a freelancer or a growing team, you can create, send, and manage unlimited invoices, always.</p>
        <p><strong>Invoicer.ai</strong><br />
        Places restrictions on how many invoices you can generate on lower plans. As your workload increases, you're required to upgrade just to keep working.</p>
      </div>

      <div id="invoicer_automation">
        <h3>Smart Automation for Faster Billing</h3>
        <p><strong>Otto AI Invoice Generator</strong><br />
        Automatically fills in repetitive details, saves your most-used formats, and helps you create invoices in seconds. Otto AI intelligently remembers your preferences, making invoice creation feel effortless.</p>
        <p><strong>Invoicer.ai</strong><br />
        Offers a manual setup for each invoice with limited smart automation, requiring repetitive entry of client and project details every time.</p>
      </div>

      <div id="invoicer_branding">
        <h3>Branding That Reflects Your Business</h3>
        <p><strong>Otto AI Invoice Generator</strong><br />
        Upload your logo, apply brand colors, and personalize every invoice. Otto AI lets your documents reflect your brand with a polished, professional finish.</p>
        <p><strong>Invoicer.ai</strong><br />
        Provides basic logo placement but lacks deeper customization options like theme styling or layout control for consistent branding.</p>
      </div>

      <div id="invoicer_currency">
        <h3>Support for Multiple Currencies</h3>
        <p><strong>Otto AI Invoice Generator</strong><br />
        Send invoices in any currency with localized tax settings. Otto AI is built for freelancers and small businesses working with global clients.</p>
        <p><strong>Invoicer.ai</strong><br />
        Limited currency options and no clear support for tax formatting across different regions, making it harder to serve international clients.</p>
      </div>

      <div id="invoicer_offline">
        <h3>Create and Edit Offline</h3>
        <p><strong>Otto AI Invoice Generator</strong><br />
        Works even when you're offline. Whether you're traveling or working from a remote location, you can still draft and save invoices without an internet connection.</p>
        <p><strong>Invoicer.ai</strong><br />
        Requires a constant internet connection. You can’t access or create invoices when offline, limiting productivity on the go.</p>
      </div>

      <div id="invoicer_lineitems">
        <h3>Full Control Over Line Items</h3>
        <p><strong>Otto AI Invoice Generator</strong><br />
        Add discounts, adjust tax rates, include long descriptions, and format line items exactly the way you need. Ideal for service providers with detailed project structures.</p>
        <p><strong>Invoicer.ai</strong><br />
        Offers limited control over line-item customization. Customization options are basic and not suited for complex or itemized services.</p>
      </div>

      <div id="invoicer_devices">
        <h3>Works Seamlessly on Any Device</h3>
        <p><strong>Otto AI Invoice Generator</strong><br />
        Optimized for mobile, tablet, and desktop. The experience is fast and responsive, allowing you to manage your invoices on the go with zero frustration.</p>
        <p><strong>Invoicer.ai</strong><br />
        Mobile experience is limited and not optimized for quick access or smooth navigation on smaller screens.</p>
      </div>
      
    </div>
  </div>
</section>



          

        {/* --- Interactive Review Section --- */}

  {/* React review logic below */}
  
  <div className="text-center mt-20 mb-12">
            <h2 className="section-h2 mb-4">
            The reviews are in.
            </h2>
            <p className="section-para text-gray-600">
            Straight from our customers—how Otto is changing the way creative businesses manage money.
            </p>
          </div>
        

<OttoReviewShowcase />
</main>


        {/* FAQ Section */}
        <FaqSection faqs={invoicerfaqs} title="FAQs" />


          {/* CTA Section */}
      <div
        className="bg-white py-20 relative"
        style={{
          fontFamily: "Poppins, sans-serif",
          backgroundImage: `radial-gradient(circle, #e0e0e0 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0",
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="mb-6 leading-tight" style={{ fontSize: "40px", fontWeight: "600", color: "#000000" }}>
          Ready to Stop Fighting With Your Invoice Tool?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Create and send unlimited smart, branded invoices with Otto AI. No limits, offline access, and full customization, built for freelancers and small teams.
          </p>
          <a href="https://joinotto.com/tools/invoice-generator" target="_blank" rel="noopener noreferrer"
            style={{
              backgroundColor: "#233ed9",
              color: "white",
              textAlign: "center",
              cursor: "pointer",
              border: "1px solid #72a0ff",
              borderRadius: "12px",
              padding: "10.5px 16px",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "14px",
              textDecoration: "none",
              transition: "all .3s",
              display: "inline-block",
              fontFamily: "Poppins, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1a2fb8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#233ed9";
            }}
          >
            Generate Invoice Online
          </a>
        </div>
      </div>

        <Footer />
      </div>
    </>
  );
};

export default AlternativeInvoicer;
