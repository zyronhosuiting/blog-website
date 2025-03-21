"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Code,
  FileText,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Projects", href: "/projects", icon: Code },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yourusername", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/yourusername", icon: Twitter },
];

export default function SideBar() {
  const [activePath, setActivePath] = useState("/");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button - only visible on small screens */}
      <div className="flex justify-between items-center px-4 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      <Sidebar
        className={cn(
          "transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "block" : "hidden md:block"
        )}
        collapsible="none"
      >
        <SidebarHeader className="flex flex-col items-center justify-center p-6">
          <div className="relative w-16 h-16 md:w-24 md:h-24 mb-4 rounded-full overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
            <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-primary">
              YN
            </div>
            {/* Add your profile image here */}
            {/* <Image src="/profile.jpg" alt="Your Name" fill className="object-cover" /> */}
          </div>
          <h1 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Your Name
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            Full-Stack Developer
          </p>

          <div className="w-full mt-4">
            <div className="h-0.5 w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5"></div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => {
                    setActivePath(item.href);
                    setMobileMenuOpen(false); // Close mobile menu when clicking a link
                  }}
                >
                  <SidebarMenuButton
                    isActive={activePath === item.href}
                    className="relative group"
                  >
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    <span>{item.name}</span>
                    {activePath === item.href && (
                      <motion.div
                        layoutId="sidebar-indicator"
                        className="absolute left-0 top-0 w-1 h-full bg-primary rounded-r-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="mt-auto">
          <div className="w-full mb-4">
            <div className="h-0.5 w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5"></div>
          </div>

          <div className="flex justify-center space-x-4 p-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span className="sr-only">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="px-4 py-2 text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} Your Name
          </div>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
