"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Images as ImagesIcon, LucideProps } from "lucide-react";

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
  },
];

const beforeAfterImages = {
  before: {
    src: "/images/projects_before_messy_wiring.png",
    alt: "Cramped utility nook, messy spaghetti wiring",
  },
  after: {
    src: "/images/projects_after_neat_labeled_panel.png",
    alt: "The same utility nook, now with neatly dressed and labeled cables",
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
          <div className="relative h-96 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <Image
              src={showBefore ? beforeAfterImages.before.src : beforeAfterImages.after.src}
              alt={showBefore ? beforeAfterImages.before.alt : beforeAfterImages.after.alt}
              fill
              className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={() => setShowBefore(true)}
                className={`rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition hover:bg-white/20 ${
                  showBefore ? "bg-white/30" : ""
                }`}
                aria-label="Show before"
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowBefore(true)}
                  className={`rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm transition ${
                    showBefore
                      ? "bg-white/30 text-foreground"
                      : "bg-white/10 text-muted-foreground hover:bg-white/20"
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowBefore(false)}
                  className={`rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm transition ${
                    !showBefore
                      ? "bg-white/30 text-foreground"
                      : "bg-white/10 text-muted-foreground hover:bg-white/20"
                  }`}
                >
                  After
                </button>
              </div>
              <button
                onClick={() => setShowBefore(false)}
                className={`rounded-full border border-white/20 bg-white/10 p-3 backdrop-blur-sm transition hover:bg-white/20 ${
                  !showBefore ? "bg-white/30" : ""
                }`}
                aria-label="Show after"
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </button>
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
            >
              <Card className="h-full border-white/10 bg-white/[0.04] transition hover:border-white/20 hover:bg-white/[0.06]">
                <div className="h-48 w-full overflow-hidden rounded-3xl border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_60%)]">
                  <ProjectPlaceholder />
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

function ProjectPlaceholder(props: LucideProps) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_65%)]">
      <ImagesIcon className="h-10 w-10 text-white/40" {...props} />
    </div>
  );
}




