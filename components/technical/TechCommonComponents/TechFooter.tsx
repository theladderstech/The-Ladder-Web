'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TechFooter() {
  return (
    <footer className="relative w-full bg-[#1E1E1E] border-t border-[#FBFFDE]/20">
      {/* Main Footer Content */}
      <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Section - Logo & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <Image
                src="/techlogo.png"
                alt="The Ladder Tech Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Address & Contact */}
            <div className="flex flex-col gap-2 text-[#FBFFDE] text-sm">
              <p className="font-medium text-[#D8F209]">Address:</p>
              <p className="leading-relaxed">
                The Ladder Tech
              </p>
              
              <p className="font-medium text-[#D8F209] mt-3">Contact:</p>
              <p>+91 93258 56501</p>
              <p>contact@theladders.tech</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {/* <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8F209] hover:text-[#c4db08] transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link> */}

              <Link
                href="https://www.instagram.com/theladderstech?utm_source=qr&igsh=MXc2ZDZudnNqOWtlZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8F209] hover:text-[#c4db08] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
{/* 
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8F209] hover:text-[#c4db08] transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link> */}

              <Link
                href="https://www.linkedin.com/company/the-ladders-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8F209] hover:text-[#c4db08] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>

              {/* <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D8F209] hover:text-[#c4db08] transition-colors duration-300"
                aria-label="YouTube"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Link> */}
            </div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-[#D8F209] font-semibold text-sm mb-1">Quick Links</h3>
              <Link href="/technical" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                Home
              </Link>
              <Link href="/technical/services" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                Services
              </Link>
              <Link href="/technical/blog" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                Blogs
              </Link>
              <Link href="/technical/about" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                About Us
              </Link>
            </div>
          </div>

          {/* Right Section - Services */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-3">
              <h3 className="text-[#D8F209] font-semibold text-sm mb-1">Services</h3>
              <Link href="/technical/services/website-development" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                Website Development
              </Link>
              <Link href="/technical/services/automation-solutions" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                Automation Solutions
              </Link>
              <Link href="/technical/services/data-analytics" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                Data Analytics & Visualization
              </Link>
              <Link href="/technical/services/data-warehousing" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                Data Warehousing & Integration
              </Link>
              <Link href="/technical/services/ai-assistants" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                AI & Intelligent Assistants
              </Link>
              <Link href="/technical/services/software-development" className="text-[#FBFFDE] text-sm hover:text-[#D8F209] transition-colors duration-300">
                Software Development
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-[#FBFFDE]/20">
        <div className="w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#FBFFDE]">
            {/* Copyright */}
            <p>
              The Ladder Tech © All Rights Reserved - 2026
            </p>

            {/* Legal Links */}
            {/* <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-[#D8F209] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[#D8F209] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies-settings" className="hover:text-[#D8F209] transition-colors duration-300">
                Cookies Settings
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
