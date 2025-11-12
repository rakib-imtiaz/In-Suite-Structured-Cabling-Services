"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageShell({ children, className }: PageShellProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn("min-h-screen bg-background text-foreground", className)}
    >
      {children}
    </motion.main>
  );
}


