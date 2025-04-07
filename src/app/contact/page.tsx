"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Send,
  Github,
  Linkedin,
  //   Mail,
  //   MessageSquare,
  //   MapPin,
  //   Phone,
  //   Copy,
  //   Check,
  //   ExternalLink,
  //   Loader2,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { RevealCard } from "@/components/ui/reveal-card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
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

// Social media links
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/zyronhosuiting",
    username: "zyronhosuiting",
    color: "group-hover:text-white group-hover:bg-[#171515]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sui-ting-ho-761267211/",
    username: "Ho Sui Ting",
    color: "group-hover:text-white group-hover:bg-[#0077B5]",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    url: "https://x.com/zyron1oT",
    username: "zyron1oT",
    color: "group-hover:text-white group-hover:bg-[#1DA1F2]",
  },
  {
    name: "Telegram",
    icon: Send,
    url: "https://t.me/zyron1oT_SNS",
    username: "zyron1oT_SNS",
    color: "group-hover:text-white group-hover:bg-[#0088cc]",
  },
];

// Contact information
// const contactInfo = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "hello@yourname.com",
//     action: "Copy",
//     actionIcon: Copy,
//     actionSuccessIcon: Check,
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+1 (555) 123-4567",
//     action: "Copy",
//     actionIcon: Copy,
//     actionSuccessIcon: Check,
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: "San Francisco, CA",
//     action: "View",
//     actionIcon: ExternalLink,
//     url: "https://maps.google.com",
//   },
// ];

export default function ContactPage() {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  //   const [isSubmitting, setIsSubmitting] = useState(false);
  //   const [copiedField, setCopiedField] = useState<string | null>(null);

  // Handle form input changes
  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     const { name, value } = e.target;
  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  // Handle form submission
  //   const handleSubmit = async (e: React.FormEvent) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);

  //     // Simulate form submission
  //     await new Promise((resolve) => setTimeout(resolve, 1500));

  //     // Reset form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //     setIsSubmitting(false);
  //   };

  // Handle copying to clipboard
  //   const handleCopy = (text: string, field: string) => {
  //     navigator.clipboard.writeText(text);
  //     setCopiedField(field);

  //     // Reset copied state after 2 seconds
  //     setTimeout(() => {
  //       setCopiedField(null);
  //     }, 2000);
  //   };

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
              Contact
            </Badge>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Let&apos;s{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Connect
              </span>
            </h1>
            <p className="text-sm md:text-base lg:text-xl text-muted-foreground max-w-2xl">
              Have a project in mind or just want to chat? I&apos;m always open
              to new opportunities and collaborations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Connect with Me
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {socialLinks.map((social, index) => (
            <ScrollReveal key={social.name} width="100%" delay={index * 0.1}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div
                  className={`group h-full overflow-hidden rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 ${social.color}`}
                >
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-background/50 border border-border/40 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-transparent group-hover:border-white/20">
                      <social.icon className="w-6 h-6 transition-all duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold mb-1 transition-all duration-300">
                      {social.name}
                    </h3>
                    <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-white/80">
                      {social.username}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="text-xs font-medium transition-all duration-300 group-hover:text-white/80">
                        View Profile{" "}
                        <ArrowRight className="inline-block ml-1 h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Contact Form and Info Section */}
      {/* <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Get in Touch
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6">
          <ScrollReveal width="100%">
            <RevealCard color="#0f1729" radius={400} className="h-full">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mr-4">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Send a Message</h3>
                    <p className="text-sm text-muted-foreground">
                      I&apos;ll get back to you as soon as possible
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Zyron Ho"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/40"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/40"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-background/50 border-border/40"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </RevealCard>
          </ScrollReveal>
          <ScrollReveal width="100%">
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <RevealCard
                  key={info.label}
                  color="#0f1729"
                  radius={400}
                  className="h-auto"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mr-4">
                          <info.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-muted-foreground">
                            {info.label}
                          </h3>
                          <p className="text-base font-medium">{info.value}</p>
                        </div>
                      </div>
                      {info.url ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs h-8 text-primary"
                          asChild
                        >
                          <a
                            href={info.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <info.actionIcon className="mr-1.5 h-3 w-3 md:h-4 md:w-4" />{" "}
                            {info.action}
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-xs h-8 text-primary"
                          onClick={() => handleCopy(info.value, info.label)}
                        >
                          {copiedField === info.label ? (
                            <>
                              <Check className="mr-1.5 h-3 w-3 md:h-4 md:w-4" />{" "}
                              Copied!
                            </>
                          ) : (
                            <>
                              <info.actionIcon className="mr-1.5 h-3 w-3 md:h-4 md:w-4" />{" "}
                              {info.action}
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </RevealCard>
              ))}

              <RevealCard color="#0f1729" radius={400} className="h-auto">
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-border/40 bg-card/30">
                  <div className="h-full w-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center text-muted-foreground">
                    Map Location
                  </div>
                </div>
              </RevealCard>
            </div>
          </ScrollReveal>
        </div>
      </section>*/}

      {/* FAQ Section */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            {
              question: "What services do you offer?",
              answer:
                "I specialize in full-stack development, focusing on modern web applications using React, Next.js, Node.js, and other cutting-edge technologies.",
            },
            {
              question: "What is your typical project timeline?",
              answer:
                "Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months or more.",
            },
            {
              question: "Do you offer maintenance services?",
              answer:
                "Yes, I offer ongoing maintenance and support services to ensure your application remains up-to-date and secure after launch.",
            },
            {
              question: "How do you handle project communication?",
              answer:
                "I maintain regular communication through your preferred channels (email, Slack, etc.) with weekly updates and milestone reviews.",
            },
          ].map((faq, index) => (
            <ScrollReveal key={index} width="100%" delay={index * 0.1}>
              <RevealCard color="#0f1729" radius={400} className="h-full">
                <div className="p-6 z-10">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </RevealCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="space-y-4 md:space-y-6">
        <ScrollReveal width="100%">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-primary/20 rounded-xl p-8 md:p-10 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Ready to Start a Project?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Let&apos;s collaborate to bring your ideas to life. Whether you
              have a specific project in mind or just want to explore
              possibilities, I&apos;m here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/coming-soon">
                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                  Schedule a Call <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/coming-soon">
                <Button
                  variant="outline"
                  className="border-primary/20 bg-primary/5 hover:bg-primary/10"
                >
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
