
"use client";

import { useState } from "react";
import Image from "next/image";
import SocialIcon from "@/components/ui/SocialIcon";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "Profile", href: "/profile" },
      { name: "Management", href: "/management" },
      { name: "Quality Policy", href: "/quality-policy" },
      { name: "Commitment", href: "/commitment" },
      { name: "Diversived customers", href: "/diversived-customers" },
      { name: "Networks And Associations", href: "/networks" },
    ],
  },
  {
    name: "MEO Network",
    href: "/meo-network",
  },
  {
    name: "Services",
    href: "#",
    dropdown: [
      { name: "Air Freight", href: "/services/air-freight" },
      { name: "Sea Freight", href: "/services/sea-freight" },
      { name: "Road Freight", href: "/services/road-freight" },
      { name: "Warehousing", href: "/services/warehousing" },
      { name: "Customs Clearance", href: "/services/customs-clearance" },
    ],
  },
  {
    name: "Tools & Utilities",
    href: "#",
    dropdown: [
      { name: "Container Dimensions", href: "/tools/containers" },
      { name: "Incoterms", href: "/tools/incoterms" },
      { name: "World Clock", href: "/tools/world-clock" },
    ],
  },
  {
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const socialLinks = [
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    platform: "twitter",
    label: "Twitter",
    href: "https://twitter.com",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://instagram.com",
  },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[100] w-full bg-white/65 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}
        <a href="/" className="-mt-2 flex">
          <Image
            src="/meo-logo-footer.png"
            alt="MEO International Logistics"
            width={150}
            height={50}
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="ml-18 hidden gap-10 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => {
                if (link.dropdown) {
                  setOpenDropdown(link.name);
                }
              }}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={link.href}
                className="flex items-center text-xm font-medium text-primary transition-colors hover:text-secondary"
              >
                {link.name}

                {link.dropdown && (
                  <span className="ml-1 text-xs">▾</span>
                )}
              </a>

              {/* Desktop Dropdown */}
              {link.dropdown && openDropdown === link.name && (
                <div className="absolute left-0 top-full z-50 pt-3">
                  <div className="min-w-56 rounded-lg border border-gray-100 bg-white p-2 shadow-lg">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-4 py-2.5 text-xm text-primary transition-colors hover:bg-light-blue/20 hover:text-secondary"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Social Media */}
        <div className="hidden items-center gap-3 lg:flex">
          {socialLinks.map((social) => (
            <SocialIcon
              key={social.platform}
              platform={social.platform}
              href={social.href}
              label={social.label}
            />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-2xl text-dark lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-5 lg:hidden">
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  className="text-base font-medium text-primary transition-colors hover:text-secondary"
                >
                  {link.name}
                </a>

                {/* Mobile Dropdown */}
                {link.dropdown && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm text-primary/70 transition-colors hover:text-secondary"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Social Media - AFTER CONTACT */}
          <div className="mt-6 flex items-center gap-5 border-t border-gray-200 pt-5">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.platform}
                platform={social.platform}
                href={social.href}
                label={social.label}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

