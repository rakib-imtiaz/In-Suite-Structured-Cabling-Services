"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Network, WifiOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const panels = [
  {
    badge: "The friction",
    title: "Wi-Fi dead zones cost time, money, and patience",
    description:
      "Streaming stalls, dropped calls, and unreliable IoT kill tenant satisfaction. Relying on Wi-Fi alone can't deliver the bandwidth that modern suites demand.",
    icon: WifiOff,
    image: "/images/problem_buffering_wifi_messy.png",
    imageAlt: "Living room with buffering laptop, messy WiFi router",
    points: [
      "Interference across floors and materials",
      "Inconsistent speeds for video, VoIP, and smart devices",
      "Hard-to-troubleshoot complaints that absorb your team",
    ],
  },
  {
    badge: "Our answer",
    title: "Structured cabling that performs from patch panel to pillow",
    description:
      "We design and install wired infrastructure that makes every suite a high-performance node. Documented, labeled, and certified—so every future upgrade is just a patch cord away.",
    icon: Network,
    image: "/images/solution_clean_comms_cabinet_pass.png",
    imageAlt: "Clean communications cabinet with cable tester showing PASS",
    points: [
      "Precision cable routing, termination, and labeling",
      "Fluke-tested CAT6/CAT6a, coax, and fiber runs",
      "Pre-staged for smart building systems and Wi-Fi 7",
    ],
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {panels.map((panel, index) => {
          const Icon = panel.icon;
          return (
            <motion.div
              key={panel.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full overflow-hidden border-border bg-white shadow-sm transition hover:border-sky-200 hover:shadow-lg hover:shadow-sky-200/25">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={panel.image}
                    alt={panel.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 560px"
                    className="object-cover"
                  />
                </div>
                <CardHeader className="space-y-6">
                  <Badge className="w-fit">{panel.badge}</Badge>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-zinc-50">
                    <Icon className="h-6 w-6 text-foreground" />
                  </span>
                  <CardTitle className="text-3xl leading-tight text-foreground">
                    {panel.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-sm text-muted-foreground sm:text-base">
                  <p className="leading-relaxed">{panel.description}</p>
                  <ul className="space-y-3">
                    {panel.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}




