"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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

const features = [
  {
    icon: Globe2,
    title: "Worldwide Reach",
    description: "Connecting businesses across the globe.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description: "Secure and dependable logistics solutions.",
  },
  {
    icon: Truck,
    title: "Flexible Solutions",
    description: "Tailored freight services for your needs.",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate min-h-[780px] overflow-hidden bg-[#101a35] mt-12">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg3.png')",
        }}
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 -z-10 bg-[#101a35]/2" /> */}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101a35] via-[#101a35]/25 to-[#101a35]/5" />

      {/* Main Content */}
      <div className="mx-auto flex min-h-[780px] max-w-[1600px] items-center px-6 py-24 sm:px-10 lg:px-16 xl:px-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="mb-6 flex items-center gap-3"
          >
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
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8EC0E6]">
              Global Logistics & Freight Solutions
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Moving Your
            <br />
            <span className="text-[#8EC0E6]">Business</span>
            <br />
            Beyond Borders.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg"
          >
            MEO International Logistics delivers reliable, efficient and
            flexible freight forwarding and cargo solutions, connecting
            businesses across India and the world.
          </motion.p>

          {/* Features */}
          {/* <motion.div
            variants={fadeUp}
            className="mt-9 grid max-w-3xl gap-5 sm:grid-cols-3"
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#8EC0E6]/40 bg-white/5 text-[#8EC0E6]">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-white/55">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/services/"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0072BC] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8EC0E6] hover:text-[#101a35]"
            >
              Explore Our Services

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/contact/"
              className="group inline-flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#101a35]"
            >
              Contact Us

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
     
    </section>
  );
}