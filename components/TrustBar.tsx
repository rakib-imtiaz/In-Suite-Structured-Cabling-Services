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
  return (
    <section className="relative border-y border-white/10 bg-background-light py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/trust_bar_patch_panel_backdrop.png"
          alt="Neatly labeled patch panel backdrop"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background-light/80" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-foreground">
                <Icon className="h-6 w-6" />
              </span>
              <div className="space-y-1.5">
                <p className="text-base font-semibold text-foreground">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}




