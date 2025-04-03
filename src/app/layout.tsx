import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import RightPanel from "@/components/RightPanel";
import { SidebarProvider } from "@/components/ui/sidebar";

// You can replace this with your actual font if different
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Zyron | Portfolio",
  description: "Full-Stack Developer specializing in modern web applications",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.locale} className="dark scrollbar-hide">
      <body className={`${roboto.className} antialiased`}>
        <SidebarProvider defaultOpen={true}>
          <div className="grid grid-cols-8 md:grid-cols-12 gap-4 min-h-screen">
            {/* Left Sidebar - Visible on all screens, responsive layout */}
            <div className="col-span-8 md:col-span-2 md:py-6 md:h-screen md:overflow-y-auto md:sticky md:top-0 md:border-r md:border-gray-900 scrollbar-hide">
              <SideBar />
            </div>

            {/* Main Content */}
            <main className="col-span-8 md:col-span-7 px-4 md:py-6 overflow-y-auto scrollbar-hide">
              {children}
            </main>

            {/* Right Panel - Hidden on mobile and medium screens, visible on large screens */}
            <div className="hidden md:block md:col-span-3 py-6 h-screen overflow-y-auto border-l border-gray-900 sticky top-0 scrollbar-hide">
              <RightPanel />
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
