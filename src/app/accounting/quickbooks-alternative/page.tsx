"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OttoReviewShowcase from "@/components/OttoReviewShowcase";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FaqSection from "@/components/FaqSection";
const quickbooksfaqs = [
  {
    question: "Can I switch from QuickBooks to Otto AI without losing data?",
    answer: "Absolutely, Otto AI supports seamless data import from QuickBooks, including transactions, categorizations, and customer records, so your financial history stays intact."
  },
  {
    question: "Does Otto AI offer bank feeds and automatic reconciliation?",
    answer: "Yes. Otto AI provides continuous, real-time bank feed reconciliation, far beyond QuickBooks’ manual process."
  },
  {
    question: "Will Otto AI help me uncover tax deductions automatically?",
    answer: "Yes. Otto AI includes AI-powered tax deduction identification that flags industry-specific write-offs without manual searching."
  },
  {
    question: "Can I ask questions like “Which project made the most profit this month?”",
    answer: "Definitely. Otto AI includes a chat-based AI accountant that answers business queries in plain language instantly."
  },
  {
    question: "What happens if my books fall behind?",
    answer: "Otto AI offers built-in catch-up bookkeeping. Our system flags missing transactions and helps you get back on track fast."
  },
  {
    question: "Is there a mobile app to manage accounting on the go?",
    answer: "Yes, you get a sleek mobile interface for capturing receipts, sending invoices, and checking your dashboard anywhere."
  },
  {
    question: "How does Otto AI improve collaboration with accountants?",
    answer: "You can invite your accountant in with just one click, and they get real-time visibility, no separate login or exports needed."
  },
  {
    question: "Is Otto AI secure and reliable?",
    answer: "Completely. We use bank-grade encryption and automated backups in secure Document Vaults (e.g. G-Drive integration) to protect your data."
  }
];

