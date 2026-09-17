"use client";

import { motion } from "framer-motion";

const carrierPartners = [
  {
    id: 1,
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/5.png",
    name: "Carrier Partner 5",
  },
  {
    id: 2,
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/6.png",
    name: "Carrier Partner 6",
  },
  {
    id: 3,
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/7.png",
    name: "Carrier Partner 7",
  },
  {
    id: 4,
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/8.png",
    name: "Carrier Partner 8",
  },
  {
    id: 5,
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/9.png",
    name: "Carrier Partner 9",
  },
  {
    id: 6,
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/1.png",
    name: "Carrier Partner 1",
  },
  {
    id: 7,
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/2.png",
    name: "Carrier Partner 2",
  },
  {
    id: 8,
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/3.png",
    name: "Carrier Partner 3",
  },
  {
    id: 9,
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/4.png",
    name: "Carrier Partner 4",
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

function PartnerGroup() {
  return (
    <div className="carrier-group flex shrink-0 items-center">
      {carrierPartners.map((partner, index) => (
        <motion.div
          key={`${partner.id}-${index}`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          className="group mx-3 flex h-32 w-44 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:border-secondary/30 hover:shadow-md sm:mx-4 sm:h-36 sm:w-52"
        >
          <motion.img
            src={partner.image}
            alt={partner.name}
            loading="lazy"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="max-h-24 max-w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function CarrierPartners() {
  return (
    <section className="overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10"
      >
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
          Our Network
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="mt-5 text-3xl leading-tight text-dark sm:text-4xl md:text-5xl"
        >
          Our Carrier Partners
        </motion.h2>

        {/* Animated Accent Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 64, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-6 h-1 rounded-full bg-secondary"
        />

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-primary/65 sm:text-lg"
        >
          Building strong partnerships with trusted carriers to deliver
          reliable and efficient logistics solutions worldwide.
        </motion.p>
      </motion.div>

      {/* Infinite Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mt-14 w-full overflow-hidden"
      >
        {/* Left Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />

        {/* Moving Track */}
        <div className="carrier-track">
          <PartnerGroup />
          <PartnerGroup />
        </div>
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-12 flex items-center justify-center gap-3"
      >
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-px bg-gray-200"
        />

        <motion.span
          animate={{
            scale: [1, 1.4, 1],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-1.5 w-1.5 rounded-full bg-secondary"
        />

        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="h-px bg-gray-200"
        />
      </motion.div>
    </section>
  );
}