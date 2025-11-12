import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.28em] transition-colors focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-slate-200/80 bg-white/85 text-slate-700 shadow-sm backdrop-blur-sm hover:border-slate-300 hover:text-slate-900",
        secondary:
          "border-transparent bg-slate-900 text-white shadow-sm hover:bg-slate-900/90",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-500/80",
        outline: "border-slate-200 text-slate-600 hover:border-slate-300",
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









