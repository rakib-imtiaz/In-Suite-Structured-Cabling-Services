"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-background pt-20 lg:min-h-[calc(100vh-80px)]"
    >
      <div className="grid h-full min-h-[calc(100vh-80px)] lg:grid-cols-2">
        {/* Right Image - First in HTML for mobile */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-[400px] lg:order-2 lg:h-full lg:min-h-[calc(100vh-80px)]"
        >
          <Image
            src="/images/hero_image.png"
            alt="Professional structured cabling installation"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Left Content - Second in HTML for mobile, first on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center px-6 py-16 sm:px-12 lg:order-1 lg:px-16 xl:px-24"
        >
          <div className="max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Professional Structured Cabling for Multi-Unit Buildings
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg text-muted-foreground sm:text-xl"
            >
              Expert Installation • BICSI Certified • Kamloops, BC
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                asChild
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="#contact">Book a site walk-through</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border-2"
              >
                <a href="tel:2505747110">
                  <Phone className="mr-2 h-4 w-4" />
                  (250) 574-7110
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
