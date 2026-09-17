
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
      { name: "Diversified Customers", href: "/diversived-customers" },
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
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => {
      const next = !prev;

      if (!next) {
        setOpenMobileDropdown(null);
      }

      return next;
    });
  };

  return (
    <header className="fixed left-0 top-0 z-[100] w-full bg-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="-mt-2 flex"
          onClick={closeMobileMenu}
        >
          <Image
            src="/meo-logo-footer.png"
            alt="MEO International Logistics"
            width={150}
            height={50}
            priority
          />
        </Link>

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
              {/* Main Navigation Link */}
              <Link
                href={link.href}
                onClick={(e) => {
                  if (link.dropdown && link.href === "#") {
                    e.preventDefault();
                  }
                }}
                className="flex items-center text-sm font-medium text-primary transition-colors hover:text-secondary"
              >
                {link.name}

                {link.dropdown && (
                  <span className="ml-1 text-xs">▾</span>
                )}
              </Link>

              {/* Desktop Dropdown */}
              {link.dropdown && openDropdown === link.name && (
                <div className="absolute left-0 top-full z-50 pt-3">
                  <div className="min-w-56 rounded-lg border border-gray-100 bg-white p-2 shadow-lg">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-4 py-2.5 text-sm text-primary transition-colors hover:bg-light-blue/20 hover:text-secondary"
                      >
                        {item.name}
                      </Link>
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
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="max-h-[calc(100vh-88px)] overflow-y-auto border-t border-gray-100 bg-white px-6 py-5 lg:hidden">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const hasDropdown = Boolean(link.dropdown);
              const isOpen = openMobileDropdown === link.name;

              return (
                <div
                  key={link.name}
                  className="border-b border-gray-50 py-2 last:border-none"
                >
                  <div className="flex items-center justify-between">
                    {/* Main Mobile Link */}
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (hasDropdown && link.href === "#") {
                          e.preventDefault();

                          setOpenMobileDropdown(
                            isOpen ? null : link.name
                          );
                        } else {
                          closeMobileMenu();
                        }
                      }}
                      className="flex-1 py-2 text-base font-medium text-primary transition-colors hover:text-secondary"
                    >
                      {link.name}
                    </Link>

                    {/* Dropdown Toggle */}
                    {hasDropdown && (
                      <button
                        type="button"
                        aria-label={`Toggle ${link.name} submenu`}
                        aria-expanded={isOpen}
                        onClick={() =>
                          setOpenMobileDropdown(
                            isOpen ? null : link.name
                          )
                        }
                        className="px-2 py-2 text-sm text-primary"
                      >
                        <span
                          className={`inline-block transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Mobile Dropdown */}
                  {hasDropdown && (
                    <div
                      className={`ml-4 flex flex-col gap-2 overflow-hidden transition-all duration-200 ${
                        isOpen
                          ? "mt-2 max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="py-1 text-sm text-primary/70 transition-colors hover:text-secondary"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Social Media */}
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