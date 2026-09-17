"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock3, Mail, ArrowUpRight } from "lucide-react";
import SocialIcon from "@/components/ui/SocialIcon";

const services = [
  {
    name: "Sea Freight Forwarding",
    href: "/services/sea-freight-forwarding/",
  },
  {
    name: "Air Freight Forwarding",
    href: "/services/air-freight-forwarding/",
  },
  {
    name: "Custom Clearance",
    href: "/services/custom-clearance/",
  },
  {
    name: "Ware Housing",
    href: "/services/ware-housing/",
  },
  {
    name: "Transportation",
    href: "/services/transportation/",
  },
];

const socialLinks = [
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/meointernationallogistics/",
  },
  {
    platform: "twitter",
    label: "Twitter",
    href: "https://twitter.com/LogisticsMeo",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/meo-international-logistics/",
  },
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/meointlogistics/",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      {/* Decorative Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ rotate: 360 }}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1 },
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full border border-white/5"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ rotate: -360 }}
        transition={{
          opacity: { duration: 1, delay: 0.2 },
          scale: { duration: 1, delay: 0.2 },
          rotate: {
            duration: 70,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="pointer-events-none absolute -bottom-52 -left-40 h-[260px] w-full rounded-full border border-white/5"
      />

      {/* Main Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
        className="relative mx-auto max-w-[1600px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
      >
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Company Information */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="inline-block">
                <Image
                  src="/meo-logo-footer.png"
                  alt="MEO International Logistics"
                  width={130}
                  height={44}
                  priority
                  className="transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-lg text-2xl leading-[1.15] text-white sm:text-3xl lg:text-4xl"
            >
              Fast & safe shipping. Every time. Everywhere.
            </motion.h2>

            {/* Animated Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 56, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 h-1 rounded-full bg-secondary"
            />

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-lg text-sm leading-6 text-white/65 sm:leading-7"
            >
              Our aim is to become the first choice of customers in global
              commerce & industry for devising & expediting reliable and
              satisfactory integrated transportation services.
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              variants={fadeUp}
              className="mt-5 flex items-center gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.platform}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.08,
                  }}
                  className="inline-flex"
                >
                  <SocialIcon
                    platform={social.platform}
                    label={social.label}
                    href={social.href}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <h3 className="text-xl text-white sm:text-2xl">Services</h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 42 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-3 h-1 rounded-full bg-secondary"
            />

            <motion.ul
              variants={staggerContainer}
              className="mt-5 space-y-2.5"
            >
              {services.map((service) => (
                <motion.li
                  key={service.name}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={service.href}
                    className="group flex items-start gap-2 text-sm leading-5 text-white/65 transition-colors duration-300 hover:text-light-blue sm:text-base"
                  >
                    <ArrowUpRight
                      size={15}
                      className="mt-0.5 shrink-0 text-secondary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />

                    <span>{service.name}</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <h3 className="text-xl text-white sm:text-2xl">Contact Us</h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 42 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-3 h-1 rounded-full bg-secondary"
            />

            {/* Office Location */}
            <motion.div
              variants={fadeUp}
              className="mt-5 flex items-start gap-3"
            >
              <motion.div
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: -8 }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-light-blue"
              >
                <MapPin size={17} />
              </motion.div>

              <div className="min-w-0">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Office Location
                </h4>

                <p className="mt-1.5 text-sm leading-6 text-white/65 sm:text-base">
                  MEO International logistics India Pvt. Ltd.
                  <br />
                  Office No 28A, SFS Flats, Sector -7,
                  <br />
                  Pocket-1, Dwarka, New Delhi – 110075,
                  <br />
                  INDIA
                </p>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              variants={fadeUp}
              className="mt-4 flex items-start gap-3"
            >
              <motion.div
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: 8 }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-light-blue"
              >
                <Clock3 size={17} />
              </motion.div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Office Business Hours
                </h4>

                <p className="mt-1.5 text-sm leading-6 text-white/65 sm:text-base">
                  Mon – Fri: 10AM – 6PM
                  <br />
                  Saturday – Sunday: Closed
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              variants={fadeUp}
              className="mt-4 flex items-start gap-3"
            >
              <motion.div
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: -8 }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-light-blue"
              >
                <Mail size={17} />
              </motion.div>

              <div className="min-w-0">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Mail
                </h4>

                <div className="mt-1.5 space-y-0.5 text-sm leading-6 sm:text-base">
                  <motion.a
                    whileHover={{ x: 4 }}
                    href="mailto:info@meointernationallogistics.com"
                    className="block break-words text-white/65 transition-colors hover:text-light-blue"
                  >
                    info@meointernationallogistics.com
                  </motion.a>

                  <motion.a
                    whileHover={{ x: 4 }}
                    href="mailto:support@meointernationlogistics.com"
                    className="block break-words text-white/65 transition-colors hover:text-light-blue"
                  >
                    support@meointernationlogistics.com
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative border-t border-white/10"
      >
        <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-5 py-4 text-center text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between md:text-left lg:px-12">
          <p>
            © {new Date().getFullYear()} MEO International Logistics. All
            rights reserved.
          </p>

          <p>Fast & safe shipping. Every time. Everywhere.</p>
        </div>
      </motion.div>
    </footer>
  );
}