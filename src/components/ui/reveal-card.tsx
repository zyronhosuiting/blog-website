"use client";

import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import type React from "react";
import { type MouseEvent as ReactMouseEvent, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export const RevealCard = ({
  children,
  radius = 100,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div className="min-h-[14rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div
          className={cn(
            "group/spotlight relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6",
            className
          )}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute z-0 -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
            style={{
              backgroundColor: color,
              maskImage: useMotionTemplate`
                radial-gradient(
                  ${radius}px circle at ${mouseX}px ${mouseY}px,
                  white,
                  transparent 80%
                )
              `,
            }}
          >
            {isHovering && (
              <CanvasRevealEffect
                animationSpeed={5}
                containerClassName="bg-transparent absolute inset-0 pointer-events-none"
                colors={[
                  [59, 130, 246],
                  [139, 92, 246],
                ]}
                dotSize={3}
              />
            )}
          </motion.div>

          {children}
        </div>
      </div>
    </div>
  );
};
