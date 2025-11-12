"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[100vh] items-end overflow-hidden bg-background pb-20"
    >
      {/* Full-Screen Video Background */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero_condo_ethernet_kamloops.png"
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero_section_video.mp4" type="video/mp4" />
          {/* Fallback Image */}
          <Image
            src="/images/hero_condo_ethernet_kamloops.png"
            alt="Professional structured cabling installation"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </video>
      </motion.div>

      {/* Bottom Content - Buttons Only */}
      <div className="relative z-10 flex w-full justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              asChild
              className="rounded-full bg-white/30 text-foreground backdrop-blur-sm transition hover:bg-white/40"
            >
              <a href="#contact">Book a site walk-through</a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              asChild
              className="rounded-full border border-white/20 bg-white/10 text-foreground backdrop-blur-sm transition hover:bg-white/20"
            >
              <a href="tel:2505747110">
                <Phone className="h-4 w-4" />
                (250) 574-7110
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}