const AlternativeQuickbooks = () => {
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
  /* Target the actual table elements */
  .comparison-table table {
    table-layout: fixed !important;
    width: 100% !important;
  }
  
  .comparison-table .table-cell-feature,
  .comparison-table td:first-child {
    width: 60% !important;
    padding: 12px 8px !important;
    font-size: 12px !important;
    white-space: normal !important;
    word-break: break-word !important;
    overflow-wrap: break-word !important;
    hyphens: auto !important;
    line-height: 1.3 !important;
    max-width: 60% !important;
    min-width: 60% !important;
  }
  
  .comparison-table .table-cell-check,
  .comparison-table .table-header-cell,
  .comparison-table td:not(:first-child) {
    width: 40% !important;
    padding: 12px 4px !important;
    font-size: 12px !important;
    white-space: nowrap !important;
    text-align: center !important;
    max-width: 40% !important;
    min-width: 40% !important;
  }
  
  .comparison-table {
    font-size: 12px !important;
    border-radius: 8px !important;
    table-layout: fixed !important;
    width: 100% !important;
  }
  
  .comparison-table .table-header-cell:first-child,
  .comparison-table th:first-child {
    width: 60% !important;
    max-width: 60% !important;
    min-width: 60% !important;
  }
  
  .comparison-table .table-header-cell:last-child,
  .comparison-table th:last-child {
    width: 40% !important;
    max-width: 40% !important;
    min-width: 40% !important;
  }
  
  /* Force all table cells to respect width */
  .comparison-table td,
  .comparison-table th {
    box-sizing: border-box !important;
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
        <BreadcrumbPage>QuickBooks Alternative</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>

<main className="w-full max-w-[1650px] mx-auto pt-[64px] md:pt-[70px] pb-8 px-4 sm:px-8 lg:px-[193px]">

          {/* Page Header Section */}
          <div className="text-center mb-12 mt-2">
            <h1 className="brand-h1 font-medium mb-4">
            Otto AI vs Quickbooks Online
            </h1>
            <p className="custom-para brand-text mx-auto">
            Simplify your bookkeeping, uncover more tax deductions, and get crystal-clear insights, all with AI built for the way you actually work.
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
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black">QuickBooks Online</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
           ["Bank & Credit-Card Integration", "tick", "tick"],
           ["24/7 Bank-Feed Reconciliation (Continuous Close)", "tick", "tick"],
           ["Automatic Transaction Categorization", "tick", "tick"],
           ["OCR / AI Data Capture (receipts & invoices)", "tick", "cross"],
           ["Multi-Platform Income Tracking (Venmo, PayPal, Zelle, etc.)", "tick", "cross"],
           ["Real-Time Financial Statements & Dashboards", "tick", "tick"],
           ["AI-Driven Tax Deduction Identification", "tick", "cross"],
           ["AI Insights & KPI Dashboards", "tick", "cross"],
           ["Chat-Based AI Accountant (Natural-Language Q&A)", "tick", "cross"],
           ["Chain-of-Thought Explainability for Every Entry", "tick", "cross"],
           ["Dedicated Controller-Led Finance Team", "tick", "cross"],
           ["Bill-Pay & End-to-End A/P Automation", "tick", "tick"],
           ["Revenue Reconciliation & POS-Deposit Matching", "tick", "tick"],
           ["G/L Hygiene & Vendor-Deduplication Tools", "tick", "cross"],
           ["Continuous Audit, Anomaly & Error Detection", "tick", "cross"],
           ["Client Collaboration (smart mailroom / 1-click queries)", "tick", "tick"],
           ["Multi-Entity / Departmental Consolidation", "tick", "cross"],
           ["Secure Document Vault & Automated Backups (G-Drive integration)", "tick", "tick"],
           ["Automated 1099 Vendor-Compliance & Filing Workflows", "tick", "cross"],
           ["Entity Management (legal entities, ownership structures, compliance tasks)", "tick", "cross"],
           ["Invoicing & Payment Tracking", "tick", "tick"],
           ["Tax Planning & On-Demand CPA Support", "tick", "cross"],
           ["On-Demand Expert Team Messaging (accountants, controllers & CPAs)", "tick", "cross"],
           ["Tax Returns & Preparation", "tick", "cross"],
           ["Catch-Up Bookkeeping", "tick", "cross"]
        ].map(([feature, otto, quickbooks]) => (
          <TableRow className="border-b border-gray-100" key={feature}>
            <TableCell className="table-cell-feature py-2 md:py-4 px-3 text-left border-r border-gray-100 font-medium">{feature}</TableCell>
            {[otto, quickbooks].map((val, i) => (
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
                  {val.includes("Not supported") && (
                    <span className="text-xs text-gray-700 whitespace-nowrap">Not supported</span>
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
  Limitations of Quickbooks Accounting
  </h2>
  <p className="section-para mt-2 text-gray-600">
  Discover where QuickBooks falls short for modern creators and small businesses and why smarter, AI-powered alternatives may serve you better.
  </p>
</div>

{/* Section 1 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    Limited AI-Driven Tax Insights
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    QuickBooks lacks built-in, AI-driven tax deduction identification, meaning you may miss out on potential savings unless you manually track industry-specific deductions. Creators and freelancers often leave money on the table without niche-specific guidance.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Simple Setup"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 2 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    No True AI Insights & KPI Dashboards
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    While QuickBooks offers standard financial reports, it doesn’t deliver AI-powered KPI dashboards or plain-language business insights. This makes it harder for non-accountants to see the “story” behind their numbers.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Transparent Pricing"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 3 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    Missing OCR & AI Receipt Capture
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    QuickBooks can store receipts, but it doesn’t use advanced OCR + AI to instantly extract, categorize, and match them to transactions. Manual entry or double-checking remains a time drain.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Focused Invoicing"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 4 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    No Multi-Platform Income Tracking
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    QuickBooks doesn’t automatically pull income from platforms like Venmo, PayPal, or Zelle in a creator-friendly way. If you get paid across multiple channels, expect extra reconciliation work.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Mobile Design"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 5 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    Lacks Chat-Based AI Accountant Support
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    QuickBooks requires traditional navigation through menus and reports. There’s no natural-language, chat-based AI accountant to answer “How much did I earn from photography gigs last quarter?” in seconds.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="No Training"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 6 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    No Chain-of-Thought Explainability for Transactions
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    If a transaction is miscategorized in QuickBooks, you won’t get an AI-generated “reason” for why it was placed there. This lack of explainability means errors are harder to catch and fix.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Built for Creators"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 7 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    Absent Dedicated Controller-Led Finance Support
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    QuickBooks is a tool, not a service. There’s no built-in access to a controller-led finance team to proactively monitor, clean, and advise on your books.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Fast Invoicing"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 8 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    Limited Automation in Compliance & Vendor Management
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    QuickBooks doesn’t automate vendor deduplication, continuous anomaly detection, or 1099 compliance workflows, leaving you to handle these processes manually or with third-party tools.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Client Experience"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 9 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    No On-Demand Expert Messaging
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    While QuickBooks offers community forums and support tickets, there’s no direct, on-demand messaging channel with accountants, controllers, or CPAs inside the platform.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="No Commitments"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 10 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
    No Catch-Up Bookkeeping or Hands-On Help
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    If your books are months behind, QuickBooks won’t catch them up for you. You’ll need to do it yourself or hire outside help, adding cost and delay.    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Creator Support"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>


          {/* Feature Comparison Section: Otto AI vs QuickBooks */}
 <section className="feature-section">
   <h2 className="feature-title">
     Feature-by-Feature <br />
     Comparison of the Leading AI Accounting Software
   </h2>
   <div className="feature-layout">
     {/* Table of Contents */}
     <div className="feature-toc">
       <ul>
         <li><a href="#quick_invoicing" className="active">Comparing Tools on Core Accounting</a></li>
         <li><a href="#quick_client">Comparing Tools on Tax Compliance & Filing Support</a></li>
         <li><a href="#quick_reporting">Comparing Tools on Financial Reporting & Business Insights</a></li>
         <li><a href="#quick_summary">Summary</a></li>
        </ul>
     </div>

     {/* Content Area */}
     <div className="feature-content">
       {/* Invoicing Customization */}
       <div id="quick_invoicing">
         <h3>Comparing Tools on Core Accounting</h3>
         <p>When it comes to day-to-day bookkeeping, both Otto AI Accounting and QuickBooks cover the basics, bank and credit card integration, transaction categorization, and invoicing.
         The difference? Otto AI is built for speed and simplicity.</p>
         <p>QuickBooks offers a wide feature set but requires more manual setup and accounting know-how. Otto AI eliminates extra clicks with always-on bank feed reconciliation and automatic categorization tuned for creators and service-based businesses.</p>
         <p>You can also pull income from Venmo, PayPal, Zelle, and other modern payment platforms, something QuickBooks doesn’t handle natively. This means fewer manual imports and a cleaner, up-to-date ledger without constant effort.</p>
       </div>


       {/* Client Management */}
       <div id="quick_client">
         <h3>Comparing Tools on Tax Compliance & Filing Support</h3>
         <p><strong>QuickBooks</strong> <br/>QuickBooks helps you track tax categories and export data for filing, but it stops short of giving you personalized, AI-driven tax deduction insights. For most business owners, that means you still have to know which expenses qualify, or pay someone to find out.</p>
         <p><strong>Otto AI</strong> <br/>Otto AI built-in tax engine works differently. It automatically flags industry-specific deductions (think camera gear for photographers or software subscriptions for designers), organizes your receipts via OCR scanning, and generates tax-ready reports without you having to chase paperwork.</p>
         <p>When it’s time to file, you can hand over a perfectly packaged set of records to your CPA or file directly with confidence.</p>
       </div>

       {/* Reporting and Analytics */}
       <div id="quick_reporting">
         <h3>Comparing Tools on Financial Reporting & Business Insights</h3>
         <p><strong>QuickBooks</strong> <br/>QuickBooks delivers a robust set of traditional accounting reports, profit and loss statements, balance sheets, and cash flow reports, but they’re often filled with jargon and require accounting literacy to interpret.</p>
         <p><strong>Otto AI</strong> <br/>Otto AI makes financial health instantly understandable. AI-powered dashboards translate raw data into plain-language insights like “Your freelance design revenue grew 28% this quarter” or “Your top-earning client accounted for 40% of income, diversify to reduce risk”.</p>
         <p> These real-time KPIs update automatically, so you’re never waiting until month-end to know how your business is performing.</p>
       </div>

       {/* Summary */}
       <div id="quick_summary">
         <h3>Summary</h3>
         <p>QuickBooks is a powerful general-purpose accounting tool, but it’s built for a broad audience. That means extra complexity, longer setup, and limited personalization for niche industries.</p>
         <p>Otto AI Accounting focuses on what creators, freelancers, and small service-based businesses truly need:
         </p>
         <ul className="space-y-3 mt-4 mb-6 pl-6">
           <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-blue-600 before:font-bold before:text-xl">
             <span className="font-medium">Faster daily bookkeeping</span> with AI-driven categorization and payment platform integration.
           </li>
           <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-blue-600 before:font-bold before:text-xl">
             <span className="font-medium">Smarter tax preparation</span> with industry-specific deduction detection.
           </li>
           <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-blue-600 before:font-bold before:text-xl">
             <span className="font-medium">Clearer business insights</span> without accounting jargon
           </li>
         </ul>
         <p>If you’re looking for a QuickBooks alternative that works with the way you actually run your business, Otto AI keeps your books clean, your taxes optimized, and your decisions data-driven, without the complexity.</p>
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
        <FaqSection faqs={quickbooksfaqs} title="FAQs" />

 
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

export default AlternativeQuickbooks;
