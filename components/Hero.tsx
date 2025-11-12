"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cable,
  CheckCircle2,
  FileText,
  Phone,
  Router,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  { label: "Suites cabled", value: "750+" },
  { label: "Years in field", value: "10+" },
  { label: "Return visits needed", value: "0" },
];

const deliverables = [
  "Structured cabling plans matched to your suites and risers",
  "Precision cable pulling, termination, and labeling in one mobilization",
  "Documented certification with print-ready Fluke test reports",
  "Clean handoff—your team walks into a plug-and-play network backbone",
];

const highlights = [
  {
    title: "Certified terminations",
    description: "Every run tested and signed off with enterprise tools.",
    icon: ShieldCheck,
  },
  {
    title: "Labeling that scales",
    description: "Rack-to-room labeling that trades guesswork for clarity.",
    icon: FileText,
  },
  {
    title: "Smart suite ready",
    description: "Structured for Wi-Fi 7, IPTV, and automation from day one.",
    icon: Router,
  },
  {
    title: "Multi-medium expertise",
    description: "Copper, coax, and fiber pulled to spec for mixed-media builds.",
    icon: Cable,
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-background pb-24 pt-32 sm:pb-28 sm:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/hero_condo_ethernet_kamloops.png"
          alt="Modern condo living room with Ethernet port, Kamloops view"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl items-end gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <Badge variant="secondary" className="w-fit">
            Structured Cabling Specialists
          </Badge>
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Precision cabling that makes every suite move-in ready
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We engineer, install, and certify in-suite networks for multi-family,
              commercial, and luxury residential projects across Kamloops. Hardwired,
              documented, and future-proofed—without slowing your schedule.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Book a site walk-through</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:2505747110" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (250) 574-7110
              </a>
            </Button>
          </div>

          <dl className="grid grid-cols-2 gap-6 border-t border-white/10 pt-6 text-sm sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="space-y-2">
                <dt className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  {item.label}
                </dt>
                <dd className="text-3xl font-semibold text-foreground sm:text-4xl">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <Card className="border-white/10 bg-white/[0.04]">
            <CardHeader className="space-y-4">
              <Badge className="w-fit">Deliverables</Badge>
              <CardTitle className="flex items-center gap-2 text-2xl sm:text-[1.7rem]">
                <CheckCircle2 className="h-6 w-6 text-foreground/80" />
                Handovers that build trust with your tenants
              </CardTitle>
              <CardDescription className="leading-relaxed">
                Every suite leaves the punch-list ready for move-in: labeled panels,
                documented runs, certified performance, and a network that supports
                everything from VoIP to streaming to building automation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground sm:text-base">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/[0.05]">
                    <CheckCircle2 className="h-4 w-4 text-foreground" />
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((card) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.title}
                  className="border-white/10 bg-background-elevated/80 transition hover:border-white/20"
                >
                  <CardHeader className="pb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <Icon className="h-5 w-5 text-foreground" />
                    </span>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {card.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}




