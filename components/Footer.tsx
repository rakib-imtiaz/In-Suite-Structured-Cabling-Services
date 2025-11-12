"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-primary/20 bg-muted">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/conversion_footer_technician_team_lobby.png"
          alt="Three technicians in an apartment lobby, smiling, one looking at a tablet"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-muted via-muted/95 to-muted" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 py-20 sm:grid-cols-[1.2fr_1fr]"
        >
          <div className="space-y-7">
            <Badge className="border-none bg-primary/10 font-semibold uppercase tracking-[0.35em] text-primary">Sequoia Services</Badge>
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
              Structured cabling partners for Kamloops builders and property teams.
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              We design, install, and certify cabling networks across multifamily, commercial,
              and high-end residential projects. Precision-driven, documentation-first, and always
              ready for the next upgrade.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
                <Button size="default" asChild className="bg-foreground text-background hover:bg-foreground/90">
                  <a href="#contact">Start a project</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.96 }}>
                <Button size="default" variant="outline" asChild>
                  <a href="tel:2505747110">
                    <Phone className="h-4 w-4" />
                    (250) 574-7110
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Navigate</p>
              <ul className="mt-5 space-y-3 text-sm font-medium text-muted-foreground">
                {navigation.map((link) => (
                  <li key={link.label}>
                    <a
                      className="transition hover:text-foreground hover:translate-x-1 inline-block"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Contact</p>
                <div className="mt-4 space-y-3 text-sm font-medium">
                  <a
                    href="tel:2505747110"
                    className="flex items-center gap-2 text-muted-foreground transition hover:text-accent"
                  >
                    <Phone className="h-4 w-4" />
                    (250) 574-7110
                  </a>
                  <a
                    href="mailto:FiberOptics@sequoiaservices.ca"
                    className="flex items-center gap-2 text-muted-foreground transition hover:text-accent"
                  >
                    <Mail className="h-4 w-4" />
                    FiberOptics@sequoiaservices.ca
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Service area</p>
                <p className="mt-4 text-sm font-medium text-muted-foreground">
                  Based in Kamloops, BC · Serving the Thompson-Nicola region.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-2 border-t-2 border-primary/20 py-8 text-xs font-medium text-muted-foreground sm:flex-row sm:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span>© {new Date().getFullYear()} Sequoia Services. All rights reserved.</span>
          <span>Structured cabling crafted with precision in Kamloops, BC.</span>
        </motion.div>
      </div>
    </footer>
  );
}




