"use client";

import { ArrowUpRight, Package } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-10 ">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl bg-[#222547] px-6 py-8 text-center sm:px-10 md:flex-row md:text-left lg:px-14"
      >
        {/* Decorative Circle */}
        <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full border-[35px] border-secondary/20" />

        {/* Content */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/20 text-light-blue sm:flex">
            <Package size={24} strokeWidth={1.5} />
          </div>

          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-light-blue">
              Move With Confidence
            </span>

            <h2 className="mt-1 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Let’s move your cargo together.
            </h2>

            <p className="mt-2 text-sm text-white/65">
              Reliable logistics solutions, tailored to your needs.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative z-10 inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#222547] transition-colors duration-300 hover:bg-secondary hover:text-white"
        >
          Contact Us
          <ArrowUpRight size={17} />
        </motion.a>
      </motion.div>
    </section>
  );
}