"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Code,
  Coffee,
  Cpu,
  ExternalLink,
  MessageSquare,
  Terminal,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ui/scroll-reveal";

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "Python", level: 92 },
  { name: "Go", level: 85 },
];

const latestActivities = [
  {
    title: "Commit to a new project",
    description: "Added new features to the project",
    time: "1 hr ago",
    icon: Code,
  },
  {
    title: "Published article",
    description: "How to build auto workflow via n8n",
    time: "2 day ago",
    icon: MessageSquare,
  },
  {
    title: "Deployed new project",
    description: "Launched a new application",
    time: "2 weeks ago",
    icon: Github,
  },
];

export default function RightPanel({ className }: { className?: string }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useState(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  });

  return (
    <div
      className={cn("px-2 md:px-4 space-y-4 md:space-y-6 w-full", className)}
    >
      {/* Status Card */}
      <ScrollReveal width="100%">
        <Card className="border border-border/40 bg-card/30 backdrop-blur-xs w-full mt-4 md:mt-0 hover:bg-card/40 transition-colors shadow-sm hover:shadow-md">
          <CardHeader className="pb-2 px-3 md:px-6">
            <CardTitle className="text-xs md:text-sm font-medium flex items-center">
              <div className="flex items-center">
                <span className="relative flex h-2 md:h-3 w-2 md:w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 md:h-3 w-2 md:w-3 bg-green-500"></span>
                </span>
                Currently Available
              </div>
              <div className="ml-auto flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {currentTime.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="px-3 py-2 md:pb-6 md:px-6">
            <div className="flex flex-row md:items-center justify-between gap-2 md:gap-0">
              <Badge
                variant="outline"
                className="bg-primary/10 text-primary border-primary/20 text-xs w-fit"
              >
                <Coffee className="h-3 w-3 mr-1" /> Open to Work
              </Badge>
              <Badge
                variant="outline"
                className="bg-secondary/10 text-secondary border-secondary/20 text-xs w-fit"
              >
                <Calendar className="h-3 w-3 mr-1" /> Available{" "}
                {new Date().toLocaleDateString([], {
                  month: "short",
                  year: "numeric",
                })}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* Skills */}
      <ScrollReveal width="100%">
        <Card className="border border-border/40 bg-card/30 backdrop-blur-xs hover:bg-card/40 transition-colors shadow-sm hover:shadow-md">
          <CardHeader className="pb-2 px-3 md:px-6">
            <CardTitle className="text-xs md:text-sm font-medium flex items-center">
              <Cpu className="h-3 md:h-4 w-3 md:w-4 mr-2 text-primary" />
              Skills & Expertise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-4 px-3 md:px-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span>{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress
                  value={skill.level}
                  className="h-1 md:h-1.5 bg-primary/10"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* Latest Activity */}
      <ScrollReveal width="100%">
        <Card className="border border-border/40 bg-card/30 backdrop-blur-xs hover:bg-card/40 transition-colors shadow-sm hover:shadow-md">
          <CardHeader className="pb-2 px-3 md:px-6">
            <CardTitle className="text-xs md:text-sm font-medium flex items-center">
              <Terminal className="h-3 md:h-4 w-3 md:w-4 mr-2 text-primary" />
              Latest Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-4 px-3 md:px-6">
            {latestActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-2 md:space-x-3"
              >
                <div className="mt-0.5 bg-primary/10 p-1 md:p-1.5 rounded-md text-primary hover:bg-primary/20 transition-colors">
                  <activity.icon className="h-3 w-3 md:h-4 md:w-4" />
                </div>
                <div className="space-y-0.5 md:space-y-1">
                  <p className="text-xs md:text-sm font-medium">
                    {activity.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* Call to Action */}
      <ScrollReveal width="100%">
        <Card className="border border-primary/20 bg-primary/5 backdrop-blur-xs hover:bg-primary/10 transition-colors shadow-sm hover:shadow-md">
          <CardContent className="p-3 md:p-4">
            <div className="text-center space-y-2 md:space-y-3">
              <h3 className="text-xs md:text-sm font-medium">
                Interested in working together?
              </h3>
              <Button className="w-full text-xs md:text-sm py-1 md:py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:shadow-lg">
                Get in Touch{" "}
                <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-0.5 transition-transform" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  );
}
