"use client";

import Image from "next/image";
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
    <footer className="relative border-t border-white/10 bg-background-light">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/conversion_footer_technician_team_lobby.png"
          alt="Three technicians in an apartment lobby, smiling, one looking at a tablet"
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-background-light/90" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-16 sm:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <Badge className="tracking-[0.35em]">Sequoia Services</Badge>
            <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Structured cabling partners for Kamloops builders and property teams.
            </h3>
            <p className="max-w-md text-sm text-muted-foreground sm:text-base">
              We design, install, and certify cabling networks across multifamily, commercial,
              and high-end residential projects. Precision-driven, documentation-first, and always
              ready for the next upgrade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="sm" asChild>
                <a href="#contact">Start a project</a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href="tel:2505747110" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (250) 574-7110
                </a>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Navigate</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {navigation.map((link) => (
                  <li key={link.label}>
                    <a
                      className="transition hover:text-foreground"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Contact</p>
                <div className="mt-3 space-y-2 text-sm">
                  <a
                    href="tel:2505747110"
                    className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    (250) 574-7110
                  </a>
                  <a
                    href="mailto:FiberOptics@sequoiaservices.ca"
                    className="flex items-center gap-2 text-muted-foreground transition hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" />
                    FiberOptics@sequoiaservices.ca
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Service area</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Based in Kamloops, BC · Serving the Thompson-Nicola region.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 border-t border-white/10 py-6 text-xs text-zinc-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Sequoia Services. All rights reserved.</span>
          <span>Structured cabling crafted with precision in Kamloops, BC.</span>
        </div>
      </div>
    </footer>
  );
}




