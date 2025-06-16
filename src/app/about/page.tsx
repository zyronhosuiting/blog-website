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
import Link from "next/link";

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
    title: "Cryptopai",
    description:
      "A crypto media platform delivering real-time news and insights",
    tags: ["React", "Tailwind CSS"],
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
    tags: ["React Native", "Python", "Express", "MySQL"],
    demo: "https://www.talkapp.org/",
    stars: 56,
    status: "Completed",
    date: "October 2023",
  },
];

const education = [
  {
    institution: "University of Hong Kong",
    degree: "Bachelor of Science in Computer Science",
    specialization: "Artificial Intelligence & Blockchain",
    duration: "2018 - 2022",
    location: "Hong Kong",
    achievements: ["GPA: 3.63/4.0", "First Class Honours", "Scholarship"],
  },
  {
    institution: "SKH TSK Secondary School ",
    degree: "HKDSE",
    specialization: "29",
    duration: "2012 - 2018",
    location: "Hong Kong",
    achievements: ["Chief of House", "Prefect", "Scout Leader"],
  },
];

const experience = [
  {
    company: "Sovereign Well Limited",
    position: "Application Architect",
    duration: "2024 - 2025",
    location: "England | Remote",
    description:
      "Led the design and implementation of a high-performance crypto exchange platform, ensuring seamless trading and robust system performance.",
    technologies: ["React", "Rust", "AWS", "PostgreSQL"],
  },
  {
    company: "BullB Tech Limited",
    position: "Software Engineer",
    duration: "2022 - 2024",
    location: "Hong Kong",
    description:
      "Developed and optimized scalable backend systems to handle high-transaction workloads, ensuring robust performance under heavy demand.",
    technologies: ["Golang", "Nodejs", "Python", "React", "Kotlin"],
  },
  {
    company: "AI Talk Limited",
    position: "Full Stack Developer",
    duration: "2021 - 2022",
    location: "Hong Kong",
    description:
      "Internship at AI Talk IT Limited, where I was responsible for developing and maintaining the company's website and internal systems.",
    technologies: ["JavaScript", "Python", "React", "L2D"],
  },
  {
    company: "HK Caritas",
    position: "Part-Time Developer",
    duration: "2018 - 2021",
    location: "Hong Kong",
    description:
      "Developed and maintained the company's website and internal systems.",
    technologies: ["Java", "Python"],
  },
];

const timelineData = [
  {
    title: "Present - 2025",
    content: (
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Co-Founder at Cryptopai
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
          {["AWS", "Blockchain", "Python", "tRPC"].map((tech) => (
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
    title: "2025 - 2024",
    content: (
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Application Architect
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Overseeing the design and implementation of robust, scalable
              software systems tailored to business needs. Collaborating with
              cross-functional teams to define technical strategies, optimize
              performance, and ensure seamless integration of cutting-edge
              technologies like AI and blockchain in dynamic, high-traffic
              environments.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Rust", "AWS", "React", "PostgreSQL"].map((tech) => (
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

          <div className="grid grid-cols-2 gap-2 mb-4">
            <Image
              src="/project/mentoroo.png"
              alt="mentoroo"
              width={500}
              height={500}
              className="object-cover"
            />
            <Image
              src="/project/nvxc.png"
              alt="nvxc"
              width={500}
              height={500}
              className="object-cover"
            />
            <Image
              src="/project/gamex.png"
              alt="gamex"
              width={500}
              height={500}
              className="object-cover"
            />
            <Image
              src="/project/letsdegen.png"
              alt="letsdegen"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2024 - 2022",
    content: (
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Software Engineer at BullB Tech Limited
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Built and optimized scalable backend systems to handle
              high-transaction workloads, ensuring robust performance under
              heavy demand. Leveraged parallel computing techniques to enhance
              processing efficiency and implemented real-time data pipelines to
              deliver seamless, low-latency experiences for users across
              dynamic, large-scale applications.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {["Golang", "Nodejs", "Python", "React", "Kotlin"].map((tech) => (
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

          <div className="grid grid-cols-2 gap-2 mb-4">
            <Image
              src="/project/novax.png"
              alt="novax"
              width={500}
              height={500}
              className="object-cover"
            />
            <Image
              src="/project/mobile.jpg"
              alt="mobile"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>

          <div className="h-px w-full bg-border/40"></div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Bachelor&apos;s Degree from University of Hong Kong
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Completed my Bachelor of Science in Computer Science.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                GPA: 3.63/4.0
              </Badge>
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                First Class Honours
              </Badge>
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                Minor in Information Systems
              </Badge>
            </div>
          </div>

          <div className="h-px w-full bg-border/40"></div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Final Year Project: Zero-Knowledge Proofs Application
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Developed a zero-knowledge proof application using zk-SNARKs and
              node.js.
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-xs h-8 text-primary"
                asChild
              >
                <a
                  href="https://wp.cs.hku.hk/2021/fyp21025/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
    title: "2022 - 2018",
    content: (
      <div className="bg-card/30 backdrop-blur-sm border border-border/40 rounded-xl p-6">
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Journey at University of Hong Kong
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Completed my Bachelor of Science in Computer Science with a focus
              on AI & Blockchain technologies. This is where my passion for
              cutting-edge technology began.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="outline"
                className="text-xs bg-secondary/10 text-secondary border-secondary/20"
              >
                Scholarship
              </Badge>
            </div>

            {/* Key Courses Section */}
            <h4 className="text-sm font-medium text-foreground mt-4 mb-2">
              Key Courses
            </h4>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {[
                "Artificial Intelligence",
                "Advanced Algorithms",
                "Blockchain Technology",
                "Machine Learning",
                "Fintech Applications",
                "Business Management",
                "Data Structures",
                "Gaming",
              ].map((course) => (
                <div key={course} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-xs text-muted-foreground">
                    {course}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-border/40"></div>

          {/* Programming Journey Section */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Programming Journey & Discovering Passions
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Started with basic programming courses but quickly became
              fascinated with AI and blockchain technologies. Joined CS clubs
              and special projects that allowed me to explore these fields in
              depth.
            </p>

            {/* 2×2 Image Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <Image
                src="/project/hku.png"
                alt="hku"
                width={500}
                height={500}
                className="object-cover"
              />
              <Image
                src="/project/machine-vision.png"
                alt="machine-vision"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>

            <h4 className="text-sm font-medium text-foreground mt-4 mb-2">
              Key Projects
            </h4>
            <div className="space-y-2">
              <div className="flex flex-col">
                <span className="text-xs font-medium">AI-Object Detection</span>
                <span className="text-xs text-muted-foreground">
                  AI project for object detection using YOLOv5
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium">
                  Unity Game Development
                </span>
                <span className="text-xs text-muted-foreground">
                  Developed a Unity game using C#
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {["JavaScript", "Python", "TensorFlow", "Unity", "C#", "C++"].map(
                (tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs bg-primary/5 border-primary/20"
                  >
                    {tech}
                  </Badge>
                )
              )}
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
            <Link href="/coming-soon">
              <Button
                size="sm"
                className="text-xs md:text-sm bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                Download Resume{" "}
                <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="sm"
                variant="outline"
                className="text-xs md:text-sm border-primary/20 bg-primary/5 hover:bg-primary/10"
              >
                Contact Me
              </Button>
            </Link>
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
                    "Shadcn UI",
                    "Tailwind CSS",
                    "React Native",
                    "Tanstack Query",
                    "Zustand",
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
                    "Kafka",
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
                    "Cloudflare",
                    "Docker",
                    "AI tools",
                    "CI/CD",
                    "Blockchain",
                    "Solidity",
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
            <Button
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
