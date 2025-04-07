"use client";

import type React from "react";

import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import components that use browser APIs with no SSR
const DynamicParticleBackground = dynamic(
  () =>
    import("@/components/ui/particle-background").then(
      (mod) => mod.ParticleBackground
    ),
  { ssr: false }
);

export default function ComingSoonPage() {
  return (
    <div className="min-h-[80vh] flex flex-col w-full">
      {/* Particle Background */}
      <DynamicParticleBackground />

      {/* Back Button */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-4">
        <ScrollReveal>
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs md:text-sm">
            Coming Soon
          </Badge>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            This Page is{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Under Development
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mb-8">
            I&apos;m working hard to bring you something amazing. This page is
            currently under construction and will be available soon. Stay tuned!
          </p>
        </ScrollReveal>

        {/* Status Update */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 text-left max-w-md mx-auto">
            <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium mb-1">
                Development in Progress
              </h3>
              <p className="text-xs text-muted-foreground">
                I am actively working on this page. Current status: 15%
                complete. Check back soon for updates!
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
