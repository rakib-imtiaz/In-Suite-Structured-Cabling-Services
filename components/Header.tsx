"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Process", href: "#process" },
  { name: "Projects", href: "#projects" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scrollIndicator = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative fixed inset-x-0 top-0 z-50 border-b border-transparent px-4 transition-all duration-500 sm:px-6 lg:px-8",
        isScrolled
          ? "border-border/70 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-2xl"
          : "bg-white/40 backdrop-blur-lg"
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className={cn(
            "absolute inset-x-6 top-2 h-[60%] rounded-full bg-gradient-to-r from-primary/8 via-accent/8 to-primary/8 blur-2xl transition-opacity duration-500",
            isScrolled ? "opacity-90" : "opacity-60"
          )}
        />
        <div
          className={cn(
            "absolute inset-x-8 bottom-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-opacity duration-500",
            isScrolled ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          )}
        >
          <motion.span
            className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-primary via-accent to-primary"
            style={{ scaleX: scrollIndicator, transformOrigin: "0% 50%" }}
          />
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between sm:h-20">
        <a href="#hero" className="flex items-center gap-3" aria-label="Sequoia Services home">
          <Image
            src="/images/logo.png"
            alt="Sequoia Services Logo"
            width={40}
            height={40}
            className="h-8 w-8 sm:h-10 sm:w-10"
            priority
          />
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground">
              Sequoia
            </span>
            <span className="text-sm font-bold text-foreground">Structured Cabling</span>
          </div>
          <Badge className="hidden xl:inline-flex tracking-[0.28em] border-primary/30 bg-primary/5 text-primary font-semibold" variant="outline">
            Kamloops · BC
          </Badge>
        </a>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navigation.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 + 0.2, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -2 }}
              whileFocus={{ y: -1 }}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground focus:text-foreground"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="hidden items-center gap-4 lg:flex"
        >
          <Button size="default" asChild className="bg-foreground text-background hover:bg-foreground/90">
            <a href="#contact">Start a project</a>
          </Button>
        </motion.div>

        <Sheet>
          <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md lg:hidden">
            <span className="sr-only">Open navigation</span>
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm border-l border-slate-100 bg-white p-0">
            <div className="sr-only">
              <SheetTitle>Primary navigation</SheetTitle>
              <SheetDescription>Select a section to navigate to.</SheetDescription>
            </div>

            {/* Header with logo */}
            <div className="border-b border-slate-100 px-6 py-5">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.png"
                  alt="Sequoia Services Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-600">
                    Sequoia
                  </span>
                  <span className="text-sm font-bold text-slate-900">Structured Cabling</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="px-3 py-6">
              <p className="mb-4 px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                Navigation
              </p>
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-lg px-3 py-3 text-[15px] font-medium text-slate-700 transition-all hover:bg-slate-50 hover:text-slate-900"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/40 transition-all group-hover:bg-primary" />
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA Button at bottom */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-slate-100 bg-white p-6">
              <Button
                className="w-full rounded-xl bg-slate-900 py-6 text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800"
                size="lg"
                asChild
              >
                <a href="#contact">Start a project</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

