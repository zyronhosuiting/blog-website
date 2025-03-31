"use client";

import type React from "react";

import { useState, useRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  depth?: number;
  hoverScale?: number;
}

export function AnimatedCard({
  children,
  className,
  depth = 10,
  hoverScale = 1.02,
  ...props
}: AnimatedCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -depth;
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * depth;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden transition-all duration-200 will-change-transform",
        className
      )}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
        scale: isHovering ? hoverScale : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        mass: 0.5,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setRotateX(0);
        setRotateY(0);
        setIsHovering(false);
      }}
      {...props}
    >
      {children}

      {/* Reflective highlight effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 pointer-events-none"
        animate={{
          opacity: isHovering ? 0.1 : 0,
          rotateX: rotateX * -1,
          rotateY: rotateY * -1,
        }}
      />
    </motion.div>
  );
}
