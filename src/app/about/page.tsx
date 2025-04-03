"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Calendar,
  ExternalLink,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealCard } from "@/components/ui/reveal-card";
import { Timeline } from "@/components/ui/timeline";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import components that use browser APIs with no SSR
const DynamicParticleBackground = dynamic(
  () =>
    import("@/components/ui/particle-background").then(
      (mod) => mod.ParticleBackground
    ),
  { ssr: false }
);

const projects = [
  {
    title: "Cryptopie",
    description:
      "A crypto media platform delivering real-time news and insights",
    tags: ["React", "Tailwind CSS"],
    demo: "https://www.cryptopie.ai/",
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
    tags: ["React Native", "Python", "Express", "MySQL"],
    demo: "https://www.talkapp.org/",
    stars: 56,
    status: "Completed",
    date: "October 2023",
  },
];

const education = [
  {
    institution: "Stanford University",
    degree: "Master of Science in Computer Science",
    specialization: "Artificial Intelligence",
    duration: "2020 - 2022",
    location: "Stanford, CA",
    achievements: [
      "GPA: 3.9/4.0",
      "Research Assistant in AI Lab",
      "Published 2 papers on machine learning applications",
    ],
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    specialization: "Software Engineering",
    duration: "2016 - 2020",
    location: "Berkeley, CA",
    achievements: [
      "GPA: 3.8/4.0",
      "Dean's List all semesters",
      "Hackathon winner: Best Innovation Award",
    ],
  },
];

const experience = [
  {
    company: "Google",
    position: "Senior Software Engineer",
    duration: "2022 - Present",
    location: "Mountain View, CA",
    description:
      "Leading development of AI-powered features for Google Cloud Platform. Architecting scalable solutions that handle millions of requests per day.",
    technologies: ["Golang", "Kubernetes", "TensorFlow", "GCP"],
  },
  {
    company: "Meta",
    position: "Software Engineer",
    duration: "2020 - 2022",
    location: "Menlo Park, CA",
    description:
      "Developed and optimized backend services for Facebook Marketplace. Improved system performance by 40% through innovative caching strategies.",
    technologies: ["React", "Node.js", "GraphQL", "AWS"],
  },
  {
    company: "Coinbase",
    position: "Blockchain Developer",
    duration: "2018 - 2020",
    location: "San Francisco, CA",
    description:
      "Built secure cryptocurrency trading systems and implemented smart contracts for various blockchain platforms.",
    technologies: ["Solidity", "Ethereum", "Bitcoin", "Web3.js"],
  },
];

