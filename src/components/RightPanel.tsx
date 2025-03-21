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

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Next.js", level: 88 },
  { name: "Tailwind CSS", level: 92 },
];

const latestActivities = [
  {
    title: "Deployed new project",
    description: "Launched a new web application",
    time: "2 days ago",
    icon: Code,
  },
  {
    title: "Published article",
    description: "How to build modern UIs with React",
    time: "1 week ago",
    icon: MessageSquare,
  },
  {
    title: "Contributed to open source",
    description: "Fixed a bug in a popular library",
    time: "2 weeks ago",
    icon: Github,
  },
];

export default function RightPanel() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useState(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  });

  return (
    <div className="px-2 md:px-4 space-y-4 md:space-y-6">
      {/* Status Card */}
      <Card className="border border-border/40 bg-card/30 backdrop-blur-sm">
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
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="px-3 md:px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
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

      {/* Skills */}
      <Card className="border border-border/40 bg-card/30 backdrop-blur-sm">
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
                indicatorClassName="bg-gradient-to-r from-primary to-secondary"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Latest Activity */}
      <Card className="border border-border/40 bg-card/30 backdrop-blur-sm">
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
              <div className="mt-0.5 bg-primary/10 p-1 md:p-1.5 rounded-md text-primary">
                <activity.icon className="h-3 w-3 md:h-4 md:w-4" />
              </div>
              <div className="space-y-0.5 md:space-y-1">
                <p className="text-xs md:text-sm font-medium">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.description}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="border border-primary/20 bg-primary/5 backdrop-blur-sm">
        <CardContent className="p-3 md:p-4">
          <div className="text-center space-y-2 md:space-y-3">
            <h3 className="text-xs md:text-sm font-medium">
              Interested in working together?
            </h3>
            <Button className="w-full text-xs md:text-sm py-1 md:py-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Get in Touch{" "}
              <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
