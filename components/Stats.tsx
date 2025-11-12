"use client";

import { motion } from "framer-motion";
import AnimatedNumber from "@/components/AnimatedNumber";

const stats = [
  { label: "Suites cabled", value: "750+" },
  { label: "Years in field", value: "10+" },
  { label: "Return visits needed", value: "0" },
];

export default function Stats() {
  return (
    <section className="relative bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.dl
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3"
        >
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-background to-muted p-8 text-center transition-all hover:border-primary/40 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Border Accent */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary" />
              
              <dt className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {item.label}
              </dt>
              <dd className="text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
                <AnimatedNumber value={item.value} />
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

