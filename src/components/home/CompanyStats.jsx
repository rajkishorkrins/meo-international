"use client";

import {
  Building2,
  Users,
  Globe2,
  BriefcaseBusiness,
  PackageCheck,
  Headphones,
} from "lucide-react";
import { motion } from "framer-motion";

const statistics = [
  {
    number: "15+",
    label: "Years in business",
    icon: Building2,
  },
  {
    number: "10K+",
    label: "Happy clients",
    icon: Users,
  },
  {
    number: "300",
    label: "Agents Across the Globe",
    icon: Globe2,
  },
  {
    number: "20+",
    label: "Industry Served",
    icon: BriefcaseBusiness,
  },
  {
    number: "150K+",
    label: "Deliveries done",
    icon: PackageCheck,
  },
  {
    number: "24",
    label: "Hour Support",
    icon: Headphones,
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
      staggerChildren: 0.12,
    },
  },
};

export default function CompanyStats() {
  return (
    <section className="relative overflow-hidden bg-dark px-6 py-20 sm:px-8 lg:px-10">
      {/* =========================
          DECORATIVE BACKGROUND
      ========================== */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          rotate: -20,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[400px] w-[500px] rounded-full border-[80px] border-secondary/10"
      />

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          rotate: 20,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[500px] rounded-full border-[80px] border-light-blue/5"
      />

      {/* Background Text */}
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 select-none text-[18rem] font-bold leading-none text-white/[0.02] lg:block"
      >
        MEO
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1600px]">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16"
        >
          {/* Left */}
          <motion.div variants={fadeUp} className="ml-0 lg:col-span-5 lg:ml-8">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-light-blue"
            >
              <motion.span
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="h-2 w-2 rounded-full bg-light-blue"
              />
              MEO International Logistics
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 max-w-xl text-4xl leading-[1.08] text-white sm:text-5xl md:text-6xl"
            >
              Moving business beyond boundaries.
            </motion.h2>

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="mt-7 h-1 w-16 origin-left rounded-full bg-secondary"
            />
          </motion.div>

          {/* Right Description */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <p className="max-w-3xl text-base leading-8 text-white/65 sm:text-lg sm:leading-9 lg:ml-auto">
              Meo International Logistics is a most innovative logistic company
              that reaches out to provide comprehensive logistics solutions. The
              young and dynamic management team at Meo International Logistic
              contributes greatly with their new thinking by adapting new
              technology, applying latest and modern methods in the field to
              help the needs of customers.
            </p>
          </motion.div>
        </motion.div>

        {/* =========================
            DIVIDER
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-14 h-px w-full origin-left bg-white/10"
        />

        {/* =========================
            STATISTICS
        ========================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={staggerContainer}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {statistics.map((statistic) => {
            const Icon = statistic.icon;

            return (
              <motion.div
                key={statistic.label}
                variants={fadeUp}
                whileHover="hover"
                initial="rest"
                className="group relative min-h-[210px] overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-500 hover:shadow-xl"
              >
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: 5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-light-blue/15 text-secondary transition-colors duration-500 group-hover:bg-secondary group-hover:text-white"
                  >
                    <Icon size={21} strokeWidth={1.6} />
                  </motion.div>

                  {/* Small Number Indicator */}
                  <span className="text-xs font-semibold text-primary/25">
                    +
                  </span>
                </div>

                {/* Number */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                  }}
                  className="mt-8"
                >
                  <span className="font-sans text-4xl font-semibold leading-none tracking-tight text-dark transition-colors duration-500 group-hover:text-secondary sm:text-5xl">
                    {statistic.number}
                  </span>
                </motion.div>

                {/* Label */}
                <p className="mt-4 max-w-[150px] text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-primary/60 transition-colors duration-500 group-hover:text-primary">
                  {statistic.label}
                </p>

                {/* Bottom Hover Line */}
                <motion.div
                  variants={{
                    rest: {
                      width: 32,
                      y: 0,
                    },
                    hover: {
                      width: "100%",
                      y: 0,
                    },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="absolute bottom-0 left-0 h-1 bg-secondary"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
