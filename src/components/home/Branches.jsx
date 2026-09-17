"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const branches = [
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Chennai",
  "Ahmedabad",
  "Bengaluru",
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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Branches() {
  return (
    <section className="relative overflow-hidden bg-primary/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* =========================
              LEFT CONTENT
          ========================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {/* Section Label */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-base font-semibold uppercase tracking-[0.3em] text-secondary sm:text-base"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-2 w-2 rounded-full bg-secondary"
              />
              Our Presence
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-xl text-4xl leading-[1.08] text-dark sm:text-5xl md:text-6xl"
            >
              Connecting India, Delivering Worldwide.
            </motion.h2>

            {/* Accent Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 64, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-7 h-1 rounded-full bg-secondary"
            />

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-lg text-base leading-8 text-primary/70 sm:text-lg"
            >
              Meo International Logistics has a growing network of branches
              and associates across India's major commercial and logistics
              hubs.
            </motion.p>

            {/* Branch List */}
            <motion.div
              variants={staggerContainer}
              className="mt-9 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
            >
              {branches.map((branch, index) => (
                <motion.div
                  key={branch}
                  variants={fadeUp}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.25 }}
                  className="group flex items-center gap-3 border-b border-gray-200 pb-3 transition-colors duration-300 hover:border-secondary"
                >
                  <span className="text-xs font-semibold text-secondary/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <MapPin
                      size={16}
                      strokeWidth={1.7}
                      className="text-secondary"
                    />
                  </motion.div>

                  <span className="text-sm font-medium text-dark transition-colors duration-300 group-hover:text-secondary sm:text-base">
                    {branch}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom Statement */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex items-center gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 8 }}
                transition={{ duration: 0.3 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-white"
              >
                <ArrowUpRight size={18} />
              </motion.div>

              <p className="text-sm font-medium text-primary/70">
                Stronger connections across India
              </p>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT MAP PANEL
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[500px] w-full overflow-hidden  sm:min-h-[500px]  lg:min-h-[500px]"
          >
            {/* Map Background */}
            <motion.div
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
              style={{
                backgroundImage: "url('/images/map-bg.png')",
              }}
            />

            {/* Soft Map Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-light-blue/10" />

            {/* Map Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute left-7 top-7 z-10 sm:left-10 sm:top-10"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl border border-gray-100 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary">
                  India Network
                </p>

                <p className="mt-1 text-lg font-semibold text-dark">
                  6 Locations
                </p>
              </motion.div>
            </motion.div>

            {/* Decorative Accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute bottom-7 right-7 z-10 flex items-center gap-2 rounded-full bg-dark px-4 py-2.5 shadow-lg sm:bottom-10 sm:right-10"
            >
              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [1, 0.6, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-light-blue"
              />

              <span className="text-xs font-medium tracking-wide text-white">
                Nationwide Reach
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}