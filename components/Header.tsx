"use client";

import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import StarBorder from "@/components/StarBorder";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-zinc-400 transition hover:text-foreground"
        >
          {item.name}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-colors duration-300",
        isScrolled ? "border-white/10 bg-background/90 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3" aria-label="Sequoia Services home">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-500">
              Sequoia
            </span>
            <span className="text-sm font-semibold text-foreground">Structured Cabling</span>
          </div>
          <Badge className="hidden sm:inline-flex tracking-[0.35em]" variant="outline">
            Kamloops · BC
          </Badge>
        </a>

        <nav className="hidden items-center gap-8 md:flex">{navLinks}</nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:2505747110"
            className="flex items-center gap-2 text-sm text-zinc-400 transition hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span>(250) 574-7110</span>
          </a>
          <StarBorder
            as="a"
            href="#contact"
            color="cyan"
            speed="2.5s"
            thickness={2}
          >
            Start a project
          </StarBorder>
        </div>

        <Sheet>
          <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground transition hover:border-white/20 md:hidden">
            <span className="sr-only">Open navigation</span>
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs border-l border-white/10">
            <div className="mt-12 flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">Navigate</p>
                <div className="mt-6 flex flex-col gap-5 text-lg font-medium text-foreground">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href}>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Talk to us
                </span>
                <a
                  href="tel:2505747110"
                  className="flex items-center gap-2 text-foreground transition hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  (250) 574-7110
                </a>
                <StarBorder
                  as="a"
                  href="#contact"
                  color="cyan"
                  speed="2.5s"
                  thickness={2}
                  className="mt-4 w-full"
                >
                  Start a project
                </StarBorder>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

