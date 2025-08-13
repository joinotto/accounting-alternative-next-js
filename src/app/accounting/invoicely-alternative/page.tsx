"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OttoReviewShowcase from "@/components/OttoReviewShowcase";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FaqSection from "@/components/FaqSection";

const invoicelyfaqs = [
  {
    question: "Why is Otto AI a better choice than Invoicely for growing businesses?",
    answer: "Otto AI includes unlimited clients, advanced features like inventory tracking and AI-powered invoice creation, and powerful client management tools—all available for free. Invoicely limits key features to paid plans, which can hold back your business as it grows."
  },
  {
    question: "How do Otto AI invoice customization options compare to Invoicely?",
    answer: "Otto AI offers rich customization with drag-and-drop editing, flexible layouts, and deep branding controls so your invoices truly reflect your style. Invoicely’s customization is basic, with limited template adjustments, which may not meet the needs of creative professionals."
  },
  {
    question: "Can Otto AI generate invoices offline unlike Invoicely?",
    answer: "Yes! Otto AI allows you to draft and edit invoices offline, giving you flexibility to work anywhere, anytime. Invoicely requires an internet connection for most tasks, making it less reliable for freelancers on the go or in areas with poor connectivity."
  },
  {
    question: "Does Otto AI offer better payment options than Invoicely?",
    answer: "Absolutely. Otto AI supports multiple payment gateways like PayPal, Stripe, ACH, UPI, and offline payments, giving your clients flexibility to pay however they prefer. Invoicely’s payment methods are limited, which can slow down your cash flow."
  },
  {
    question: "How do Otto AI reporting tools compare to Invoicely’s?",
    answer: "Otto AI delivers advanced, visual reports with real-time insights, customizable filters, and automated tax summaries to help you make smarter business decisions. Invoicely’s reporting is basic and lacks the depth many freelancers and small businesses need for comprehensive financial analysis."
  },
];

