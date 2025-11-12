import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.3em] transition-colors focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-0",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-white/[0.06] text-zinc-300 backdrop-blur hover:border-white/20 hover:text-foreground",
        secondary:
          "border-white/15 bg-white/[0.12] text-foreground hover:border-white/25",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-500/80",
        outline: "border-white/20 text-zinc-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };









