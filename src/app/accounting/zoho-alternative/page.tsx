"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OttoReviewShowcase from "@/components/OttoReviewShowcase";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import FaqSection from "@/components/FaqSection";
const zohofaqs = [
    {
        question: "What makes Otto AI Invoicing Software a better Zoho invoice alternative for freelancers?",
        answer: "Otto AI was designed from the ground up for freelancers and creative entrepreneurs. Unlike Zoho, which can feel overwhelming with enterprise-focused features and limitations like invoice caps, Otto offers unlimited invoicing, AI-assisted invoice creation, and tools tailored to help creators get paid faster—all in a simpler, more intuitive platform."
      },
      {
        question: "Does Otto AI Invoicing support recurring invoices like Zoho?",
        answer: "Yes! Otto lets you create recurring invoices for ongoing projects, retainer agreements, or subscription-based services—just like Zoho. The difference? Otto’s recurring billing is easier to set up and includes smart reminders to help you stay on top of client payments without complicated workflows."
      },
      {
        question: "Can Otto AI handle taxes and GST compliance better than Zoho?",
        answer: "Absolutely. Our Invoicing software includes automatic tax estimation, write-off tracking, and export-ready reports for freelancers, U.S. 1099 contractors, and Indian GST compliance. Unlike Zoho’s add-ons or external integrations, Otto’s tax tools are built-in and designed for solo entrepreneurs who need straightforward compliance without hiring an accountant."
      },
      {
        question: "Is there a limit to how many invoices or purchase orders I can send with Otto?",
        answer: "Nope! We offer unlimited invoices and purchase orders on every plan—no tiered restrictions. By contrast, Zoho limits users on basic plans to just 50 invoices and 20 purchase orders per month. With Otto AI Invoicing, you can bill clients as your business grows, without worrying about hitting a ceiling."
      },
      {
        question: "How does Otto AI’s Invoicing help me get paid faster compared to Zoho?",
        answer: "Otto AI gives you everything you need to speed up payments: built-in one-click payment links, automated reminders for clients, WhatsApp-ready invoice sharing, and an intuitive client portal. These tools reduce back-and-forth and make it easier for clients to pay quickly—features that are either limited or absent in Zoho’s standard offerings."
      },
];

