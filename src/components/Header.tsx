"use client";

import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300">
      <div
        className={`
          flex items-center justify-between pointer-events-auto transition-all duration-300
          max-w-[1450px] mx-auto px-6 sm:px-8
          ${scrolled ? 'rounded-[50px] shadow-[0_4px_10px_#00000021] bg-white mt-4 py-[13px]' : 'rounded-none shadow-none bg-transparent mt-0 py-6'}
        `}
      >
        {/* Logo & Hamburger (mobile) */}
        <div className="flex items-center w-full lg:w-auto justify-between">
          <a href="https://joinotto.com" className="flex items-center">
            <img src="https://assets.joinotto.com/joinotto-logo.webp" alt="Otto AI" className="h-5" />
          </a>
          {/* Hamburger for mobile */}
          <button
            className="lg:hidden ml-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
              <rect width="22" height="2.5" x="5" y="9" rx="1.2" fill="#0E1327"></rect>
              <rect width="22" height="2.5" x="5" y="15" rx="1.2" fill="#0E1327"></rect>
              <rect width="22" height="2.5" x="5" y="21" rx="1.2" fill="#0E1327"></rect>
            </svg>
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Product Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
              className="text-black font-medium text-[14px] hover:text-[#1A2EAA] transition-colors flex items-center gap-1"
            >
              Product <span className="transform transition-transform">▾</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded-lg shadow-lg w-44 z-50">
                <a href="https://joinotto.com/bookkeeping" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Bookkeeping
                </a>
                <a href="https://joinotto.com/invoicing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Invoicing
                </a>
              </div>
            )}
          </div>
          {/* Login Button */}
          <a
            href="https://app.joinotto.com/auth/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#3367D6] rounded-[12px] text-[14px] font-medium text-[#3367D6] bg-transparent transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 hover:text-[#2B55B0] hover:border-[#2B55B0]"
          >
            Login
          </a>
          {/* Join with Google */}
          <a
            href="https://app.joinotto.com/auth/signup?auth=google"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#3367D6] rounded-[12px] text-[14px] font-medium text-[#3367D6] bg-transparent transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 hover:text-[#2B55B0] hover:border-[#2B55B0]"
          >
            <img
              src="https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/682db7bd1d0749a44744a155_google%20(1).png"
              alt="Google"
              className="w-4 h-4"
            />
            Join with Google
          </a>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[70px] left-0 right-0 bg-white z-40 rounded-b-3xl shadow-xl flex flex-col items-start px-6 py-6 gap-4 lg:hidden animate-fade-in pointer-events-auto">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="text-black font-medium text-[15px] mb-2 flex items-center gap-1"
            >
              Product <span className="transform transition-transform">▾</span>
            </button>
            {isDropdownOpen && (
              <div className="mb-2">
                <a href="https://joinotto.com/bookkeeping" className="block px-1 py-1 text-sm text-gray-700 hover:underline">
                  Bookkeeping
                </a>
                <a href="https://joinotto.com/accounting" className="block px-1 py-1 text-sm text-gray-700 hover:underline">
                  Accounting
                </a>
              </div>
            )}
            <a
              href="https://app.joinotto.com/auth/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#3367D6] rounded-[12px] text-[14px] font-medium text-[#3367D6] bg-transparent transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 w-full justify-center"
            >
              Login
            </a>
            <a
              href="https://app.joinotto.com/auth/signup?auth=google"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#3367D6] rounded-[12px] text-[14px] font-medium text-[#3367D6] bg-transparent transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 w-full justify-center"
            >
              <img
                src="https://cdn.prod.website-files.com/66d80d61bcbc2701c640232c/682db7bd1d0749a44744a155_google%20(1).png"
                alt="Google"
                className="w-4 h-4"
              />
              Join with Google
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
