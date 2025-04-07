"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  User,
  // Briefcase,
  // Code,
  // FileText,
  Mail,
  Github,
  Linkedin,
  // Twitter,
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
import Image from "next/image";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import RightPanel from "./RightPanel";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  // { name: "Projects", href: "/projects", icon: Code },
  // { name: "Experience", href: "/experience", icon: Briefcase },
  // { name: "Article", href: "/article", icon: FileText },
  { name: "Contact", href: "/contact", icon: Mail },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/zyronhosuiting", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sui-ting-ho-761267211/",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/zyron1oT",
    icon: FaXTwitter,
  },
];

export default function SideBar() {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);

  // Close mobile menu when clicking outside
  const handleClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      !target.closest('[data-sidebar="true"]') &&
      !target.closest('[data-sidebar-trigger="true"]')
    ) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className="hidden md:block w-full border-r border-gray-900 sticky top-0 overflow-y-auto"
        data-sidebar="true"
      >
        <Sidebar
          className={cn(
            "transition-all duration-300 ease-in-out h-full px-2 md:px-4",
            mobileMenuOpen ? "block" : "hidden md:block"
          )}
          collapsible="none"
        >
          <SidebarHeader className="flex flex-col items-center justify-center p-4 md:p-6">
            <div className="relative w-16 h-16 md:w-24 md:h-24 mb-4 rounded-full overflow-hidden border-2 border-primary/20 bg-linear-to-br from-primary/10 to-secondary/10">
              <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-primary">
                Zyron Ho
              </div>
              <Image
                src="/profile/icon.jpeg"
                alt="Zyron"
                fill
                className="object-cover"
              />
            </div>
            <h1 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
              Zyron
            </h1>
            <div className="w-full relative">
              <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[3px] blur-sm" />
              <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[1px]" />
              <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[6px] blur-sm" />
              <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[1px]" />
            </div>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              Application Architect
            </p>

            <div className="w-full mt-4">
              <div className="h-0.5 w-full bg-linear-to-r from-primary/5 via-primary/20 to-primary/5"></div>
            </div>
          </SidebarHeader>

          <SidebarContent className="flex-1 overflow-y-auto">
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

          <SidebarFooter className="mt-auto border-t border-border/40">
            <div className="w-full mb-4">
              <div className="h-0.5 w-full bg-linear-to-r from-primary/5 via-primary/20 to-primary/5"></div>
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
              © {new Date().getFullYear()} Zyron Ho
            </div>
          </SidebarFooter>
        </Sidebar>
      </div>
      <div className="md:hidden">
        {/* Mobile Header */}
        <div className="fixed top-0 left-0 right-0 z-30 flex justify-between items-center px-4 py-3 bg-background/80 backdrop-blur-md border-b border-gray-900">
          <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Ho Sui Ting
          </div>
          <div className="flex items-center gap-2">
            {/* Stats Button */}
            <Button
              variant="outline"
              size="sm"
              className="text-xs"
              onClick={() => setStatsOpen(true)}
            >
              Stats
            </Button>

            {/* Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-sidebar-trigger="true"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
              onClick={handleClickOutside}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <motion.div
          data-sidebar="true"
          initial={{ x: "-100%" }}
          animate={{ x: mobileMenuOpen ? 0 : "-100%" }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed top-0 left-0 z-30 w-64 h-full bg-background border-r border-gray-900 pt-16 pb-4 overflow-y-auto"
        >
          <div className="flex flex-col h-full">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden border-2 border-primary/20 bg-linear-to-br from-primary/10 to-secondary/10">
                <div className="absolute inset-0 flex items-center justify-center text-xl md:text-2xl font-bold text-primary">
                  Zyron Ho
                </div>
                <Image
                  src="/profile/icon.jpeg"
                  alt="Zyron"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                Zyron
              </h1>
              <div className="w-full relative">
                <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[3px] blur-sm" />
                <div className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[1px]" />
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[6px] blur-sm" />
                <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-secondary to-transparent h-[1px]" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Application Architect
              </p>
            </div>

            <div className="flex-1 px-2">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setActivePath(item.href);
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        "flex items-center px-3 py-2 rounded-md text-sm",
                        activePath === item.href
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-accent"
                      )}
                    >
                      <item.icon className="w-4 h-4 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto px-4">
              <div className="h-0.5 w-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5 mb-4"></div>
              <div className="flex justify-center space-x-4 p-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
              <div className="text-xs text-center text-muted-foreground">
                © {new Date().getFullYear()} Zyron Ho
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Stats Panel */}
        <Sheet open={statsOpen} onOpenChange={setStatsOpen}>
          <SheetContent side="right" className="w-[85%] sm:w-[350px] p-0">
            <SheetHeader className="sr-only">
              <SheetTitle>Stats Panel</SheetTitle>
            </SheetHeader>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: 0.3,
              }}
            >
              <RightPanel className="h-full overflow-y-auto py-6" />
            </motion.div>
          </SheetContent>
        </Sheet>

        {/* Spacer for fixed header */}
        <div className="h-12"></div>
      </div>
    </>
  );
}
