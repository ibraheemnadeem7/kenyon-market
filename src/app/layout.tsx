import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenyon Market",
  description: "A move-out marketplace for Kenyon students.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
