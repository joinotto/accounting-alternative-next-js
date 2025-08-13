"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OttoReviewShowcase from "@/components/OttoReviewShowcase";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FaqSection from "@/components/FaqSection";


const AlternativeHoneyBook = () => {
  const honeybookfaqs = [
    {
      question: "How does Otto AI’s pricing compare to HoneyBook?",
      answer: "Otto AI offers a fully-featured free plan with unlimited invoicing, client management, and advanced tools. HoneyBook doesn’t have a free plan—after a 7-day trial, you must subscribe to a paid plan starting at $16/month, making Otto AI the more budget-friendly choice for freelancers and small businesses."
    },
    {
      question: "Can I send standalone invoices with Otto AI unlike HoneyBook?",
      answer: "Yes! Otto AI allows you to create and send standalone invoices at any time. HoneyBook requires every invoice to be linked to a project, forcing unnecessary steps that slow down your billing process and add complexity when you just need to invoice quickly."
    },
    {
      question: "How flexible are Otto AI’s payment options compared to HoneyBook?",
      answer: "Otto AI supports a wide range of payment gateways, including PayPal, Stripe, ACH, UPI, and offline payments. HoneyBook only works with its built-in payment processor, which limits flexibility for your clients and can restrict your ability to get paid in their preferred way."
    },
    {
      question: "Does Otto AI provide better offline access than HoneyBook?",
      answer: "Absolutely. Otto AI lets you draft and edit invoices offline, so you can keep working anywhere—even without internet. HoneyBook requires a stable internet connection at all times, making it unreliable for users in areas with poor connectivity or for those who work on the go."
    },
    {
      question: "Are Otto AI’s reporting and analytics more advanced than HoneyBook’s?",
      answer: "Yes! Otto AI offers comprehensive, customizable reports with real-time financial insights, income tracking, and detailed expense analysis. HoneyBook’s reporting is basic and geared more toward project pipelines than deep financial analytics, leaving gaps for businesses needing robust financial visibility."
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
        <BreadcrumbPage>HoneyBook Alternative</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>

<main className="w-full max-w-[1650px] mx-auto pt-[64px] md:pt-[70px] pb-8 px-4 sm:px-8 lg:px-[193px]">

          {/* Page Header Section */}
          <div className="text-center mb-12 mt-2">
            <h1 className="brand-h1 font-medium mb-4">
            Otto AI vs HoneyBook
            </h1>
            <p className="custom-para brand-text mx-auto">
            Otto AI transforms invoicing and client management with tools HoneyBook lacks. Discover the best free HoneyBook alternative built for creative professionals and small businesses.
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
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black">HoneyBook</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          ["AI-Assisted Invoice Creation", "tick", "cross"],
          ["Customizable Templates & Branding", "tick", "warn Limited"],
          ["Recurring Invoicing", "tick", "warn Manual"],
          ["Payment Reminders", "tick", "tick"],
          ["Multi-Currency Support", "tick", "cross"],
          ["Invoice Limits", "tick Unlimited", "warn Requires project linking"],
          ["Purchase Order Limits", "tick Unlimited", "cross"],
          ["Offline Access", "tick", "cross Requires internet"],
          ["Client Dashboard/Portal", "tick", "warn Limited customization"],
          ["Auto Tax Estimation & Reporting", "tick", "cross Manual"],
          ["Barcode & Inventory Tracking", "tick", "cross"],
          ["E-Invoice Generation", "tick", "warn Not prioritized"],
          ["WhatsApp Integration", "tick", "cross"],
          ["Online Store/Service Portal", "tick", "cross"],
          ["Automatic Write-Off Tracking", "tick", "cross"],
          ["Smart Client Notes & Fields", "tick", "warn Basic"],
          ["Mobile-Responsive", "tick", "tick"],
          ["Save & Resume Editing", "tick", "cross"]
        ].map(([feature, otto, honeybook]) => (
          <TableRow className="border-b border-gray-100" key={feature}>
            <TableCell className="table-cell-feature py-2 md:py-4 px-3 text-left border-r border-gray-100 font-medium">{feature}</TableCell>
            {[otto, honeybook].map((val, i) => (
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
    Limitations of HoneyBook Software
  </h2>
  <p className="section-para mt-2 text-gray-600">
    HoneyBook’s pricing and feature set can limit flexibility for growing creators,<br></br>
    with restrictions on customization, payment options, and essential tools often hidden behind high monthly fees.
  </p>
</div>

{/* Section 1 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Standalone Invoicing Made Easy
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook requires linking invoices to projects, forcing unnecessary steps when you just want to send a quick invoice. Otto AI allows standalone invoices without mandatory project creation, giving you flexibility to bill faster and simplify your workflow.
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
      Truly Free Invoicing Forever
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook offers no free plan, requiring payment after a 7-day trial to continue invoicing. Otto AI provides a fully-featured free plan with no time limits, letting you invoice clients without worrying about hidden costs or trial expirations.
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
      Flexible Payment Integrations
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook only supports its own payment processor, limiting your clients’ payment options. Otto AI supports multiple gateways like PayPal, Stripe, ACH, and offline payments, ensuring your clients pay with the method that suits them best.
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
      Secure Payment Holds Without Hassles
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook doesn’t allow you to place holds on client cards, forcing deposits and manual refunds for security. Otto AI offers advanced payment options, including holds, so you can secure bookings or services without complicated manual processes.
    </p>
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
      Seamless Tip Collection Anytime
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook limits gratuity collection to scheduled payments, preventing clients from tipping after final invoices. Otto AI enables tipping on any invoice at any time, maximizing opportunities for client appreciation and extra income.
    </p>
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
      Fully Customizable Invoices
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook restricts invoice customization with limited template control and branding flexibility. Otto AI’s advanced customization tools let you personalize every element—from layout and colors to messaging—ensuring your invoices reflect your unique brand.
    </p>
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
      Batch Invoicing for Efficiency
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook requires sending invoices one at a time, wasting valuable hours. Otto AI’s batch invoicing allows you to create and send multiple invoices simultaneously, helping you manage large client lists with ease and speed.
    </p>
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
      Powerful Mobile Features
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook’s mobile app can’t generate detailed financial reports, limiting on-the-go analysis. Otto AI’s mobile app gives you full access to invoicing, client management, and in-depth reporting, empowering you to work anywhere with complete control.
    </p>
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
      Advanced Financial Reporting
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook’s basic reports fall short for businesses needing deeper financial insights. Otto AI delivers comprehensive, customizable analytics with income tracking, expense breakdowns, and real-time data, supporting better decision-making.
    </p>
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
      Work Offline Without Interruptions
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      HoneyBook can’t function without internet, making it unreliable in areas with poor connectivity. Otto AI’s offline mode lets you draft and edit invoices anytime, so you stay productive even without Wi-Fi, ensuring your business never stops.
    </p>
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
    Comparison of the Leading Invoicing Software
  </h2>
  <div className="feature-layout">
    {/* Table of Contents */}
    <div className="feature-toc">
      <ul>
        <li><a href="#honey_invoicing" className="active">Comparing Tools on Invoicing Customization</a></li>
        <li><a href="#honey_client">Comparing Tools on Client Management</a></li>
        <li><a href="#honey_reporting">Comparing Tools on Reporting and Analytics</a></li>
        <li><a href="#honey_summary">Summary</a></li>
      </ul>
    </div>

    {/* Content Area */}
    <div className="feature-content">
      {/* Invoicing Customization */}
      <div id="honey_invoicing">
        <h3>Comparing Tools on Invoicing Customization</h3>
        <p><strong>Otto AI</strong> <br/>Advanced invoice customization tools let you create professional documents with flexible layouts, personalized branding, and rich content—without hidden costs or premium tiers.</p>
        <p><strong>HoneyBook</strong> <br/>Invoice customization is limited, with fewer options for modifying templates and layouts, which can restrict creative businesses seeking a unique, branded look.</p>
      </div>

      {/* Client Management */}
      <div id="honey_client">
        <h3>Comparing Tools on Client Management</h3>
        <p><strong>Otto AI</strong> <br/>Includes a powerful client dashboard, automated reminders, and WhatsApp messaging, giving you full control of your client relationships and communications.</p>
        <p><strong>HoneyBook</strong> <br/>Provides a standard client workspace but lacks integrated messaging features, reducing engagement opportunities with your clients.</p>
      </div>

      {/* Reporting and Analytics */}
      <div id="honey_reporting">
        <h3>Comparing Tools on Reporting and Analytics</h3>
        <p><strong>Otto AI</strong> <br/>Offers clear, detailed reports with customizable filters, real-time income tracking, and automated tax summaries, empowering creators to make informed decisions quickly.</p>
        <p><strong>HoneyBook</strong> <br/>Reporting is basic and focuses more on project pipelines than financial analytics, limiting visibility into your business’s financial health.</p>
      </div>

      {/* Summary */}
      <div id="honey_summary">
        <h3>Summary</h3>
        <p>Otto AI outperforms HoneyBook with unlimited projects, free invoicing, advanced customization, and comprehensive tools—all designed to support freelancers and creative entrepreneurs.</p>
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
        <FaqSection faqs={honeybookfaqs} title="FAQs" />


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

export default AlternativeHoneyBook;
