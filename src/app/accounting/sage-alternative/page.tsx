"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OttoReviewShowcase from "@/components/OttoReviewShowcase";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FaqSection from "@/components/FaqSection";


const SageAlternativeInvoicer = () => {
  const sagealternativesfaqs = [
    {
      question: "Does Otto AI offer real-time reconciliation compared to Sage’s manual process?",
      answer: "Yes, unlike Sage, Otto AI reconciles transactions continuously without manual effort."
    },
    {
      question: "Does Otto AI use AI for receipts and invoice capture?",
      answer: "Yes, Otto AI includes built-in OCR capture. Sage relies on third-party integrations."
    },
    {
      question: "Will Otto AI help me find tax deductions automatically?",
      answer: "Yes, Otto AI flags niche deductions continuously. Sage’s AI assistance (Copilot) is still limited."
    },
    {
      question: "Can Otto AI provide plain-language insights from my data?",
      answer: "Yes, Otto AI turns your data into clear business stories. Sage offers standard dashboards only."
    },
    {
      question: "Does Otto AI support multi-entity and departmental consolidation?",
      answer: "Yes, you can monitor multiple entities in one place. Sage typically requires separate accounts."
    },
    {
      question: "Is there an AI chat accountant to ask financial questions?",
      answer: "Yes, Otto AI lets you ask and get answers instantly, while Sage doesn’t yet offer that kind of chat AI."
    },
    {
      question: "Can Otto AI detect fraud or errors in real time?",
      answer: "Yes, automated anomaly detection helps catch issues early, which Sage does not include."
    },
    {
      question: "What about tax filing and compliance; which platform handles it better?",
      answer: "Otto AI automates vendor compliance, deduction tracking, and tax-ready reporting. Sage does not."
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
        <BreadcrumbPage>Sage Alternative</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>

<main className="w-full max-w-[1650px] mx-auto pt-[64px] md:pt-[70px] pb-8 px-4 sm:px-8 lg:px-[193px]">

          {/* Page Header Section */}
          <div className="text-center mb-12 mt-2">
            <h1 className="brand-h1 font-medium mb-4">
            Otto AI vs Sage Accounting
            </h1>
            <p className="custom-para brand-text mx-auto">
            Automate reconciliation, track all your income sources, and maximize tax savings, with AI insights that help you make better decisions every day.
            </p>
          </div>

          {/* comparison table */}
<div className="w-full overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
  <div className="min-w-[720px] max-w-5xl mx-auto border border-gray-200 rounded-2xl overflow-hidden" style={{ width: '100%', maxWidth: '100vw', overflowX: 'auto' }}>
    <Table className="w-full text-sm" style={{ tableLayout: 'fixed', minWidth: '720px' }}>
      <TableHeader>
        <TableRow className="border-b border-gray-200 bg-[#f2f6ff]">
          <TableHead className="table-header-cell w-1/3 text-left font-bold text-black border-r border-gray-200">Feature</TableHead>
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black border-r border-gray-200">Otto AI Accounting</TableHead>
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black">Sage Accounting</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          ["Bank & Credit-Card Integration", "tick", "tick"],
          ["24/7 Bank-Feed Reconciliation (Continuous Close)", "tick", "cross"],
          ["Automatic Transaction Categorization", "tick", "tick"],
          ["OCR / AI Data Capture (receipts & invoices)", "tick", "warn Partially"],
          ["Multi-Platform Income Tracking (Venmo, PayPal, Zelle, etc.)", "tick", "cross"],
          ["Real-Time Financial Statements & Dashboards", "tick", "tick"],
          ["AI-Driven Tax Deduction Identification", "tick", "warn Emerging"],
          ["AI Insights & KPI Dashboards", "tick", "warn No – Standard reports only"],
          ["Chat-Based AI Accountant (Natural-Language Q&A)", "tick", "warn Copilot supports simple automation only"],
          ["Chain-of-Thought Explainability for Every Entry", "tick", "cross"],
          ["Dedicated Controller-Led Finance Team", "tick", "cross"],
          ["Bill-Pay & End-to-End A/P Automation", "tick", "warn Partial – Basic entry and processing only"],
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
          
        ].map(([feature, otto, invoicer]) => (
          <TableRow className="border-b border-gray-100" key={feature}>
            <TableCell 
              className="py-2 md:py-4 px-3 text-left border-r border-gray-100 font-medium"
              style={{
                minWidth: '200px',
                width: '33.33%',
                wordBreak: 'break-word',
                padding: '0.5rem 0.5rem'
              }}
            >
              {feature}
            </TableCell>
            {[otto, invoicer].map((val, i) => {
              const hasText = val.includes("warn") || val.includes("tick ") || val.includes("cross ");
              const textContent = hasText 
                ? (val.includes("warn") 
                    ? val.replace("warn", "").trim()
                    : val.includes("tick ")
                      ? val.replace("tick", "").trim()
                      : val.replace("cross", "").trim())
                : "";
              
              return (
                <TableCell 
                  className="py-2 md:py-4 px-2 text-center border-r border-gray-100 align-top" 
                  key={i}
                  style={{
                    minWidth: '120px',
                    width: '33.33%',
                    wordBreak: 'break-word',
                    padding: '0.5rem 0.25rem'
                  }}
                >
                  <div className="flex flex-col items-center justify-center h-full" style={{ minHeight: '60px' }}>
                    <div className="flex items-center justify-center w-full">
                      {val.includes("tick") && (
                        <div className="w-5 h-5 bg-black rounded-full flex-shrink-0 flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      )}
                      {val.includes("cross") && (
                        <div className="w-5 h-5 border-2 rounded-full flex-shrink-0 flex items-center justify-center" style={{ borderColor: "#233ed9" }}>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" style={{ color: "#233ed9" }} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                      )}
                      {val.includes("warn") && (
                        <span className="text-yellow-500 text-lg flex-shrink-0">⚠️</span>
                      )}
                    </div>
                    {hasText && (
                      <div className="text-xs text-center text-gray-700 px-1 w-full mt-1">
                        {textContent}
                      </div>
                    )}
                  </div>
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>




          {/* New Section */}
<div className="text-center mt-20 mb-12">
  <h2 className="section-h2 mb-4">
  Limitations of Sage Accounting
  </h2>
  <p className="section-para mt-2 text-gray-600">
  From missing AI-driven insights to limited automation, learn where Sage falls short and how Otto AI fills those gaps for modern businesses.  </p>
</div>

{/* Section 1 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    No 24/7 Continuous Reconciliation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Sage connects to your bank, but reconciliations still require manual review and matching. Without true continuous close, your books aren’t always up-to-date in real time.    </p>
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
    Limited OCR & AI Data Capture
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    While Sage offers receipt scanning via a third-party tool (AutoEntry), it’s not built-in or as seamless as native AI-powered OCR. This adds extra steps and potential costs.
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
    No Native Multi-Platform Income Tracking
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Sage doesn’t natively integrate with payment apps like Venmo, PayPal, or Zelle. This makes income tracking harder for creators and small businesses with diverse payment sources.
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
    Limited AI for Tax Deduction Identification
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Sage is rolling out an AI assistant (Copilot), but it currently lacks full AI-driven deduction detection that proactively identifies industry-specific savings opportunities.
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

{/* Section 5 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    No Advanced AI Insights or KPI Dashboards
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    While Sage provides standard reports and dashboards, it doesn’t deliver AI-powered analytics or plain-language insights that explain financial trends and risks.
        </p>
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
    Limited Accounts Payable Automation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Sage supports bill entry and payment, but lacks full, end-to-end A/P automation, revenue reconciliation, and POS deposit matching that save significant time for growing businesses.    </p>
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
    No Continuous Audit or Error Detection
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Sage doesn’t automatically scan for anomalies, duplicate entries, or compliance risks in real time, which could delay problem detection until period-end.    </p>
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
    No Multi-Entity Consolidation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Sage doesn’t allow for consolidated reporting across multiple business entities or departments without additional workarounds or separate accounts.    </p>
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
    Limited Compliance Automation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Sage doesn’t automate 1099 vendor compliance or provide built-in tools for legal entity management, leaving compliance tracking as a manual process.    </p>
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
    No On-Demand Finance Team or Catch-Up Bookkeeping
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Sage is purely software, it doesn’t provide access to a dedicated controller, CPA, or bookkeeping team, nor services to get your books caught up if you fall behind.    </p>
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

          {/* Feature Comparison Section: Otto AI vs Invoicer.ai */}
<section className="feature-section">
  <h2 className="feature-title">
    Features by Features <br />Comparison of the Leading AI Accounting Software
  </h2>
  <div className="feature-layout">
    {/* Table of Contents */}
    <div className="feature-toc">
      <ul>
        <li><a href="#invoicer_invoicing" className="active">Comparing Tools on Core Accounting</a></li>
        <li><a href="#invoicer_automation">Comparing Tools on Tax Compliance & Filing Support</a></li>
        <li><a href="#invoicer_branding">Comparing Tools on Financial Reporting & Business Insights</a></li>
        <li><a href="#invoicer_currency">Summary</a></li>
      </ul>
    </div>

    {/* Content Area */}
    <div className="feature-content">
      
      <div id="invoicer_invoicing">
        <h3>Comparing Tools on Core Accounting</h3>
        <p><strong>Sage</strong><br />
        Sage delivers solid fundamentals bank feeds, transaction matching, and basic dashboards, automating manual entry and reconciliation for standard use cases.</p>
        <p><strong>Otto AI</strong><br />
        However, it lacks real-time, 24/7 reconciliation and seamless income tracking from modern payment platforms like Venmo, PayPal, or Zelle. Otto AI goes beyond: transactions reconcile automatically, income from all your payment channels syncs, and AI-powered OCR captures receipts instantly, no manual reconciliation required.</p>
      </div>

      <div id="invoicer_automation">
        <h3>Comparing Tools on Tax Compliance & Filing Support</h3>
        <p><strong>Sage</strong><br />
        Sage is evolving toward AI-powered finance automation, its Copilot and AI initiatives hint at automation for invoice processing and insights.</p>
        <p><strong>Otto AI</strong><br />
        Yet, Sage still doesn’t support features like industry-specific tax deduction identification, automated 1099 workflows, or comprehensive entity-level compliance. Otto AI bridges these gaps with built-in OCR organization, AI deduction detection, and ready-to-file compliance packages, so you stay prepared and worry-free.</p>
      </div>

      <div id="invoicer_branding">
        <h3>Comparing Tools on Financial Reporting & Business Insights</h3>
        <p>Sage includes real-time dashboards and report tools for cash flow, VAT, and detailed tracking across plans. But they remain traditional, lacking AI-powered insights that explain “why” trends occur or where opportunities lie. Otto AI transforms your financial data into clear, actionable insights, showing profitability per client, trend anomalies, and performance forecasts in easy, plain language.</p>
      </div>

      <div id="honey_summary">
        <h3>Summary</h3>
        <p>Sage provides reliable cloud-based accounting with secure bank feeds, real-time dashboards, and familiar workflows. It’s a solid choice for small businesses seeking foundational tools. Otto AI Accounting delivers everything Sage does, but adds game-changing automation: continuous reconciliation, smart income aggregation, AI-enabled tax intelligence, and insightful storytelling dashboards. For creators, freelancers, and evolving businesses, Otto AI isn’t just an alternative, it’s a smarter accounting partner.</p>
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
        <FaqSection faqs={sagealternativesfaqs} title="FAQs" />


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

export default SageAlternativeInvoicer;
