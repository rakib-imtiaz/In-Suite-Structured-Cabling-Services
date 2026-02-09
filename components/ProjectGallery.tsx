"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Riverside multi-family tower",
    category: "150 suites · mixed media",
    outcome:
      "Delivered 150 suites with CAT6a, coax, and fiber backbones. Patch panels dressed and labeled for ISP cutover within hours.",
    highlights: [
      "Dual telecom rooms mirrored and documented",
      "Suite turnovers aligned with staged occupancy",
      "Closeout package integrated with GC Procore logs",
    ],
    image: "/new_client_asset/network_rack_switch_patch_panel_closeup.jpg",
  },
  {
    title: "Kamloops tech campus",
    category: "Commercial retrofit",
    outcome:
      "Converted three floors of legacy cabling to PoE-ready infrastructure while keeping operations live for 300 staff.",
    highlights: [
      "Night shift cable pulls with zero daytime disruption",
      "Fiber uplinks added to support redundant routing",
      "Room-by-room labeling delivered to IT support",
    ],
    image: "/new_client_asset/security_av_network_rack_avaton_system.jpg",
  },
  {
    title: "Custom hillside residence",
    category: "Luxury residential",
    outcome:
      "Whole-home pre-wire for audio, security, networking, and automation with discreet finishes and hidden racks.",
    highlights: [
      "Equipment rack concealed in climate-controlled millwork",
      "12-zone audio and 4K distribution prepped for integrator",
      "Owner received binder with all labeling schematics",
    ],
    image: "/new_client_asset/telecom_security_alarm_wiring_wall.jpg",
  },
];

const beforeAfterImages = {
  before: {
    src: "/new_client_asset/building_cable_tray_horizontal_routing.jpg",
    alt: "Building cable tray with horizontal routing in progress",
  },
  after: {
    src: "/new_client_asset/vertical_cable_management_rack_side_view.jpg",
    alt: "Vertical cable management rack with organized cables",
  },
};

export default function ProjectGallery() {
  const [showBefore, setShowBefore] = useState(true);

  return (
    <section id="projects" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <Badge className="tracking-[0.35em]">Project snapshots</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Proof that disciplined cabling elevates every handover
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Large scale builds, rapid retrofits, and custom residences all benefit from the same
            precision: well-planned routes, flawless terminations, and documentation your teams can trust.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-border bg-white shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={showBefore ? "before" : "after"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={showBefore ? beforeAfterImages.before.src : beforeAfterImages.after.src}
                  alt={showBefore ? beforeAfterImages.before.alt : beforeAfterImages.after.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <motion.button
                onClick={() => setShowBefore(true)}
                className={`rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition hover:bg-white/20 ${showBefore ? "bg-white/30" : ""
                  }`}
                aria-label="Show before"
                whileTap={{ scale: 0.94 }}
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </motion.button>
              <div className="flex gap-2">
                <motion.button
                  onClick={() => setShowBefore(true)}
                  className={`rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm transition ${showBefore
                    ? "bg-white/30 text-foreground"
                    : "bg-white/10 text-muted-foreground hover:bg-white/20"
                    }`}
                  whileTap={{ scale: 0.96 }}
                >
                  Before
                </motion.button>
                <motion.button
                  onClick={() => setShowBefore(false)}
                  className={`rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm transition ${!showBefore
                    ? "bg-white/30 text-foreground"
                    : "bg-white/10 text-muted-foreground hover:bg-white/20"
                    }`}
                  whileTap={{ scale: 0.96 }}
                >
                  After
                </motion.button>
              </div>
              <motion.button
                onClick={() => setShowBefore(false)}
                className={`rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition hover:bg-white/20 ${!showBefore ? "bg-white/30" : ""
                  }`}
                aria-label="Show after"
                whileTap={{ scale: 0.94 }}
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 22px 40px rgba(31,41,55,0.15)" }}
            >
              <Card className="h-full border-border bg-white transition hover:border-slate-200 hover:bg-zinc-50">
                <div className="relative h-48 w-full overflow-hidden rounded-t-3xl border-b border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardHeader className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                    {project.category}
                  </span>
                  <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {project.outcome}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-muted-foreground">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-foreground" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
