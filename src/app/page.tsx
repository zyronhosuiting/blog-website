"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, ExternalLink, Star, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import dynamic from "next/dynamic";
import MatrixCode from "@/components/matrix-code";
import { RevealCard } from "@/components/ui/reveal-card";
import { FlipWords } from "@/components/ui/flip-words";
import { Boxes } from "@/components/ui/background-boxes";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";

// Dynamically import components that use browser APIs with no SSR
const DynamicParticleBackground = dynamic(
  () =>
    import("@/components/ui/particle-background").then(
      (mod) => mod.ParticleBackground
    ),
  { ssr: false }
);

const featuredProjects = [
  {
    title: "Cryptopai",
    description:
      "A crypto media platform delivering real-time news and insights",
    tags: ["React", "Tailwind CSS", "Python"],
    demo: "https://www.cryptopai.io/",
    stars: 42,
    status: "In Progress",
    date: "April 2025",
  },
  {
    title: "NovaX",
    description:
      "A high-performance crypto exchange built for seamless trading",
    tags: ["React Native", "Rust", "Java"],
    demo: "https://www.novax.io/",
    stars: 78,
    status: "Completed",
    date: "October 2024",
  },
  {
    title: "Poker",
    description: "A poker platform with real-time gameplay",
    tags: ["NodeJs", "Redis", "Go", "PostgreSQL"],
    demo: "./",
    stars: 56,
    status: "Completed",
    date: "January 2024",
  },
  {
    title: "Talk+ | AI & Crypto",
    description: "A chat application with AI & crypto integration",
    tags: ["React Native", "Python", "Express", "Socket"],
    demo: "https://www.talkapp.org/",
    stars: 56,
    status: "Completed",
    date: "October 2023",
  },
];

export default function Home() {
  return (
    <div className="space-y-8 md:space-y-12 pb-12">
      {/* Particle Background */}
      <DynamicParticleBackground />

      {/* Hero Section */}
      <section className="relative z-10 py-6">
        {/* Background grid pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Glowing orb effect */}
        <div className="absolute overflow-hidden w-full h-48 md:w-full md:h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>

        {/* Matrix Code Background */}
        <div className="absolute inset-0 -z-10">
          <MatrixCode />
        </div>

        <div className="relative space-y-4 md:space-y-6 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs md:text-sm">
              Application Architect
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Zyron
              </span>
            </h1>
            <div className="text-sm md:text-base lg:text-xl text-muted-foreground max-w-2xl">
              I build{" "}
              <FlipWords
                words={["high-performance", "modern", "cutting-edge"]}
              />
              application with latest technologies!
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 md:gap-3"
          >
            <Link href="/about">
              <Button
                size="sm"
                className="text-xs md:text-sm bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                About Me
              </Button>
            </Link>
            <Link href="/coming-soon">
              <Button
                size="sm"
                variant="outline"
                className="text-xs md:text-sm border-primary/20 bg-primary/5 hover:bg-primary/10"
              >
                View Projects{" "}
                <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "AI",
                "Go",
                "Python",
                "PostgreSQL",
                "MongoDB",
                "Redis",
                "Cloudflare",
                "AWS",
                "Docker",
                "Kubernetes",
                "CI/CD",
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs bg-secondary/10 text-secondary hover:bg-secondary/20 border-none"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Featured Projects
            </h2>
            {/* <Button
              variant="ghost"
              size="sm"
              className="text-xs md:text-sm text-primary"
            >
              View All{" "}
              <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button> */}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 auto-rows-fr">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.title} width="100%" delay={index * 0.1}>
              <div className="h-full">
                <RevealCard color="#0f1729" radius={400} className="h-full">
                  <div className="relative flex flex-1 flex-col justify-between gap-3 h-full">
                    <div className="flex items-center justify-between">
                      <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                        <Code className="h-4 w-4" />
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Star className="h-3 w-3 mr-1 fill-yellow-500 text-yellow-500" />
                        {project.stars}
                      </div>
                    </div>
                    <div className="space-y-0 flex-grow flex flex-col h-full">
                      <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground mb-2">
                        {project.title}
                      </h3>
                      <h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground flex-grow min-h-[4rem]">
                        {project.description}
                      </h2>
                      <div className="flex flex-wrap gap-1.5 md:gap-2 pt-3 mt-auto">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs bg-primary/5 border-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between pt-3 mt-auto">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.date}
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-8 text-primary"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-1.5 h-3 w-3 md:h-4 md:w-4" />{" "}
                          View
                        </a>
                      </Button>
                    </div>
                  </div>
                </RevealCard>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* About Me Section Preview */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            About Me
          </h2>
        </ScrollReveal>

        <div className="relative">
          <ScrollReveal width="100%">
            <div className="group">
              <Card className="bg-card/30 backdrop-blur-sm overflow-hidden rounded-[1.25rem] border-[0.75px] border-border">
                <CardContent className="p-0 relative">
                  {/* Background Boxes - Full height and width */}
                  <div className="w-full h-[150px] md:h-[200px] relative overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Boxes className="opacity-70" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-3 md:p-6 flex flex-col justify-center">
                    <div className="relative z-10 max-w-2xl">
                      <TextGenerateEffect
                        words="I'm a passionate software engineer with
                        expertise in building modern applications. With over
                        5 years of experience in the industry, I've worked
                        on a variety of projects ranging from small business
                        websites to large-scale enterprise applications."
                      />
                      <div className="mt-3 md:mt-4 flex">
                        <Link href="/about">
                          <Button
                            variant="link"
                            size="sm"
                            className="text-xs md:text-sm text-primary p-0"
                          >
                            Read more about me{" "}
                            <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          {/* Code snippet decoration */}
          <div className="absolute -top-4 -right-4 hidden md:block">
            <div className="bg-card/80 backdrop-blur-sm border border-border/40 rounded-md p-2 text-xs font-mono text-muted-foreground">
              <Code className="h-4 w-4 inline-block mr-2" />
              <span>
                const developer = new SeniorEngineer(&quot;Zyron&quot;);
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
