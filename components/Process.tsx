"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList, FileCheck, Wrench } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Scope, drawings, and schedule alignment",
    description:
      "We meet on site, review drawings, and create a route plan that respects your construction sequencing and fire-stopping requirements.",
    icon: ClipboardList,
    outcomes: [
      "Cable schedules, labeling schema, and drop list confirmed",
      "Coordination with electrical, drywall, and millwork trades",
      "Milestones set for rough-in, trims, and commissioning",
    ],
  },
  {
    step: "02",
    title: "Install, terminate, and polish",
    description:
      "Our crew pulls, sleeves, and dresses each run, then terminates and labels to match the documentation. Panels and racks are left show-ready.",
    icon: Wrench,
    outcomes: [
      "Low-voltage rough-in completed alongside wall closures",
      "Terminations, labeling, and rack dressing executed to spec",
      "Interim QA to catch any conflicts before finishes go in",
    ],
  },
  {
    step: "03",
    title: "Certification, documentation, and handover",
    description:
      "Every run is tested, every deficiency is corrected, and you receive a full closeout package for your records and the next trade.",
    icon: FileCheck,
    outcomes: [
      "Fluke DSX certification reports delivered digitally",
      "Photo documentation of panels, racks, and terminations",
      "Final walkthrough with your team to confirm sign-off",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <Badge className="tracking-[0.35em]">Process</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            A build-friendly process that finishes on time
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            We integrate with site coordination to keep your schedule intact while delivering
            a cabling system that exceeds technical standards.
          </p>
        </motion.div>

        <div className="mt-16 space-y-10 border-l border-white/10 pl-6 sm:pl-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative"
              >
                <div className="absolute -left-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] text-sm font-semibold text-foreground sm:-left-12 sm:h-12 sm:w-12">
                  {step.step}
                </div>
                <Card className="ml-4 border-white/10 bg-white/[0.04] transition hover:border-white/20">
                  <CardContent className="space-y-5 py-8">
                    <div className="flex items-center gap-4 text-left">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-foreground">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {step.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-foreground" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
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




