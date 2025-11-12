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
          <Badge className="hidden sm:inline-flex tracking-[0.28em] border-primary/30 bg-primary/5 text-primary font-semibold" variant="outline">
            Kamloops · BC
          </Badge>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
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
          className="hidden items-center gap-4 md:flex"
        >
          <Button size="default" asChild className="bg-foreground text-background hover:bg-foreground/90">
            <a href="#contact">Start a project</a>
          </Button>
        </motion.div>

        <Sheet>
          <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md md:hidden">
            <span className="sr-only">Open navigation</span>
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs border-l border-slate-100 bg-white/95 backdrop-blur">
            <div className="sr-only">
              <SheetTitle>Primary navigation</SheetTitle>
              <SheetDescription>Select a section to navigate to.</SheetDescription>
            </div>
            <div className="mt-12 flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Navigate</p>
                <div className="mt-6 flex flex-col gap-5 text-lg font-medium text-slate-900">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between text-base font-semibold transition hover:text-primary"
                    >
                      {item.name}
                      <span className="h-1 w-8 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-70" />
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90" size="lg" asChild>
                  <a href="#contact">Start a project</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}

