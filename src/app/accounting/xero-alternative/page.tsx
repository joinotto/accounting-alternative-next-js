"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OttoReviewShowcase from "@/components/OttoReviewShowcase";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FaqSection from "@/components/FaqSection";

const xeroalternativesfaqs = [
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

const AlternativeXero = () => {
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
          padding: 12px 8px;
          text-align: center;
          border-right: 1px solid #edeff3;
          width: 140px;
          vertical-align: middle;
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
    white-space: normal !important;
    word-break: break-word;
    min-width: 180px;
  }
  .comparison-table .table-cell-check {
    width: 140px !important;
    min-width: 140px;
    padding: 12px 8px !important;
    font-size: 13px !important;
    white-space: normal;
    text-align: center;
    vertical-align: middle;
  }
  .comparison-table .table-header-cell {
    width: auto !important;
    min-width: 140px;
    padding: 12px 8px !important;
    font-size: 13px !important;
    white-space: normal;
    text-align: center;
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
        <BreadcrumbPage>Xero Alternative</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>

<main className="w-full max-w-[1650px] mx-auto pt-[64px] md:pt-[70px] pb-8 px-4 sm:px-8 lg:px-[193px]">

          {/* Page Header Section */}
          <div className="text-center mb-12 mt-2">
            <h1 className="brand-h1 font-medium mb-4">
            Otto AI vs Xero Accounting
            </h1>
            <p className="custom-para brand-text mx-auto">
            Automate reconciliation, maximize tax savings, and get AI-powered insights, all in one accounting platform built for modern businesses.
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
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black">Xero Accounting</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          ["Bank & Credit-Card Integration", "tick", "tick"],
          ["24/7 Bank-Feed Reconciliation (Continuous Close)", "tick", "cross"],
          ["Automatic Transaction Categorization", "tick", "tick"],
          ["OCR / AI Data Capture (receipts & invoices)", "tick", "warn Partially"],
          ["Multi-Platform Income Tracking (Venmo, PayPal, Zelle, etc.)", "tick", "cross"],
          ["Real-Time Financial Statements & Dashboards", "tick", "tick real-time data, cloud access, customizable dashboards"],
          ["AI-Driven Tax Deduction Identification", "tick", "cross"],
          ["AI Insights & KPI Dashboards", "tick", "cross No AI-powered insights (only standard reports)"],
          ["Chat-Based AI Accountant (Natural-Language Q&A)", "tick", "cross"],
          ["Chain-of-Thought Explainability for Every Entry", "tick", "cross"],
          ["Dedicated Controller-Led Finance Team", "tick", "cross"],
          ["Bill-Pay & End-to-End A/P Automation", "tick", "warn Limited"],
          ["Revenue Reconciliation & POS-Deposit Matching", "tick", "cross"],
          ["G/L Hygiene & Vendor-Deduplication Tools", "tick", "cross"],
          ["Continuous Audit, Anomaly & Error Detection", "tick", "cross"],
          ["Client Collaboration (smart mailroom / 1-click queries)", "tick", "warn Supports real-time collaboration with accountants, but not via chat or smart mailroom paradigms"],
          ["Multi-Entity / Departmental Consolidation", "tick", "cross Xero is generally limited per-organization, with entity consolidation using separate subscriptions"],
          ["Secure Document Vault & Automated Backups (G-Drive integration)", "tick", "cross Basic document attachments in Xero; no dedicated vault"],
          ["Automated 1099 Vendor-Compliance & Filing Workflows", "tick", "cross"],
          ["Entity Management (legal entities, ownership structures, compliance tasks)", "tick", "cross"],
          ["Invoicing & Payment Tracking", "tick", "tick Robust invoicing with reminders, online payments, and mobile app"],
          ["Tax Planning & On-Demand CPA Support", "tick", "cross"],
          ["On-Demand Expert Team Messaging (accountants, controllers & CPAs)", "tick", "cross"],
          ["Tax Returns & Preparation", "tick", "cross"],
          ["Catch-Up Bookkeeping", "tick", "cross"]
        ].map(([feature, otto, invoicely]) => (
          <TableRow className="border-b border-gray-100" key={feature}>
            <TableCell className="table-cell-feature py-2 md:py-4 px-3 text-left border-r border-gray-100 font-medium" style={{ minWidth: '200px', width: '33.33%' }}>{feature}</TableCell>
            {[otto, invoicely].map((val, i) => {
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
                    {!hasText && (val === "tick" || val === "cross") ? null : (
                      !val.includes("warn") && !val.includes("tick ") && !val.includes("cross ") && (
                        <div className="text-xs text-center text-gray-700 px-1 w-full mt-1">
                          {val.includes("Unlimited") 
                            ? "Unlimited" 
                            : val.includes("Requires internet")
                              ? "Requires internet"
                              : val.includes("Manual")
                                ? "Manual"
                                : ""
                          }
                        </div>
                      )
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
  Limitations of Xero Accounting
  </h2>
  <p className="section-para mt-2 text-gray-600">
  From missing AI-driven insights to limited automation, see where Xero falls short and how <br></br>Otto AI helps you work faster, save more, and make better decisions.
  </p>
</div>

{/* Section 1 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
    No 24/7 Continuous Reconciliation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Xero connects to your bank and automates some matching, but it still requires manual review and approval for reconciliation. That means your books aren’t always up-to-date without user intervention.    </p>
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
    Limited OCR & AI Data Capture
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    While Xero offers receipt uploads, its extraction and matching capabilities are basic compared to true AI-powered OCR. You’ll often still need to enter details manually, slowing down your workflow.    </p>
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
    No Native Multi-Platform Income Tracking
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Xero doesn’t natively pull payments from platforms like Venmo, PayPal, or Zelle. You’ll need third-party integrations or manual imports, which adds complexity for freelancers and creators with multiple income streams.    </p>
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
    No AI-Driven Tax Deduction Identification
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Xero can categorize expenses, but it won’t proactively flag niche, industry-specific deductions that could lower your tax bill. This leaves more room for missed savings.    </p>
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
    No AI Insights or KPI Dashboards
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    While Xero has standard financial reports, it lacks AI-driven analytics that explain why changes are happening or where you can optimize. Users must interpret raw data themselves.    </p>
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
    Limited A/P Automation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Xero supports bill entry and payments but doesn’t offer full, end-to-end accounts payable automation or POS deposit matching features that save significant time in Otto AI.    </p>
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
    No Continuous Audit or Error Detection
        </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    There’s no built-in mechanism to flag anomalies, duplicate entries, or suspicious activity in real time. Problems can go unnoticed until month-end or year-end reviews.    </p>
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
    No Multi-Entity Consolidation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Xero requires separate subscriptions for each entity, with no built-in consolidated reporting across businesses or departments, adding cost and administrative overhead for multi-entity owners.    </p>
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
    Limited Compliance Automation
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Xero doesn’t automate 1099 vendor compliance or provide tools for legal entity management, leaving these tasks to manual processes or outside tools    </p>
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
    No On-Demand Expert Finance Team or Catch-Up Bookkeeping
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
    Xero is software-only, there’s no integrated option to message accountants, controllers, or CPAs, and no service for catching up on overdue books without hiring external help.    </p>
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
    Comparison of the Leading AI Accounting Software
  </h2>
  <div className="feature-layout">
    {/* Table of Contents */}
    <div className="feature-toc">
      <ul>
        <li><a href="#invoicely_invoicing" className="active">Comparing Tools on Core Accounting</a></li>
        <li><a href="#invoicely_client">Comparing Tools on Tax Compliance & Filing Support</a></li>
        <li><a href="#invoicely_reporting">Comparing Tools on Financial Reporting & Business Insights</a></li>
        <li><a href="#invoicely_summary">Summary</a></li>
      </ul>
    </div>

    {/* Content Area */}
    <div className="feature-content">
      {/* Invoicing Customization */}
      <div id="invoicely_invoicing">
        <h3>Comparing Tools on Core Accounting</h3>
        <p><strong>Xero</strong> <br/>Xero handles core accounting, bank feeds, transaction categorization, and invoicing, well, but it still requires manual review for reconciliation and doesn’t offer continuous close automation. It also lacks native multi-platform income tracking for payment apps like Venmo, PayPal, or Zelle, meaning extra work for businesses with diverse revenue streams.</p>
        <p><strong>Otto AI</strong> <br/>Otto AI takes these essentials further. Transactions reconcile automatically in real time, income is pulled from all major payment channels, and expenses are matched with AI-powered OCR scanning. This means less manual effort and more time focused on running your business.</p>
      </div>

      {/* Client Management */}
      <div id="invoicely_client">
        <h3>Comparing Tools on Tax Compliance & Filing Support</h3>
        <p><strong>Xero</strong><br/>Xero offers tax category tracking and basic compliance reporting, but it doesn’t have AI-driven deduction identification or automated 1099 vendor workflows. It also lacks built-in entity compliance management, requiring third-party tools or manual tracking.</p>
        <p><strong>Otto AI</strong><br/>Otto AI is built for compliance efficiency. It identifies industry-specific deductions you might otherwise miss, organizes receipts automatically, and creates tax-ready packages that simplify filing. For multi-entity businesses, compliance and reporting stay centralized and automated.</p>
      </div>

      {/* Reporting and Analytics */}
      <div id="invoicely_reporting">
        <h3>Comparing Tools on Financial Reporting & Business Insights</h3>
        <p><strong>Xero</strong> <br/>While Xero provides standard accounting reports and dashboards, it doesn’t offer AI-powered KPI dashboards or plain-language insights. Users must interpret raw financials themselves, which can slow decision-making.</p>
        <p><strong>Otto AI</strong> <br/>Otto AI turns complex financial data into clear, actionable guidance, surfacing trends, profitability insights, and potential risks instantly. Instead of only reporting on the past, it equips you with the knowledge to act in the present.</p>
      </div>

      {/* Summary */}
      <div id="invoicely_summary">
        <h3>Summary</h3>
        <p>Xero is a strong cloud accounting tool for traditional bookkeeping, but it’s missing the deeper AI automation, tax intelligence, and multi-entity features that modern, fast-moving businesses need.</p>
        <p>Otto AI Accounting offers:</p>
        <ul className="space-y-3 mt-4 mb-6 pl-6">
           <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-blue-600 before:font-bold before:text-xl">
             <span className="font-medium">Full automation</span> for reconciliation, expense matching, and multi-platform income tracking.
           </li>
           <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-blue-600 before:font-bold before:text-xl">
             <span className="font-medium">Smarter tax tools</span> to maximize deductions and stay compliant effortlessly.
           </li>
           <li className="relative before:content-['•'] before:absolute before:-left-5 before:text-blue-600 before:font-bold before:text-xl">
             <span className="font-medium">AI-driven insights</span> that help you make better decisions faster.
           </li>
         </ul>
         <p>If you want accounting software that works like a proactive finance partner instead of a passive ledger, Otto AI is the smarter alternative to Xero.</p>
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
        <FaqSection faqs={xeroalternativesfaqs} title="FAQs" />


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

export default AlternativeXero;
