"use client";

import {
  Globe2,
  Ship,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const serviceAreas = [
  {
    title: "Customs Clearance",
    description:
      "Major airports, seaports and borders across India.",
    icon: Globe2,
  },
  {
    title: "International Freight",
    description:
      "Air and sea freight solutions for global shipments.",
    icon: Ship,
  },
  {
    title: "Domestic Logistics",
    description:
      "Reliable road transportation solutions across India.",
    icon: Truck,
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  return (
    <section className="relative overflow-hidden bg-primary/15 px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            SECTION LABEL
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mt-10"
        >
          <span className="inline-flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.3em] text-secondary">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="h-2 w-2 rounded-full bg-secondary"
            />

            About us
          </span>
        </motion.div>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="mt-5 grid gap-12 lg:grid-cols-12 lg:gap-16">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="lg:col-span-5"
          >
            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-4xl leading-[1.1] text-dark sm:text-5xl md:text-6xl"
            >
              Meo International Logistics India Pvt. Ltd.
            </motion.h2>

            {/* Accent Line */}
            <motion.div
              variants={fadeUp}
              className="mt-6 h-1 w-16 origin-left rounded-full bg-secondary"
            />

            {/* Mission */}
            <motion.div
              variants={fadeUp}
              className="mt-10 border-l-4 border-secondary pl-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                Our Mission
              </span>

              <p className="mt-3 max-w-md text-2xl leading-relaxed text-dark sm:text-3xl">
                Value Through{" "}
                <span className="text-secondary">
                  Personalized
                </span>
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-5"
            >
              {/* Number */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: -2,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-secondary text-white shadow-sm"
              >
                <span className="text-3xl font-semibold leading-none">
                  15+
                </span>

                <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em]">
                  Years
                </span>
              </motion.div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-dark">
                  Industry Experience
                </p>

                <p className="mt-1 max-w-xs text-sm leading-6 text-primary/70">
                  Experienced professionals serving domestic and
                  international logistics requirements.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT CONTENT
          ========================== */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="lg:col-span-7 lg:pt-2"
          >
            {/* Introduction */}
            <motion.div variants={fadeUp}>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                Who We Are
              </span>

              <h3 className="mt-4 max-w-2xl text-2xl leading-tight text-dark sm:text-3xl">
                A leading India SME providing customs clearance and
                logistics services.
              </h3>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUp}
              className="mt-7 space-y-6 text-base leading-8 text-primary/80 sm:text-lg"
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

            {/* =========================
                SERVICE AREAS
            ========================== */}
            <motion.div
              variants={staggerContainer}
              className="mt-10 grid gap-4 sm:grid-cols-3"
            >
              {serviceAreas.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                      },
                    }}
                    className="group rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:border-secondary hover:shadow-lg"
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 5,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-blue/15 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-white"
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.7}
                      />
                    </motion.div>

                    {/* Title */}
                    <p className="mt-4 text-sm font-semibold text-dark transition-colors duration-300 group-hover:text-secondary">
                      {item.title}
                    </p>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-5 text-primary/65">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Learn More */}
            <motion.div
              variants={fadeUp}
              className="mt-8"
            >
              <motion.a
                href="/about"
                whileHover="hover"
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-secondary"
              >
                Learn More About Us

                <motion.span
                  variants={{
                    hover: {
                      x: 4,
                      y: -4,
                    },
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <ArrowUpRight
                    size={17}
                    strokeWidth={2}
                  />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =========================
          DECORATIVE CIRCLES
      ========================== */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full border-[60px] border-light-blue/10"
      />

      <motion.div
        initial={{
          opacity: 0,
          x: -80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -left-24 top-1/3 h-48 w-48 rounded-full border-[35px] border-secondary/5"
      />
    </section>
  );
}