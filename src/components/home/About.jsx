"use client";

import {
  Globe2,
  Ship,
  Truck,
  ArrowUpRight,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const serviceAreas = [
  {
    title: "Customs Clearance",
    description: "Major airports, seaports and borders across India.",
    icon: Globe2,
  },
  {
    title: "International Freight",
    description: "Air and sea freight solutions for global shipments.",
    icon: Ship,
  },
  {
    title: "Domestic Logistics",
    description: "Reliable road transportation solutions across India.",
    icon: Truck,
  },
];

const highlights = [
  "International and domestic freight solutions",
  "Customs clearance across major Indian ports",
  "Experienced logistics professionals",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 45,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fa] px-6 py-20 sm:px-8 lg:px-10 lg:py-20 mt-4">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[400px] rounded-full border-[70px] border-secondary/[0.035]" />

      <div className="relative z-10 mx-h-400 max-w-8xl">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-secondary" />

              <span className="text-lg font-semibold uppercase tracking-[0.3em] text-secondary">
                About Us
              </span>
            </div>

            <h2 className="mt-4 max-w-3xl text-4xl leading-[1.08] text-dark sm:text-5xl lg:text-6xl">
              Moving Businesses.
              <br />
              <span className="text-secondary">Connecting Possibilities.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="max-w-sm lg:pb-1"
          >
            <p className="text-sm leading-7 text-primary/70 sm:text-base">
              Reliable logistics solutions built around your business,
              your cargo, and your global ambitions.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Split Layout */}
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_80px_rgba(16,35,61,0.07)] lg:grid-cols-12">
          {/* Left Dark Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
            className="relative overflow-hidden bg-[#101a35] px-7 py-10 text-white sm:px-10 sm:py-14 lg:col-span-5 lg:px-12 lg:py-16"
          >
            {/* Panel Decoration */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border-[45px] border-white/[0.04]" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full border-[35px] border-[#8EC0E6]/10" />

            {/* Small Label */}
            <div className="relative z-10 flex items-center gap-3">
              {/* <span className="h-px w-10 bg-[#8EC0E6]" /> */}

              <span className="text-base font-semibold uppercase tracking-[0.25em] text-[#8EC0E6]">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h3 className="relative z-10 mt-8 max-w-md text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Your Trusted Partner in
              <span className="mt-2 block text-[#8EC0E6]">
                Global Logistics.
              </span>
            </h3>

            {/* Mission */}
            <div className="relative z-10 mt-12 border-l-2 border-[#8EC0E6] pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Our Mission
              </p>

              <p className="mt-3 text-2xl leading-relaxed text-white sm:text-3xl">
                Value Through{" "}
                <span className="text-[#8EC0E6]">Personalized</span>
              </p>
            </div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 mt-14 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5"
            >
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-secondary">
                <span className="text-3xl font-semibold leading-none">
                  15+
                </span>

                <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/80">
                  Years
                </span>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  Industry Experience
                </p>

                <p className="mt-2 text-xs leading-5 text-white/55">
                  Experienced professionals serving domestic and
                  international logistics requirements.
                </p>
              </div>
            </motion.div>

            {/* Bottom Text */}
            <div className="relative z-10 mt-70 flex items-center gap-3 text-base uppercase tracking-[0.18em] text-white/40">
              <Globe2 size={27} className="text-[#8EC0E6]" />
              Connecting India to the World
            </div>
          </motion.div>

          {/* Right Content Panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="px-7 py-10 sm:px-10 sm:py-14 lg:col-span-7 lg:px-12 lg:py-16 xl:px-16"
          >
            {/* Introduction */}
            <motion.div variants={fadeRight}>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
                Our Company
              </span>

              <h3 className="mt-4 max-w-2xl text-2xl leading-tight text-dark sm:text-3xl lg:text-4xl">
                A leading India SME providing customs clearance and
                logistics services.
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUp}
              className="mt-7 max-w-3xl space-y-5 text-lg leading-8 text-primary/75"
            >
              <p>
                As a multilayered service provider, we provide customs
                clearance services at all major airports, seaports, and
                borders in India, while also assisting clients with
                domestic and international logistics by air, sea, and
                road freight.
              </p>

              <p>
                With a team of experienced professionals with more than
                15 years of industry experience, MEO is well positioned
                to assist exporters and importers with their
                international and domestic freight consignments.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeUp}
              className="mt-8 grid gap-3 border-y border-gray-200 py-6 sm:grid-cols-2"
            >
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.8}
                    className="mt-1 shrink-0 text-secondary"
                  />

                  <p className="text-base leading-6 text-dark/75">
                    {highlight}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Service Cards */}
            <motion.div
              variants={staggerContainer}
              className="mt-9 grid gap-4 sm:grid-cols-3"
            >
              {serviceAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{
                      y: -7,
                      transition: { duration: 0.3 },
                    }}
                    className="group rounded-2xl border border-gray-200 bg-[#f8fafc] p-5 transition-all duration-300 hover:border-secondary/40 hover:bg-white hover:shadow-lg"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white"
                    >
                      <Icon size={28} strokeWidth={1.7} />
                    </motion.div>

                    {/* Title */}
                    <p className="mt-5 text-lg font-semibold leading-5 text-dark transition-colors duration-300 group-hover:text-secondary">
                      {item.title}
                    </p>

                    {/* Description */}
                    <p className="mt-2 text-base leading-5 text-primary/60">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Learn More */}
            <motion.div variants={fadeUp} className="mt-9">
              <motion.a
                href="/about"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-3 rounded-full bg-secondary px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-secondary/45 hover:text-dark"
              >
                Learn More About Us

                <motion.span
                  variants={{
                    hover: {
                      x: 4,
                      y: -4,
                    },
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <ArrowUpRight size={18} strokeWidth={2} />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}