const AlternativeInvoicely = () => {
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
    font-size: 36px;
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
        <BreadcrumbPage>Invoicely Alternative</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>

<main className="w-full max-w-[1650px] mx-auto pt-[64px] md:pt-[70px] pb-8 px-4 sm:px-8 lg:px-[193px]">

          {/* Page Header Section */}
          <div className="text-center mb-12 mt-2">
            <h1 className="brand-h1 font-medium mb-4">
            Otto AI vs Invoicely
            </h1>
            <p className="custom-para brand-text mx-auto">
            Otto AI elevates invoicing and client management with features Invoicely lacks. Discover the best alternative to Invoicely, built for modern creators and small businesses.
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
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black">Invoicely</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          ["AI-Assisted Invoice Creation", "tick", "cross"],
          ["Customizable Templates & Branding", "tick", "warn Basic only"],
          ["Recurring Invoicing", "tick", "tick"],
          ["Payment Reminders", "tick", "tick"],
          ["Multi-Currency Support", "tick", "tick"],
          ["Invoice Limits", "tick Unlimited", "warn Limited on free plan"],
          ["Purchase Order Limits", "tick Unlimited", "cross"],
          ["Offline Access", "tick", "cross Requires internet"],
          ["Client Dashboard/Portal", "tick", "warn Limited"],
          ["Auto Tax Estimation & Reporting", "tick", "warn Manual"],
          ["Barcode & Inventory Tracking", "tick", "cross"],
          ["E-Invoice Generation", "tick", "cross"],
          ["WhatsApp Integration", "tick", "cross"],
          ["Online Store/Service Portal", "tick", "cross"],
          ["Automatic Write-Off Tracking", "tick", "cross"],
          ["Smart Client Notes & Fields", "tick", "warn Basic"],
          ["Mobile-Responsive", "tick", "tick"],
          ["Save & Resume Editing", "tick", "warn Partial support"]
        ].map(([feature, otto, invoicely]) => (
          <TableRow className="border-b border-gray-100" key={feature}>
            <TableCell className="table-cell-feature py-2 md:py-4 px-3 text-left border-r border-gray-100 font-medium">{feature}</TableCell>
            {[otto, invoicely].map((val, i) => (
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
                  {val.includes("warn") && (
                    <span className="text-xs whitespace-nowrap flex items-center gap-1">
                      <span className="text-yellow-500">⚠️</span>
                      <span className="text-black">{val.replace("warn", "").trim()}</span>
                    </span>
                  )}
                  {val.includes("Unlimited") && (
                    <span className="text-xs whitespace-nowrap">Unlimited</span>
                  )}
                  {val.includes("Requires internet") && (
                    <span className="text-xs text-gray-700 whitespace-nowrap">Requires internet</span>
                  )}
                  {val.includes("Manual") && !val.includes("warn") && (
                    <span className="text-xs text-gray-700 whitespace-nowrap">Manual</span>
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
    Limitations of Invoicely Software
  </h2>
  <p className="section-para mt-2 text-gray-600">
    While Invoicely provides basic invoicing for free,<br></br>
    essential features like advanced customization, reporting, and integrations are locked behind paid plans, limiting its usefulness for serious businesses.
  </p>
</div>

{/* Section 1 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Unlimited Clients Without Upgrades
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely’s free plan limits your client base, pushing you to upgrade as your business grows. Otto AI provides unlimited client management from the start, letting you scale your business without worrying about forced upgrades or hidden costs.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Unlimited Clients"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 2 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Free Access to Premium Features
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely reserves key features—like branding, multi-user support, and time tracking—for paid tiers. Otto AI includes these powerful tools for free, ensuring you get everything you need to run your business efficiently without breaking the bank.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Premium Tools Access"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 3 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Offline Functionality for True Flexibility
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely requires constant internet access to create and manage invoices, limiting your productivity. Otto AI enables offline drafting and editing, letting you work on invoices anytime, even without Wi-Fi.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Offline Mode"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 4 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Unlimited Customization Options
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely’s customization options are basic, restricting your ability to create truly branded invoices. Otto AI offers advanced templates with drag-and-drop editing, allowing you to tailor every element to match your unique brand style.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Advanced Customization"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 5 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Flexible, Modern Payment Options
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely’s payment options are limited, potentially inconveniencing your clients. Otto AI supports ACH, credit/debit cards, PayPal, UPI, and offline payments, so your clients can pay how they prefer, speeding up your cash flow.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Payment Flexibility"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 6 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Dedicated Client Portals
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely lacks robust client portals, making it harder for clients to view invoices and track their payment history. Otto AI’s personalized portals allow clients to access their billing records, approve quotes, and make payments seamlessly.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Client Portal"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 7 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Integrated Inventory Management
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely doesn’t include inventory tools, requiring separate software for creators selling products. Otto AI provides integrated SKU and barcode tracking, streamlining inventory management directly within your invoicing system.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Inventory Features"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 8 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Advanced, Visual Reporting
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely offers basic reports that can leave you guessing about your finances. Otto AI delivers comprehensive, visual analytics with customizable filters and real-time updates, helping you make confident business decisions.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Visual Reports"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 9 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Automated Tax Tools
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely’s tax features are limited and manual, increasing the risk of errors. Otto AI automates tax calculations, including GST and 1099 summaries, ensuring accurate compliance and saving time during tax season.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Tax Automation"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 10 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Direct WhatsApp Integration
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Invoicely lacks built-in tools for sharing invoices through modern channels like WhatsApp. Otto AI allows direct invoice sharing, reminders, and communication through WhatsApp, keeping your clients engaged and your business top-of-mind.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="WhatsApp Integration"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>



          {/* Feature Comparison Section: Otto AI vs Invoicely */}
<section className="feature-section">
  <h2 className="feature-title">
    Feature-by-Feature <br />
    Comparison of the Leading Invoicing Software
  </h2>
  <div className="feature-layout">
    {/* Table of Contents */}
    <div className="feature-toc">
      <ul>
        <li><a href="#invoicely_invoicing" className="active">Comparing Tools on Invoicing Customization</a></li>
        <li><a href="#invoicely_client">Comparing Tools on Client Management</a></li>
        <li><a href="#invoicely_reporting">Comparing Tools on Reporting and Analytics</a></li>
        <li><a href="#invoicely_summary">Summary</a></li>
      </ul>
    </div>

    {/* Content Area */}
    <div className="feature-content">
      {/* Invoicing Customization */}
      <div id="invoicely_invoicing">
        <h3>Comparing Tools on Invoicing Customization</h3>
        <p><strong>Otto AI</strong> <br/>Offers rich invoice customization with drag-and-drop editing, unlimited line items, and advanced branding options, helping creators stand out professionally.</p>
        <p><strong>Invoicely</strong> <br/>Customization is limited, offering only basic adjustments like logos and colors, which may not meet the needs of creative professionals.</p>
      </div>

      {/* Client Management */}
      <div id="invoicely_client">
        <h3>Comparing Tools on Client Management</h3>
        <p><strong>Otto AI</strong> <br/>Includes smart client dashboards, auto-reminders, and integrated messaging, making it easy to manage relationships and keep clients informed.</p>
        <p><strong>Invoicely</strong> <br/>Provides simple client records without deeper engagement features like personalized portals or advanced communication tools.</p>
      </div>

      {/* Reporting and Analytics */}
      <div id="invoicely_reporting">
        <h3>Comparing Tools on Reporting and Analytics</h3>
        <p><strong>Otto AI</strong> <br/>Offers visual reports offer income tracking, automated tax summaries, and customizable views by client or project, perfect for freelancers and growing businesses.</p>
        <p><strong>Invoicely</strong> <br/>Reporting tools are basic and lack advanced filters, which can limit insights for businesses needing detailed financial analysis.</p>
      </div>

      {/* Summary */}
      <div id="invoicely_summary">
        <h3>Summary</h3>
        <p>Otto AI surpasses Invoicely with unlimited clients, advanced customization, powerful features, and free access, making it the best choice for creators seeking a comprehensive invoicing solution.</p>
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
        <FaqSection faqs={invoicelyfaqs} title="FAQs" />


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
          Switch to Otto AI Today
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience the simplicity, speed, and flexibility of Otto AI—your best alternative to QuickBooks. Start for free now!
          </p>
          <a
           href="https://joinotto.com/invoicing" 
           target="_blank"
           rel="noopener noreferrer"
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

export default AlternativeInvoicely;
