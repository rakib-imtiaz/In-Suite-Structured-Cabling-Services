"use client";

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
import {
  Cable,
  FileCheck,
  PanelTop,
  Plug,
  Radio,
  Tags,
} from "lucide-react";

const coreServices = [
  {
    icon: Cable,
    label: "Core install",
    title: "Structured cable pulling & routing",
    description:
      "CAT5e, CAT6, CAT6a, CAT7, coax, and fiber pulled with care for finished and in-progress suites.",
    image: "/new_client_asset/overhead_cable_tray_color_coded_network_cables.jpg",
    imageAlt: "Overhead cable tray with color-coded network cables",
    deliverables: [
      "Blueprint-informed pathways and penetration protection",
      "Suite-by-suite homeruns routed cleanly to telecom rooms",
      "Fire stopping and code-compliant dressing at every drop",
    ],
  },
  {
    icon: Tags,
    label: "Detailing",
    title: "Termination, labeling & patching",
    description:
      "Professional terminations at jacks, patch panels, and equipment—with a labeling system crews can follow.",
    image: "/new_client_asset/network_rack_fully_populated_patch_panels.jpg",
    imageAlt: "Fully populated network rack with patch panels",
    deliverables: [
      "Wall plates, keystones, and rack hardware supplied and installed",
      "Standardized labeling schema mapped to drawings",
      "Patch panels dressed, tested, and staged for ISP turn-up",
    ],
  },
  {
    icon: FileCheck,
    label: "Quality assurance",
    title: "Testing & certification",
    description:
      "No handover without proof. We certify every run and package the documentation for your closeout binder.",
    image: "/new_client_asset/fiber_backbone_distribution_wall_corning_boxes.jpg",
    imageAlt: "Fiber backbone distribution with Corning junction boxes",
    deliverables: [
      "Fluke DSX reports for CAT6/CAT6a installations",
      "Detailed deficiency list and corrective actions (if any)",
      "Digital and printable documentation delivered on completion",
    ],
  },
];

const enhancements = [
  {
    icon: PanelTop,
    title: "Communication closets & racks",
    description:
      "Cabinet, rack, and tray builds that keep your infrastructure organized as properties scale.",
    image: "/new_client_asset/wall_mounted_network_rack_overview.jpg",
    imageAlt: "Wall mounted network rack overview",
  },
  {
    icon: Plug,
    title: "In-suite device finishing",
    description:
      "Flush or surface plates, multimedia outlets, and discreet finishes selected for each interior.",
    image: "/new_client_asset/structured_media_enclosure_fiber_coax_network_panel.jpg",
    imageAlt: "Structured media enclosure with fiber, coax, and network panel",
  },
  {
    icon: Radio,
    title: "Smart home & automation pre-wire",
    description:
      "Audio, lighting, and sensor cabling to prep for Crestron, Control4, Lutron, and future systems.",
    image: "/new_client_asset/end_user_network_cabinet_router_wifi.jpg",
    imageAlt: "End user network cabinet with router and wifi equipment",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-muted py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 text-center"
        >
          <Badge className="mx-auto border-none bg-primary/10 font-semibold uppercase tracking-[0.35em] text-primary">Services</Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Full-scope cabling services designed for modern buildings
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
            From construction through commissioning, we take ownership for the network backbone
            so your teams can focus on the architectural finish and the tenant experience.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="accent-border-top card-shadow h-full overflow-hidden border-border bg-white transition-all hover:-translate-y-2 hover:card-shadow-hover">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="space-y-5">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="font-semibold uppercase tracking-[0.25em]">
                        {service.label}
                      </Badge>
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-accent/30 bg-accent/10 text-accent">
                        <Icon className="h-6 w-6" />
                      </span>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-[1.7] text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm font-medium text-muted-foreground">
                    {service.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-[6px] h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enhancements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, boxShadow: "0 20px 35px rgba(59,130,246,0.16)" }}
              >
                <Card className="overflow-hidden border-border bg-white transition hover:border-blue-200">
                  {item.image && (
                    <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                      <Image
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <CardHeader className="space-y-4 pb-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-zinc-50 text-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="text-xl text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </CardDescription>
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




