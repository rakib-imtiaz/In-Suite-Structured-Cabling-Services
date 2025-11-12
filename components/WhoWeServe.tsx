"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Building, HardHat, Home } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Developers & GCs",
    caption: "Ownership-level turnover ready in every suite",
    image: "/images/bento_card_developers_approved_plans.png",
    imageAlt: "Low-voltage closet, building plans, approved stamp, contractor passing",
    bullets: [
      "Suite-by-suite documentation for closeout binders",
      "Fluke-certified CAT6/CAT6a with labeled panels and jacks",
      "Zero rework—our crews work alongside finish trades",
    ],
  },
  {
    icon: Building,
    title: "Property Managers",
    caption: "Connectivity you can rely on between tenant cycles",
    image: "/images/bento_card_property_managers_corridor_panel.png",
    imageAlt: "Corridor with open panel door, resident walking by",
    bullets: [
      "Hardwired backbone for IPTV, VoIP, and surveillance",
      "Rapid service when adds or moves are requested",
      "Fewer connectivity support calls to triage",
    ],
  },
  {
    icon: Home,
    title: "Luxury Residential",
    caption: "Smart-home and entertainment ready from the studs",
    image: "/images/bento_card_homeowners_desk_wall_plate.png",
    imageAlt: "Modern home office with discreet wall plate, hand reaching for a book",
    bullets: [
      "Discreet terminations that complement high-end finishes",
      "Prepped for Wi-Fi 7, PoE lighting, and home automation",
      "Clean labeling that simplifies future upgrades",
    ],
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <Badge className="tracking-[0.35em]">Who we build for</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built for teams that can’t afford connectivity callbacks
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            We plug into your construction rhythm, keep punch lists tight, and
            deliver infrastructure that just works—long after handover.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon ?? HardHat;
            return (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(37,99,235,0.12)" }}
              >
                <Card className="h-full overflow-hidden border-border bg-white transition hover:border-blue-200 hover:bg-zinc-50">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={audience.image}
                      alt={audience.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px"
                      className="object-cover"
                    />
                  </div>
                  <CardHeader className="space-y-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-zinc-50 text-foreground">
                      <Icon className="h-6 w-6" />
                    </span>
                    <CardTitle className="text-2xl text-foreground">{audience.title}</CardTitle>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
                      {audience.caption}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    {audience.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}




