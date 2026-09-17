"use client";

import { motion } from "framer-motion";

const recognitions = [
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/iso-9001-2008-certification-service-500x500-1-psdt4qanaisy0jjaekrxk94po8xhmzomv29zqkjwik.jpg",
    title: "An ISO 9001:2008 Certified Company",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/2-1-psdt4iryzpail2nnpbpmla1dknpzba3bgc5g0stavw.png",
    title: "CCL Certified",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/2021/09/ppln.png",
    title: "Certified Member of PPL",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/4-1-psdt4u219ppyge79vgl5f76wpa6dvnc3hvz9s4ckt8.png",
    title:
      "Approved Multi-Modal Transport Operator by Ministry of Shipping, Government of India",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/6-1-psdt4zp2epxoe1z2yj0wu5ro9lel5tyhinw6ns47rw.png",
    title:
      "Member of Association of Multi-Modal Transport Operator of India (AMTOI)",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/7-1-psdt4mjbr1fnvii73dc4v937y77g62i8surdxwnq70.png",
    title:
      "Member of Association of Multi-Modal Transport Operator of India (AMTOI)",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/8-1-psdt4f0m8d5damt4ba34bazj748ighoe3tji3oyvks.png",
    title:
      "Approved by Ministry of Micro, Small & Medium Enterprises India",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/9-psdt4mjbr1fnvii73dc4v937y77g62i8surdxwnq70.png",
    title: "Member of Worldwide Agents Network",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/5-1-psdt4xte11v3qu1t9i7np68r2tnuqfr0uel7p8704c.png",
    title: "Member of WCA Family of Logistics Network",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/10-psdt4xte11v3qu1t9i7np68r2tnuqfr0uel7p8704c.png",
    title: "Member of EastWest Logistics Network",
  },
  {
    image:
      "https://meointernationallogistics.com/wp-content/uploads/elementor/thumbs/11-psdt4gwam17xxuqe0awdgaigdvz8vvvus2uh28w38c.png",
    title: "Member of GLOBAL LOGISTICS ALLIANCE",
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
      staggerChildren: 0.1,
    },
  },
};

export default function Recognition() {
  return (
    <section className="bg-white/15 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1600px]">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={staggerContainer}
          className="mx-auto max-w-2xl text-center"
        >
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
         
                       Our Credentials
                     </motion.span>
         
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl leading-tight text-dark sm:text-4xl md:text-5xl"
          >
            Recognition and Membership
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
            className="mx-auto mt-5 h-1 w-14 origin-center rounded-full bg-secondary"
          />

          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm leading-7 text-primary/60 sm:text-base"
          >
            Our certifications and professional memberships reflect our
            commitment to quality, reliability, and excellence in global
            logistics.
          </motion.p>
        </motion.div>

        {/* =========================
            RECOGNITION LOGOS
        ========================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={staggerContainer}
          className="mx-auto mt-14 grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-16"
        >
          {recognitions.map((recognition, index) => (
            <motion.div
              key={`${recognition.title}-${index}`}
              variants={fadeUp}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
              }}
              className="group flex flex-col items-center justify-start text-center"
            >
              {/* Logo Container */}
              <motion.div
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className="flex h-38 w-full items-center justify-center px-5"
              >
                <motion.img
                  src={recognition.image}
                  alt={recognition.title}
                  loading="lazy"
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                  }}
                  className="max-h-full max-w-[150px] object-contain"
                />
              </motion.div>

              {/* Logo Title */}
              <p className="mt-2 max-w-[210px] text-base font-medium leading-5 text-primary/65 transition-colors duration-300 group-hover:text-secondary">
                {recognition.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================
            BOTTOM ACCENT
        ========================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="mx-auto mt-14 flex items-center justify-center gap-3"
        >
          <span className="h-px w-12 bg-gray-200" />

          <motion.span
            animate={{
              scale: [1, 1.35, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-secondary"
          />

          <span className="h-px w-12 bg-gray-200" />
        </motion.div>
      </div>
    </section>
  );
}