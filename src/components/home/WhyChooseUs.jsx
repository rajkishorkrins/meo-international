"use client";

import {
  ShieldCheck,
  Ship,
  MapPin,
  BadgeCheck,
  Headphones,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Secure",
    description:
      "Our experienced staff handles everything from loading to delivering at your doorstep and in between, keeping you updated.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Port to Port Delivery",
    description:
      "We freely operate with the cargo at any time on the ship and prepare shipping documentation. LCL, FCL and Custom Clearance.",
    icon: Ship,
  },
  {
    number: "03",
    title: "Trackable",
    description:
      "Rich experience and expertise helps clients with extensive and convenient logistics services with a unique door-to-door delivery service and easy tracking.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Reliable",
    description:
      "Our reputation is based on our successful track record, creative and consultative approach, commitment to quality, integrity and professionalism.",
    icon: BadgeCheck,
  },
  {
    number: "05",
    title: "24/7 Online Support",
    description:
      "A 24/7 online support ensures continuous improvement in services and products through customer engagement.",
    icon: Headphones,
  },
  {
    number: "06",
    title: "Affordable Prices",
    description:
      "We are dedicated to provide the best services at the lowest possible cost.",
    icon: Wallet,
  },
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-white/15 px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-[1600px]">

        {/* =========================
            MAIN LAYOUT
        ========================== */}
        <div className="grid gap-4 lg:grid-cols-[340px_1fr] xl:grid-cols-[520px_1fr]">

          {/* =========================
              LEFT FEATURE PANEL
          ========================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative min-h-[380px] overflow-hidden rounded-[22px] bg-dark p-6 sm:p-8 lg:min-h-full"
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-dark/90" />

            {/* Decorative Circle */}
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
                delay: 0.3,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full border-[45px] border-secondary/20"
            />

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={staggerContainer}
              className="relative z-10 flex h-full min-h-[340px] flex-col"
            >
              {/* Label */}
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-light-blue sm:text-base">
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

                  Why MEO
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div
                variants={fadeUp}
                className="mt-6"
              >
                <h2 className="max-w-[400px] text-3xl leading-[1.08] text-white sm:text-4xl">
                  Why choose MEO International Logistics?
                </h2>

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
                  className="mt-5 h-1 w-14 origin-left rounded-full bg-secondary"
                />
              </motion.div>

              {/* Intro */}
              <motion.p
                variants={fadeUp}
                className="mt-5 max-w-[420px] text-base leading-6 text-white/75"
              >
                We go beyond transportation. With experience, expertise
                and a customer-focused approach, we deliver dependable
                logistics solutions designed around your business needs.
              </motion.p>

              {/* Bottom Statement */}
              <motion.div
                variants={fadeUp}
                className="mt-auto pt-8"
              >
                <div className="flex items-center gap-3">
                  <span className="h-px w-10 bg-light-blue" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
                    Your Cargo
                  </span>

                  <span className="h-px w-10 bg-light-blue" />
                </div>

                <p className="ml-6 mt-2 text-lg font-medium tracking-wide text-white">
                  Our Commitment
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT FEATURES
          ========================== */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={staggerContainer}
            className="ml-0 flex flex-col gap-3 lg:ml-2"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.number}
                  variants={fadeUp}
                  whileHover={{
                    x: 6,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  className="group relative overflow-hidden rounded-[18px] border border-gray-200 bg-[#e9edf1] px-5 py-4 transition-colors duration-500 hover:border-secondary hover:bg-white hover:shadow-lg sm:px-6 sm:py-5"
                >
                  {/* Main Row */}
                  <div className="grid items-center gap-5 sm:grid-cols-[90px_55px_1fr]">

                    {/* Number */}
                    <motion.div
                      whileHover={{
                        x: 5,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="ml-2 font-sans text-5xl font-bold leading-none text-secondary sm:text-6xl"
                    >
                      {reason.number}
                    </motion.div>

                    {/* Divider + Icon */}
                    <div className="flex items-center justify-center border-l border-gray-300 pl-4">
                      <motion.div
                        whileHover={{
                          scale: 1.12,
                          rotate: 5,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-light-blue/30 text-secondary transition-colors duration-500 group-hover:bg-secondary group-hover:text-white sm:h-11 sm:w-11"
                      >
                        <Icon
                          size={22}
                          strokeWidth={1.6}
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="ml-0 sm:ml-4">
                      <h3 className="text-xl leading-tight text-dark transition-colors duration-500 group-hover:text-secondary sm:text-2xl">
                        {reason.title}
                      </h3>

                      <p className="mt-1 max-w-2xl text-sm leading-5 text-primary/70 sm:text-base sm:leading-6">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Hover Line */}
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    whileHover={{
                      width: "100%",
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute bottom-0 left-0 h-1 bg-secondary/40"
                  />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}