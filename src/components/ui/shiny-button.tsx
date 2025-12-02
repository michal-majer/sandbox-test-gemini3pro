"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as HTMLMotionProps<"button">;

export const ShinyButton = ({ children, className, ...props }: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      {...props}
      className={cn(
        "relative rounded-full px-6 py-2 font-medium transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
        "bg-neutral-900 border border-neutral-800 text-neutral-200",
        className
      )}
    >
      <span
        className="absolute inset-0 block rounded-full p-[1px] opacity-50 mask-linear-gradient"
        style={{
            backgroundImage: "linear-gradient(-75deg, rgba(255,255,255,0.1) calc(var(--x) + 20%), rgba(255,255,255,0.5) calc(var(--x) + 25%), rgba(255,255,255,0.1) calc(var(--x) + 100%))"
        }}
      />
      <span className="relative block h-full w-full text-sm tracking-wide text-neutral-100">
        {children}
      </span>
    </motion.button>
  );
};