const timelineData = [
  {
    title: "Present - 2025",
    content: (
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Co-Founder at Cryptopie
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Spearheading the development of AI-driven solutions to revolutionize
          cryptocurrency trading and analytics. Designing scalable systems that
          process millions of transactions daily, empowering users with
          real-time insights in the fast-evolving crypto market.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-muted-foreground">Location</span>
            <span className="text-sm">Singapore</span>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="text-xs text-muted-foreground">Team</span>
            <span className="text-sm">AI & Blockchain Innovation</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {["AWS", "Blockchain", "Python", "React"].map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs bg-primary/5 border-primary/20"
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="relative w-full h-40 rounded-md overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
          <Image
            src="/project/cryptopie.png"
            alt="Cryptopie"
            fill
            className="object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "2020 - 2022",
    content: (
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Software Engineer at Meta
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Developed and optimized backend services for Facebook Marketplace.
              Improved system performance by 40% through innovative caching
              strategies.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "GraphQL", "AWS"].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-primary/5 border-primary/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-border/40"></div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Master&apos;s Degree from Stanford
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Completed my Master of Science in Computer Science with a
              specialization in Artificial Intelligence.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                GPA: 3.9/4.0
              </Badge>
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                Research Assistant
              </Badge>
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                2 Published Papers
              </Badge>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2018 - 2020",
    content: (
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Blockchain Developer at Coinbase
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Built secure cryptocurrency trading systems and implemented smart
              contracts for various blockchain platforms.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Solidity", "Ethereum", "Bitcoin", "Web3.js"].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-primary/5 border-primary/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-border/40"></div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              First Major Project: Poker Platform
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Developed a real-time poker platform with multiplayer
              functionality and secure payment processing.
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-8 text-primary"
                asChild
              >
                <a href="./" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3 w-3 md:h-4 md:w-4" /> View
                  Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2016 - 2018",
    content: (
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Bachelor&apos;s Degree from UC Berkeley
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Completed my Bachelor of Science in Computer Science with a focus
              on Software Engineering.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                GPA: 3.8/4.0
              </Badge>
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                Dean&apos;s List
              </Badge>
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                Hackathon Winner
              </Badge>
            </div>
          </div>

          <div className="h-px w-full bg-border/40"></div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              First Steps in Development
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Started my journey in software development, learning the
              fundamentals of programming and building my first web
              applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "Python", "HTML/CSS", "React"].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-xs bg-primary/5 border-primary/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12 md:space-y-16 pb-12">
      {/* Particle Background */}
      <DynamicParticleBackground />

      {/* Hero Section */}
      <section className="relative z-10 py-6">
        {/* Background grid pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Glowing orb effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 md:w-96 md:h-96 bg-primary/20 rounded-full blur-3xl opacity-20"></div>

        <div className="relative space-y-4 md:space-y-6 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none text-xs md:text-sm">
              About Me
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              The story behind{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                my journey
              </span>
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-muted-foreground max-w-2xl">
              I&apos;m a passionate developer with expertise in building modern
              applications across various platforms and technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 md:gap-3"
          >
            <Button
              size="sm"
              className="text-xs md:text-sm bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              Download Resume{" "}
              <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs md:text-sm border-primary/20 bg-primary/5 hover:bg-primary/10"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">Bio</h2>
        </ScrollReveal>

        <ScrollReveal width="100%">
          <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border/40 relative">
                  <Image
                    src="/profile/icon.jpeg"
                    alt="Zyron"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 space-y-4">
                <p className="text-muted-foreground">
                  I&apos;m a full-stack software engineer with over five years
                  of experience crafting modern, high-performing applications.
                  My passion for technology ignited during my undergraduate
                  studies at the University of Hong Kong, where I found joy in
                  solving complex challenges through innovative solutions.
                </p>
                <p className="text-muted-foreground">
                  My final year project, centered on AI and blockchain, marked
                  the start of my professional journey. After graduating, I
                  chose to dive straight into a small startup rather than being
                  a small cog in a large company. This decision allowed me to
                  develop a well-rounded skill set early on, and I later worked
                  with leading firms like Tiny Trade, NovaX, and BullB Tech
                  Limited, building scalable systems that serve hundreds of
                  thousands of daily users.
                </p>
                <p className="text-muted-foreground">
                  My expertise spans frontend and backend development, with a
                  deep interest in blockchain technology and artificial
                  intelligence. I thrive on designing seamless user experiences
                  supported by clean, efficient, and robust code.
                </p>
                <p className="text-muted-foreground">
                  When I&apos;m not immersed in code, I&apos;m exploring
                  emerging technologies, experimenting with new programming
                  languages, or collaborating with peers to share insights and
                  knowledge.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">
                      5+
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Years Experience
                    </span>
                  </div>
                  <div className="w-px h-12 bg-border/40"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">
                      10+
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Projects Completed
                    </span>
                  </div>
                  <div className="w-px h-12 bg-border/40"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">
                      10+
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Technologies Mastered
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Timeline Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Career Timeline
          </h2>
        </ScrollReveal>

        <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden">
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Education
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {education.map((edu, index) => (
            <ScrollReveal
              key={edu.institution}
              width="100%"
              delay={index * 0.1}
            >
              <RevealCard color="#0f1729" radius={400} className="h-full">
                <div className="relative flex flex-1 flex-col justify-between gap-3 h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                      <GraduationCap className="h-4 w-4" />
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                    >
                      {edu.duration}
                    </Badge>
                  </div>
                  <div className="space-y-0 flex-grow flex flex-col h-full">
                    <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground mb-2">
                      {edu.institution}
                    </h3>
                    <h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-foreground">
                      {edu.degree}
                    </h2>
                    <p className="font-sans text-sm text-muted-foreground mb-2">
                      {edu.specialization}
                    </p>
                    <div className="flex-grow">
                      <p className="text-xs text-muted-foreground mb-2">
                        {edu.location}
                      </p>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-xs flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-muted-foreground">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Work Experience
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {experience.map((exp, index) => (
            <ScrollReveal key={exp.company} width="100%" delay={index * 0.1}>
              <RevealCard color="#0f1729" radius={400} className="h-full">
                <div className="relative flex flex-1 flex-col justify-between gap-3 h-full">
                  <div className="flex items-center justify-between">
                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {exp.duration}
                    </Badge>
                  </div>
                  <div className="space-y-0 flex-grow flex flex-col h-full">
                    <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground mb-2">
                      {exp.company}
                    </h3>
                    <h2 className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-foreground mb-1">
                      {exp.position}
                    </h2>
                    <p className="text-xs text-muted-foreground mb-3">
                      {exp.location}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground flex-grow">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 md:gap-2 pt-3 mt-auto">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs bg-primary/5 border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <div className="flex items-center justify-between">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              Featured Projects
            </h2>
            <Button
              variant="ghost"
              size="sm"
              className="text-xs md:text-sm text-primary"
            >
              View All{" "}
              <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.slice(0, 2).map((project, index) => (
            <ScrollReveal key={project.title} width="100%" delay={index * 0.1}>
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
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Skills & Expertise
          </h2>
        </ScrollReveal>

        <ScrollReveal width="100%">
          <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg border-[0.75px] border-border bg-muted flex items-center justify-center">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Frontend</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "React Native",
                    "Vue.js",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg border-[0.75px] border-border bg-muted flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Backend</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Node.js",
                    "Python",
                    "Go",
                    "Java",
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg border-[0.75px] border-border bg-muted flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Other</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "AWS",
                    "GCP",
                    "Docker",
                    "Kubernetes",
                    "CI/CD",
                    "Blockchain",
                    "TensorFlow",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Call to Action */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Interested in working together?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              I&apos;m always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
