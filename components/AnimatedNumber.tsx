"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

type AnimatedNumberProps = {
  value: string | number;
  className?: string;
  duration?: number;
};

const formatValue = (raw: string | number, current: number) => {
  const rawString = String(raw);
  const match = rawString.match(/^([^\d.-]*)([\d.,-]+)(.*)$/);

  if (!match) {
    return rawString;
  }

  const [, prefix, numberPart, suffix] = match;
  const hasDecimal = numberPart.includes(".");
  const decimals = hasDecimal ? numberPart.split(".")[1]?.length ?? 0 : 0;

  const formatted = hasDecimal
    ? current.toFixed(decimals)
    : Math.round(current).toLocaleString();

  return `${prefix}${formatted}${suffix}`;
};

export default function AnimatedNumber({
  value,
  className,
  duration = 1.2,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const target = useMemo(() => {
    const rawString = String(value);
    const match = rawString.match(/^([^\d.-]*)([\d.,-]+)(.*)$/);
    if (!match) {
      return Number(rawString) || 0;
    }
    const numeric = Number(match[2].replace(/,/g, ""));
    return Number.isFinite(numeric) ? numeric : 0;
  }, [value]);

  const spanRef = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(spanRef, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!spanRef.current || !inView || hasAnimated) {
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(latest);
      },
      onComplete() {
        setHasAnimated(true);
      },
    });

    return () => controls.stop();
  }, [inView, target, duration, hasAnimated]);

  return (
    <motion.span
      ref={spanRef}
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 8,
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {formatValue(value, hasAnimated ? target : display)}
    </motion.span>
  );
}


