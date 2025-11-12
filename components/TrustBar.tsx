"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BadgeCheck, Clock, MapPin } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    title: "Certified handovers",
    description: "Fluke-tested, documented, and ready for inspection.",
  },
  {
    icon: BadgeCheck,
    title: "Bonded & insured",
    description: "Cleared to work in finished suites and active builds.",
  },
  {
    icon: Clock,
    title: "10+ years on site",
    description: "Schedules aligned with GC milestones—no missed turnovers.",
  },
  {
    icon: MapPin,
    title: "Kamloops locals",
    description: "Rapid response for post-install enhancements or adds.",
  },
];

export default function TrustBar() {
  const iconColors = ["bg-primary/10 border-primary/30", "bg-accent/10 border-accent/30", "bg-secondary/10 border-secondary/30", "bg-primary/10 border-primary/30"];
  const iconTextColors = ["text-primary", "text-accent", "text-secondary", "text-primary"];
  
  return (
    <section className="relative border-y-2 border-primary/20 bg-muted py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/trust_bar_patch_panel_backdrop.png"
          alt="Neatly labeled patch panel backdrop"
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-muted/95 to-background/90" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group card-shadow flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 transition-all hover:-translate-y-2 hover:card-shadow-hover"
            >
              <span className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 ${iconColors[index]} transition-transform group-hover:scale-110`}>
                <Icon className={`h-7 w-7 ${iconTextColors[index]}`} />
              </span>
              <div className="space-y-2">
                <p className="text-base font-bold text-foreground">{item.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}




