"use client";

import type React from "react";

import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "100%" | "fit-content";
  delay?: number;
}

export function ScrollReveal({
  children,
  width = "fit-content",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
