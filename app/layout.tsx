import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/styles/globals.css";
import { StackedLayout } from "@/components/layout";

const ralewaySans = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FOSO Blog",
  description: "This is FOSO's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ralewaySans.className}  antialiased`}>
        <StackedLayout>{children}</StackedLayout>
      </body>
    </html>
  );
}
