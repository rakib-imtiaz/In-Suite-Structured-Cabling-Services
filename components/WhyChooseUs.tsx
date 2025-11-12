"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedNumber from "@/components/AnimatedNumber";
import {
  CheckCircle2,
  FileText,
  MapPin,
  Sparkles,
  Tags,
  Zap,
} from "lucide-react";

const differentiators = [
  {
    icon: CheckCircle2,
    title: "Certified by default",
    description:
      "Every cable is terminated, tested, and documented with Fluke DSX certification—no guesswork, no exceptions.",
  },
  {
    icon: Tags,
    title: "Labeling that scales",
    description:
      "Suite-to-riser labeling that stays legible and logical, even after years of moves, adds, and changes.",
  },
  {
    icon: Sparkles,
    title: "Finish-grade details",
    description:
      "We work inside finished suites with the same respect for surfaces and schedules as your millwork crew.",
  },
  {
    icon: Zap,
    title: "Future-proof backbone",
    description:
      "Pre-wired for Wi-Fi 7, PoE lighting, IPTV, and smart building systems so you can deploy without retrofits.",
  },
  {
    icon: FileText,
    title: "Closeout packages that impress",
    description:
      "Photo documentation, labeling schedules, and certification reports delivered in one tidy digital package.",
  },
  {
    icon: MapPin,
    title: "Kamloops-based response",
    description:
      "Local team with rapid turnaround for warranty calls, adds, or technology refreshes across your portfolio.",
  },
];

const impactStats = [
  { value: "48h", label: "Typical suite turnarounds" },
  { value: "0", label: "Return visits for repairs" },
  { value: "100%", label: "Suites delivered certified" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start"
        >
          <div className="flex flex-col gap-8">
            <Badge className="tracking-[0.35em]">Why builders choose us</Badge>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              We own the details so your handovers feel effortless
            </h2>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              From pre-construction coordination through closeout documentation, we keep network
              infrastructure off your worry list. The result? Suites that perform from day one and
              support teams that keep saying yes to your projects.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {impactStats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(56,189,248,0.16)" }}
                >
                  <AnimatedNumber
                    value={stat.value}
                    className="block text-3xl font-semibold text-foreground sm:text-4xl"
                  />
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 22px 45px rgba(15,118,110,0.12)",
                  }}
                >
                  <Card className="h-full border-border bg-white transition hover:border-emerald-200">
                    <CardContent className="space-y-4 py-7">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-zinc-50 text-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="space-y-2 text-left">
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}




