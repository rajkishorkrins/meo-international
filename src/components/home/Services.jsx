"use client";

import {
  Ship,
  Plane,
  Warehouse,
  FileCheck,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Sea Freight Forwarding",
    description:
      "MEO International Logistics’ Ocean Freight Team is highly experienced in sea import and export operations.",
    image: "/images/service/sea-fright.webp",
    href: "/services/sea-freight-forwarding/",
    icon: Ship,
  },
  {
    title: "Air Freight Forwarding",
    description:
      "MEO International provides time-definite domestic and international air freight services to satisfied customers since 2011.",
    image: "/images/service/air-fright.webp",
    href: "/services/air-freight-forwarding/",
    icon: Plane,
  },
  {
    title: "Warehousing",
    description:
      "MEO International helps you match supply with demand within the timelines you have defined for yourself and your customer.",
    image: "/images/service/warehouse.jpg",
    href: "/services/ware-housing/",
    icon: Warehouse,
  },
  {
    title: "Custom Clearance",
    description:
      "We are a leading Customs Clearing Agent based in Delhi. Updated with customs regulations and procedures, we efficiently handle import and export consignments by sea, air and road.",
    image: "/images/service/customs-clearance.png",
    href: "/services/custom-clearance/",
    icon: FileCheck,
  },
  {
    title: "Transportation",
    description:
      "No matter where or what you are shipping, MEO International Logistics offers a range of land transportation services and systems.",
    image: "/images/service/transportation.jfif",
    href: "/services/transporation/",
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

export default function Services() {
  return (
    <section className="bg-primary/15 px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
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
          className="grid gap-8 lg:grid-cols-2 lg:items-end"
        >
          {/* Left */}
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-lg font-semibold uppercase tracking-[0.25em] text-secondary"
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
              Our Approach
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 max-w-2xl text-4xl leading-[1.1] text-dark sm:text-5xl md:text-6xl"
            >
              Complete solutions for your logistics needs
            </motion.h2>
          </div>

          {/* Right */}
          <motion.div variants={fadeUp} className="lg:pb-2">
            <p className="max-w-xl text-base leading-7 text-primary/75 sm:text-lg sm:leading-8">
              MEO International is a fast-growing organization with a team of
              young and experienced professionals trained in handling all types
              of import and export shipments to and from India.
            </p>
          </motion.div>
        </motion.div>

        {/* Divider */}
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
          className="mt-8 h-px w-full origin-left bg-gray-200"
        />

        {/* =========================
            SERVICES GRID
        ========================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={staggerContainer}
          className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className={`group relative lg:col-span-2 ${
                  index === 3
                    ? "lg:col-start-2"
                    : index === 4
                      ? "lg:col-start-4"
                      : ""
                }`}
              >
                {/* Main Card */}
                <motion.article
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  className="relative h-[330px] overflow-hidden rounded-[22px] bg-dark shadow-md"
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      initial={{
                        scale: 1.05,
                      }}
                      whileHover={{
                        scale: 1.12,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="h-full w-full object-cover"
                    />

                    {/* Normal Overlay */}
                    <motion.div className="absolute inset-0 bg-black/45 transition-colors duration-500 group-hover:bg-secondary/65" />
                  </div>

                  {/* Decorative Circle */}
                  <motion.div
                    initial={{
                      rotate: 0,
                      scale: 1,
                    }}
                    whileHover={{
                      rotate: 20,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="pointer-events-none absolute -bottom-20 -right-20 h-52 w-52 rounded-full border-[30px] border-white/10"
                  />

                  {/* Card Content */}
                  <div className="relative z-10 flex h-full flex-col p-7">
                    {/* Icon */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-white/50 group-hover:bg-white/15"
                    >
                      <Icon size={28} strokeWidth={1.6} />
                    </motion.div>

                    {/* Bottom Content */}
                    <div className="mt-auto">
                      {/* Title */}
                      <h3 className="max-w-[290px] text-2xl leading-tight text-white sm:text-[26px]">
                        {service.title}
                      </h3>

                      {/* Accent */}
                      <motion.div
                        initial={{
                          width: 48,
                        }}
                        whileHover={{
                          width: 64,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="mt-8 h-2 rounded-full bg-light-blue"
                      />

                      {/* Description */}
                      <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:grid-rows-[2fr] group-hover:opacity-100 group-hover:-translate-y-6">
                        <div className="overflow-hidden">
                          <p className="max-w-[340px] text-sm leading-6 text-white/90 sm:text-base sm:leading-6">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>

                {/* View Details Button */}
                <div className="relative z-20 -mt-11 w-fit rounded-tr-[24px] bg-[#f8fafb] pr-4 pt-3">
                  <motion.a
                    href={service.href}
                    whileHover="hover"
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-secondary"
                  >
                    View details
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
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
