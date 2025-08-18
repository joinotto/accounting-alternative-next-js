"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OttoReviewShowcase from "@/components/OttoReviewShowcase";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FaqSection from "@/components/FaqSection";


const AlternativeWave = () => {
  const wavefaqs = [
    {
      question: "Wave is free, why should I upgrade to Otto AI?",
      answer: "Because Otto AI includes continuous reconciliation, multi-platform income tracking, AI insights, and tax support that Wave doesn’t offer."
    },
    {
      question: "Will Otto AI help me categorize recurring expenses automatically?",
      answer: "Yes, Otto AI learns and categorizes transactions consistently, unlike Wave’s more manual system."
    },
    {
      question: "Can I capture receipts and bills via mobile camera?",
      answer: "Yes, our mobile OCR technology captures and matches images directly, while Wave’s is more manual."
    },
    {
      question: "Does Otto AI support multiple pay apps like PayPal and Zelle?",
      answer: "Yes, Otto AI imports from modern income platforms automatically, unlike Wave."
    },
    {
      question: "Can I see real-time dashboards?",
      answer: "Yes, Otto AI updates your financial data live. Wave requires export for reporting."
    },
    {
      question: "Will Otto AI flag unusual transactions or anomalies?",
      answer: "Definitely, it scans continuously and flags errors or oddities immediately."
    },
    {
      question: "Is there built-in tax deduction help?",
      answer: "Yes, Otto AI identifies possible deductions in real time. Wave doesn’t include this feature."
    },
    {
      question: "What if my books are behind, can Otto AI fix it instantly?",
      answer: "Yes, catch-up bookkeeping ensures your accounts are back up to date quickly."
    }
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
        <BreadcrumbLink href="https://joinotto.com/accounting">Accounting</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Wave Alternative</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>

<main className="w-full max-w-[1650px] mx-auto pt-[64px] md:pt-[70px] pb-8 px-4 sm:px-8 lg:px-[193px]">

          {/* Page Header Section */}
          <div className="text-center mb-12 mt-2">
            <h1 className="brand-h1 font-medium mb-4">
            Otto AI Accounting vs Wave Accounting
            </h1>
            <p className="custom-para brand-text mx-auto">
            Automate your books, uncover hidden tax savings, and see your business clearly, all with AI built for creators and service-based businesses.
            </p>
          </div>

          {/* comparison table */}
<div className="w-full overflow-x-auto">
  <div className="min-w-[720px] max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden">
    <Table className="w-full text-sm table-fixed">
      <TableHeader>
        <TableRow className="border-b border-gray-200 bg-[#f2f6ff]">
          <TableHead className="table-header-cell w-1/3 text-left font-bold text-black border-r border-gray-200">Feature</TableHead>
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black border-r border-gray-200">Otto AI Accounting</TableHead>
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black">Wave Accounting</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          ["Bank & Credit-Card Integration", "tick", "tick"],
          ["24/7 Bank-Feed Reconciliation (Continuous Close)", "tick", "cross"],
          ["Automatic Transaction Categorization", "tick", "tick"],
          ["OCR / AI Data Capture (receipts & invoices)", "tick", "cross"],
          ["Multi-Platform Income Tracking (Venmo, PayPal, Zelle, etc.)", "tick", "cross"],
          ["Real-Time Financial Statements & Dashboards", "tick", "tick"],
          ["AI-Driven Tax Deduction Identification", "tick", "cross"],
          ["AI Insights & KPI Dashboards", "tick", "cross"],
          ["Chat-Based AI Accountant (Natural-Language Q&A)", "tick", "cross"],
          ["Chain-of-Thought Explainability for Every Entry", "tick", "cross"],
          ["Dedicated Controller-Led Finance Team", "tick", "cross"],
          ["Bill-Pay & End-to-End A/P Automation", "tick", "cross"],
          ["Revenue Reconciliation & POS-Deposit Matching", "tick", "cross"],
          ["G/L Hygiene & Vendor-Deduplication Tools", "tick", "cross"],
          ["Continuous Audit, Anomaly & Error Detection", "tick", "cross"],
          ["Client Collaboration (smart mailroom / 1-click queries)", "tick", "cross"],
          ["Multi-Entity / Departmental Consolidation", "tick", "cross"],
          ["Secure Document Vault & Automated Backups (G-Drive integration)", "tick", "cross"],
          ["Automated 1099 Vendor-Compliance & Filing Workflows", "tick", "cross"],
          ["Entity Management (legal entities, ownership structures, compliance tasks)", "tick", "cross"],
          ["Invoicing & Payment Tracking", "tick", "tick"],
          ["Tax Planning & On-Demand CPA Support", "tick", "cross"],
          ["On-Demand Expert Team Messaging (accountants, controllers & CPAs)", "tick", "cross"],
          ["Tax Returns & Preparation", "tick", "cross"],
          ["Catch-Up Bookkeeping", "tick", "cross"]
        ].map(([feature, otto, wave]) => (
          <TableRow className="border-b border-gray-100" key={feature}>
            <TableCell className="table-cell-feature py-2 md:py-4 px-3 text-left border-r border-gray-100 font-medium">{feature}</TableCell>
            {[otto, wave].map((val, i) => (
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
                  {val.includes("Manual") && !val.includes("warn") && (
                    <span className="text-xs text-gray-700 whitespace-nowrap">Manual</span>
                  )}
                  {val.includes("Requires internet") && (
                    <span className="text-xs text-gray-700 whitespace-nowrap">Requires internet</span>
                  )}
                  {val.includes("Not prioritized") && (
                    <span className="text-xs text-gray-700 whitespace-nowrap">Not prioritized</span>
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
  Limitations of Wave Accounting
  </h2>
  <p className="section-para mt-2 text-gray-600">
  From missing automation to limited reporting, discover where Wave falls short<br></br> and how Otto AI fills the gaps for modern businesses.
  </p>
</div>

{/* Section 1 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    No 24/7 Continuous Reconciliation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Wave connects to bank accounts, but it doesn’t reconcile transactions in real time. This means you may have to manually review and match entries, slowing down your close process and increasing the chance of errors.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Standalone Invoicing"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 2 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    No OCR or AI Data Capture
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Wave lacks built-in OCR technology to scan receipts and invoices and instantly match them to transactions. You’ll need to upload and enter details manually, which can become tedious for businesses with frequent expenses.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Free Forever"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 3 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    No Multi-Platform Income Tracking
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    If you get paid via Venmo, PayPal, Zelle, or other modern payment platforms, Wave won’t automatically pull in and categorize that income. Manual imports or CSV uploads are required, adding friction to your bookkeeping.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Flexible Payments"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 4 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    No AI-Driven Tax Deduction Tools
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Wave provides basic expense categorization but doesn’t proactively identify industry-specific tax deductions. Without these insights, many freelancers and creators risk leaving money on the table at tax time.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Payment Holds"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 5 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    No Advanced AI Insights or KPI Dashboards
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Wave’s reporting is limited to standard accounting statements. It doesn’t offer AI-powered dashboards or plain-language business insights that explain trends or highlight actionable opportunities.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Tip Collection"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 6 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    Missing Automation for Accounts Payable & Reconciliation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Wave does not support advanced AP automation, revenue reconciliation, or POS deposit matching. These manual processes can eat into valuable time for growing businesses.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Customizable Invoices"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 7 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    No Continuous Audit or Error Detection
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    With Wave, there’s no system watching for anomalies, duplicate entries, or compliance risks in real time. This reactive approach can delay the discovery of financial issues until it’s too late.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Batch Invoicing"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 8 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    No Multi-Entity or Department Management
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    If you operate multiple entities or departments, Wave doesn’t consolidate them into a single dashboard. You’ll have to manage each business separately, which is inefficient for owners managing multiple ventures.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Mobile Insights"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 9 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    No Compliance or Vendor Management Automation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Wave does not automate 1099 vendor compliance or handle entity-level compliance tasks. All vendor forms and filings must be managed manually or with outside tools.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Analytics Tools"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 10 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    No Expert Finance Team or Catch-Up Bookkeeping
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Wave provides software only, there’s no direct access to accountants, controllers, or CPAs inside the platform. If you fall behind on your books, you’ll need to hire help separately to get caught up.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Offline Access"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>



          {/* Feature Comparison Section: Otto AI vs HoneyBook */}
<section className="feature-section">
  <h2 className="feature-title">
    Feature-by-Feature <br />
    Comparison of the Leading AI Accounting Software
  </h2>
  <div className="feature-layout">
    {/* Table of Contents */}
    <div className="feature-toc">
      <ul>
        <li><a href="#honey_invoicing" className="active">Comparing Tools on Core Accounting</a></li>
        <li><a href="#honey_client">Comparing Tools on Tax Compliance & Filing Support</a></li>
        <li><a href="#honey_reporting">Comparing Tools on Financial Reporting & Business Insights</a></li>
        <li><a href="#honey_summary">Summary</a></li>
      </ul>
    </div>

    {/* Content Area */}
    <div className="feature-content">
      {/* Invoicing Customization */}
      <div id="honey_invoicing">
        <h3>Comparing Tools on Core Accounting</h3>
        <p><strong>Wave</strong> <br/>Wave covers basic bookkeeping well bank connections, transaction categorization, and invoicing are all included. But the automation stops there. There’s no 24/7 continuous reconciliation, multi-platform income tracking, or advanced AP automation.</p>
        <p><strong>Otto AI</strong> <br/>Otto AI takes core accounting further by reconciling in real time, pulling in income from Venmo, PayPal, and Zelle automatically, and matching transactions without manual review. These features eliminate repetitive work and keep your books clean every day, not just at month-end.</p>
      </div>

      {/* Client Management */}
      <div id="honey_client">
        <h3>Comparing Tools on Tax Compliance & Filing Support</h3>
        <p><strong>Wave</strong> <br/>Wave provides standard expense tracking and year-end reports, but it doesn’t have AI-driven tax deduction detection, automated 1099 vendor compliance, or built-in entity management. For most small business owners, that means more manual effort and a greater risk of missed deductions.</p>
        <p><strong>Otto AI</strong> <br/>Otto AI automatically flags industry-specific deductions, organizes receipts with OCR scanning, and generates tax-ready packages without extra data entry. It also automates compliance workflows, making filing simpler and less stressful.</p>
      </div>

      {/* Reporting and Analytics */}
      <div id="honey_reporting">
        <h3>Comparing Tools on Financial Reporting & Business Insights</h3>
        <p><strong>Wave</strong> <br/>Wave offers basic reports like profit and loss statements and balance sheets, but there are no AI-powered KPI dashboards or plain-language insights to help you understand your financial health.</p>
        <p><strong>Otto AI</strong> <br/>Otto AI delivers real-time analytics that explain why your numbers are changing. You’ll see trends, profitability by client or project, and risk areas without having to dig through spreadsheets. It’s financial clarity designed for decision-making, not just record-keeping.</p>
      </div>

      {/* Summary */}
      <div id="honey_summary">
        <h3>Summary</h3>
        <p>Wave is a capable, budget-friendly option for simple accounting needs, but it’s missing the advanced automation, AI insights, and compliance tools that modern businesses expect.</p>
        <p>Otto AI Accounting provides:</p>
        <ul className="space-y-3 mt-4 mb-6 pl-6">
           <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-blue-600 before:font-bold before:text-xl">
             <span className="font-medium">Real-time automation</span> that keeps your books accurate without extra work.
           </li>
           <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-blue-600 before:font-bold before:text-xl">
             <span className="font-medium">Smarter tax tools</span> to maximize deductions and reduce compliance headaches.
           </li>
           <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-blue-600 before:font-bold before:text-xl">
             <span className="font-medium">Clear, actionable insights</span> that go beyond basic reports.
           </li>
         </ul>
         <p>If you want accounting software that works as hard as you do and actively improves your business health, Otto AI is the upgrade from Wave you’ve been waiting for.</p>
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
        <FaqSection faqs={wavefaqs} title="FAQs" />


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
          Switch to Smarter Accounting Today
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join thousands of creators and small businesses using Otto AI to save hours every week, uncover hidden tax savings, and get real-time clarity on their finances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://joinotto.com/apply" 
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
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins, sans-serif",
                minWidth: "150px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1a2fb8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#233ed9";
              }}
            >
              Book a Demo
            </a>
            
            <a
              href="https://app.joinotto.com/auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "white",
                color: "#233ed9",
                textAlign: "center",
                cursor: "pointer",
                border: "1px solid #233ed9",
                borderRadius: "12px",
                padding: "10.5px 16px",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "14px",
                textDecoration: "none",
                transition: "all .3s",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins, sans-serif",
                minWidth: "200px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f8f9fa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginRight: "8px" }}>
                <path d="M17.5781 9.20508C17.5781 8.56641 17.5208 7.95312 17.4306 7.35938H9.14062V10.8506H13.9219C13.7591 11.9693 13.1736 12.9234 12.2806 13.5598V15.5586H14.9138C16.5486 14.0297 17.5781 11.793 17.5781 9.20508Z" fill="#4285F4"/>
                <path d="M9.14062 18C11.4484 18 13.4219 17.1942 14.9139 15.5586L12.2806 13.5598C11.513 14.0995 10.5328 14.4187 9.14062 14.4187C6.89531 14.4187 4.98359 12.9269 4.30922 10.9008H1.58594V12.9591C3.06562 15.938 5.90016 18 9.14062 18Z" fill="#34A853"/>
                <path d="M4.30922 10.9008C4.11914 10.3506 4.01172 9.76078 4.01172 9.14953C4.01172 8.53828 4.11914 7.94844 4.30922 7.39824V5.33984H1.58594C0.952734 6.59062 0.59375 8.01172 0.59375 9.50039C0.59375 10.9891 0.952734 12.4102 1.58594 13.6609L3.21875 12.068L4.30922 10.9008Z" fill="#FBBC05"/>
                <path d="M9.14063 3.73008C10.4402 3.73008 11.6004 4.16602 12.523 5.03672L14.9727 2.58672C13.4219 1.13086 11.4484 0.25 9.14063 0.25C5.90016 0.25 3.06562 2.31172 1.58594 5.33984L4.30922 7.39844C4.98359 5.37227 6.89531 3.73008 9.14063 3.73008Z" fill="#EA4335"/>
              </svg>
              Join with Google
            </a>
          </div>
        </div>
      </div>

        <Footer />
      </div>
    </>
  );
};

export default AlternativeWave;
