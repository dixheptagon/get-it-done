import type { Metadata } from "next";
import "../styles/globals.css";
import { hankenGrotesk, inter, jetBrainsMono } from "@/lib/font";
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Get It Done - Todo App",
  description:
    "A modern, responsive todo application built with Next.js and React. Stay productive with intuitive task management, progress tracking, and time logging features.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        hankenGrotesk.className,
        jetBrainsMono.variable,
        hankenGrotesk.variable,
        inter.variable,
        "font-mono",
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