const AlternativeZoho = () => {
  return (
    <>
      <style>{`
        /* Cache bust: ${Date.now()} */
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
        <BreadcrumbPage>Zoho Invoice Alternative</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</div>

<main className="w-full max-w-[1650px] mx-auto pt-[64px] md:pt-[70px] pb-8 px-4 sm:px-8 lg:px-[193px]">

          {/* Page Header Section */}
          <div className="text-center mb-12 mt-2">
            <h1 className="brand-h1 font-medium mb-4">
            Otto AI vs Zoho Invoice
            </h1>
            <p className="custom-para brand-text mx-auto">
            Otto AI makes invoicing and client payments effortless with features Zoho Invoice lacks. Discover the best free Zoho Invoice alternative designed for creators.
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
          <TableHead className="table-header-cell w-1/3 text-center font-bold text-black">Zoho Invoice</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[
          ["AI-Assisted Invoice Creation", "tick", "cross"],
          ["Customizable Templates & Branding", "tick", "warn Basic Only"],
          ["Recurring Invoicing", "tick", "tick"],
          ["Payment Reminders", "tick", "tick"],
          ["Multi-Currency Support", "tick", "tick"],
          ["Invoice Limits", "tick Unlimited", "warn Limited by plan"],
          ["Purchase Order Limits", "tick Unlimited", "cross No purchase orders"],
          ["Offline Access", "tick", "cross"],
          ["Client Dashboard/Portal", "tick", "cross"],
          ["Auto Tax Estimation & Reporting", "tick", "cross Manual"],
          ["Barcode & Inventory Tracking", "tick", "cross"],
          ["E-Invoice Generation", "tick", "cross"],
          ["WhatsApp Integration", "tick", "cross"],
          ["Online Store/Service Portal", "tick", "cross"],
          ["Automatic Write-Off Tracking", "tick", "cross"],
          ["Smart Client Notes & Fields", "tick", "warn Very limited"],
          ["Mobile-Responsive", "tick", "tick"],
          ["Save & Resume Editing", "tick", "warn Limited support"]
        ].map(([feature, otto, zoho]) => (
          <TableRow className="border-b border-gray-100" key={feature}>
            <TableCell className="table-cell-feature py-2 md:py-4 px-3 text-left border-r border-gray-100 font-medium">{feature}</TableCell>
            {[otto, zoho].map((val, i) => (
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
                  {val.includes("No purchase orders") && (
                    <span className="text-xs text-gray-700 whitespace-nowrap">No purchase orders</span>
                  )}
                  {val.includes("Manual") && (
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
  Limitations of Zoho Invoice Software
  </h2>
  <p className="section-para mt-2 text-gray-600">
  Zoho Invoice's free plan can look appealing but comes with hidden drawbacks<br></br>
  like limited customer support, restricted payment methods, and missing features for growing businesses.
  </p>
</div>

{/* Section 1 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Unlimited Invoices with Fast Performance
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho Invoice doesn't support bulk invoice editing or deletion, forcing manual updates that slow you down. Otto AI streamlines invoice management with batch actions and unlimited invoice performance, keeping your workflow efficient and frustration-free as your business grows.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Invoice Generator Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 2 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Truly Free Support for Everyone
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho limits direct support to Pro plan users, leaving free users reliant on help centers and chatbots. Otto AI provides human, multilingual support even on free plans, ensuring you always have the guidance you need without upgrading.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Repeat Billing Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 3 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Automatic Late Fees for Better Cash Flow
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho lacks automated late fees, requiring manual entry each time an invoice is overdue. Otto AI automates late fees, instantly adding them to invoices and sending updates, so you get paid faster with minimal effort.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Invoice Generator Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 4 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Unlimited, Flexible Attachments
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho restricts attachments to 25 files totaling 20MB and reserves this for paid plans. Otto AI lets you attach unlimited documents of practical sizes directly to invoices for free, ensuring clients receive all the necessary files without extra costs.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Repeat Billing Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 5 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Powerful Invoice Customization
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho's basic templates don't offer advanced branding. Otto AI gives you a flexible drag-and-drop editor, customizable fields, and personalized styling, letting you create polished invoices that truly reflect your brand identity.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Invoice Generator Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 6 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Built-in Time Tracking
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho lacks time-tracking tools for service-based businesses. Otto AI features integrated time tracking, allowing you to log hours, convert them into line items, and bill clients accurately—all within the same platform.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Repeat Billing Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 7 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Scalable Tools for Growing Businesses
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho is built mainly for freelancers and micro-businesses, falling short as you scale. Otto AI grows with you, offering inventory, multi-user support, and advanced financial features that keep up with your expanding needs.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Invoice Generator Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 8 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Detailed Audit Trails
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho lacks an audit trail, making it tough to monitor changes and maintain accountability. Otto AI records every invoice modification with a complete audit log, keeping your business transparent and compliant.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Repeat Billing Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 9 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div>
    <h2 className="section-h2 mb-6">
      Instant Payment Processing
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho's ACH payments can take up to 7 days, delaying cash flow. Otto AI accelerates payments with same-day processing options, helping you maintain steady cash flow and reduce waiting times.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg">
    <img
      src="https://assets.joinotto.com/professional-invoice-section-1.webp"
      alt="Invoice Generator Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>

{/* Section 10 */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6 md:p-8 items-center">
  <div className="md:order-2">
    <h2 className="section-h2 mb-6">
      Advanced Reporting for Smarter Decisions
    </h2>
    <p className="text-gray-600 text-lg leading-relaxed mt-4 mb-8">
      Zoho's reports offer only basic financial summaries. Otto AI provides comprehensive, visual analytics with customizable filters, empowering you to track performance, optimize strategies, and make confident, data-driven decisions.
    </p>
  </div>
  <div className="relative overflow-hidden rounded-lg md:order-1">
    <img
      src="https://assets.joinotto.com/handles-repeat-billing-invoice-section-2.webp"
      alt="Repeat Billing Interface"
      className="custom-image w-full h-auto object-cover"
      style={{ background: 'transparent' }}
    />
  </div>
</div>


          {/* Feature Comparison Section: Otto AI vs Zoho Invoice */}
           <section className="feature-section">
          <h2 className="feature-title">
          Feature by Feature Comparison Section
          </h2>
          <div className="feature-layout">
            {/* Table of Contents */}
            <div className="feature-toc">
              <ul>
                <li><a href="#zoho_invoicing" className="active">Comparing Tools on Invoicing Customization</a></li>
                <li><a href="#zoho_client">Comparing Tools on Client Management</a></li>
                <li><a href="#zoho_reporting">Comparing Tools on Reporting and Analytics</a></li>
                <li><a href="#zoho_summary">Summary</a></li>
               </ul>
            </div>

            {/* Content Area */}
            <div className="feature-content">
              {/* Invoicing Customization */}
              <div id="zoho_invoicing">
                <h3>Comparing Tools on Invoicing Customization</h3>
                <p><strong>Otto AI</strong> <br/>Gives full invoice customization with drag-and-drop editing, custom logos, colors, unlimited line items without performance issues, and freedom from character limits for detailed messages. Attach large files without size constraints to personalize every invoice.</p>
                <p><strong>Zoho Invoice</strong> <br/>Restricts customization with character limits in messages and footers, struggles with performance on invoices with many line items, and limits attachment sizes, which can compromise branding and detailed communication.</p>
              </div>

              {/* Client Management */}
              <div id="zoho_client">
                <h3>Comparing Tools on Client Management</h3>
                <p><strong>Otto AI</strong> <br/>Offers a smart client dashboard with history, notes, auto-reminders, and direct WhatsApp sharing for real-time engagement, providing a complete CRM-like experience for creators.</p>
                <p><strong>Zoho Invoice</strong> <br/>Stores client info and sends basic reminders but lacks a dedicated client portal and rich communication tools, making client management more transactional and less interactive.</p>
              </div>

              {/* Reporting and Analytics */}
              <div id="zoho_reporting">
                <h3>Comparing Tools on Reporting and Analytics</h3>
                <p><strong>Otto AI</strong> <br/>Delivers intuitive, visual reports with real-time income tracking, automatic tax calculations, bulk export, and smooth performance even with large data sets, giving creators instant clarity without complex setup.</p>
                <p><strong>Zoho Invoice</strong> <br/>Includes detailed but sometimes slow reports on large data sets, requires manual setup for insights, and advanced features are locked behind higher subscription tiers, limiting freelancers on basic plans.</p>
              </div>

              {/* Summary */}
              <div id="zoho_summary">
                <h3>Summary</h3>
                <p>Otto AI surpasses Zoho Invoice by offering greater customization, smoother performance on large invoices, unlimited messaging, powerful client management, and accessible reporting—making it the top choice for creators seeking a flexible, easy-to-use invoicing solution.</p>
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
        <FaqSection faqs={zohofaqs} title="FAQs" />

 
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
          Experience the simplicity, speed, and flexibility of Otto AI—your best alternative to Zoho Invoice. Start for free now!
          </p>
          <a
           href="https://joinotto.com/accounting" 
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

export default AlternativeZoho; 