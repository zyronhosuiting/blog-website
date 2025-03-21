import type React from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/side-bar";
import RightPanel from "@/components/right-panel";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";

// You can replace this with your actual font if different
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Your Name | Developer Portfolio",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SidebarProvider defaultOpen={true}>
            <div className="grid grid-cols-8 xl:grid-cols-12 gap-4">
              {/* Left Sidebar */}
              <div className="col-span-2 xl:col-span-2 min-h-screen max-h-screen py-6 border-r border-gray-900 sticky top-0">
                <SideBar />
              </div>

              {/* Main Content */}
              <div className="col-span-6 xl:col-span-7 px-4 overflow-y-auto scrollbar-hide py-6">
                {children}
              </div>

              {/* Right Panel */}
              <div className="col-span-3 xl:col-span-3 min-h-screen max-h-screen overflow-y-auto scrollbar-hide py-6 border-l border-gray-900 sticky top-0">
                <RightPanel />
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
