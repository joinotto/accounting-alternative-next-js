import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-transparent pt-0 pb-8 flex flex-col items-center" style={{
      backgroundImage: 'radial-gradient(circle, #e0e0e0 1px, transparent 1px)',
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0'
    }}>
      {/* The centered card */}
      <div className="w-full max-w-7xl mx-auto bg-white rounded-[50px] shadow-none border border-gray-100 px-6 md:px-16 py-12 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Column - Logo and Company Info */}
          <div className="mb-10 md:mb-0 max-w-md">
            <a href="https://joinotto.com/" className="inline-block mb-6" target="_blank" rel="noopener noreferrer">
              <img src="https://assets.joinotto.com/joinotto-logo.webp" alt="Otto Logo" className="h-8" />
            </a>
            <p className="text-gray-700 mt-5 mb-6 leading-relaxed text-sm">
              Start your journey with Otto AI and see how simple bookkeeping can be. Access detailed financial statements and gain the clarity your small business deserves.
            </p>
            <div className="flex items-center space-x-4 mb-6">
             <a href="https://www.instagram.com/joinottodotcom/" className="text-gray-700 hover:text-blue-600 transition-colors" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
             <img alt="Instagram" loading="lazy" width={20} height={20} decoding="async" style={{ color: "transparent", display: "block" }} src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" />
             </a>
             <a href="https://x.com/joinottodotcom" className="text-gray-700 hover:text-blue-600 transition-colors" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
             <img alt="Twitter" loading="lazy" width={20} height={20} decoding="async" style={{ color: "transparent", display: "block" }} src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" />
             </a>
             <a href="https://www.linkedin.com/company/joinotto/" className="text-gray-700 hover:text-blue-600 transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
             <img alt="LinkedIn" loading="lazy" width={20} height={20} decoding="async" style={{ color: "transparent", display: "block" }} src="https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/66fdb9328c877336c8304e05_linkedin.webp" />
             </a>
             <a href="https://www.tiktok.com/@joinottodotcom" className="text-gray-700 hover:text-blue-600 transition-colors" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
             <img alt="TikTok" loading="lazy" width={20} height={20} decoding="async" style={{ color: "transparent", display: "block" }} src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg" />
                 </a>
           </div>
            <p className="text-gray-700 text-sm">
              Need Help? <a href="mailto:hello@joinotto.com" className="text-blue-600 hover:underline">hello@joinotto.com</a>
            </p>
          </div>

          {/* Right Columns - Navigation Links */}
         <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24">
          {/* Tools Column */}
  <div className="w-full md:w-auto">
    <h3 className="text-gray-900 font-semibold mb-5 text-sm">Tools</h3>
    <ul className="space-y-3">
      <li><a href="https://joinotto.com/tools/invoice-generator" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Invoice Generator</a></li>
      <li><a href="https://joinotto.com/calculator/paycheck" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Paycheck Calculator</a></li>
      <li><a href="https://joinotto.com/calculator/sales-tax" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Sales Tax Calculator</a></li>
      <li><a href="https://joinotto.com/calculator/401k-calculator" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">401K Calculator</a></li>
      <li><a href="https://joinotto.com/calculator/salary-to-hourly" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Salary to Hourly Calculator</a></li>
      <li><a href="https://joinotto.com/calculator/s-corp-tax-calculator" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">S-Corp Tax Calculator</a></li>
      <li><a href="https://joinotto.com/calculator/1099-tax-calculator" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">1099 Tax Calculator</a></li>
    </ul>
  </div>


          {/* Right Columns - Navigation Links */}
          <div className="flex flex-wrap md:flex-nowrap gap-12 md:gap-24">
            {/* Product Column */}
            <div className="w-full md:w-auto">
              <h3 className="text-gray-900 font-semibold mb-5 text-sm">Product</h3>
              <ul className="space-y-3">
                <li><a href="https://joinotto.com/invoicing" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Invoicing</a></li>
                <li><a href="https://joinotto.com/bookkeeping" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Bookkeeping</a></li>
                <li><a href="https://joinotto.com/accounting" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Accounting</a></li>
              </ul>
            </div>
            {/* Resources Column */}
            <div className="w-full md:w-auto">
              <h3 className="text-gray-900 font-semibold mb-5 text-sm">Resources</h3>
              <ul className="space-y-3">
                <li><a href="https://joinotto.com/blog" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Blog</a></li>
                <li><a href="https://referral.joinotto.com/" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Referral</a></li>
                <li><a href="https://otto-ai.feedbear.com/expired" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Request New Features</a></li>
                <li><a href="https://joinotto.com/terms" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Terms & Conditions</a></li>
                <li><a href="https://joinotto.com/privacy-policy" className="text-gray-700 hover:text-blue-600 transition-colors text-sm" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © {new Date().getFullYear()}, Otto AI. All rights reserved.
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
