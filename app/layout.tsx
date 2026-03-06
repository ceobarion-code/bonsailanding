import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bons AI | Workforce Health & Performance Monitoring",
  description:
    "Bons AI helps operations and HR teams monitor workforce health and performance trends using wearable data and analytics.",
  openGraph: {
    title: "Bons AI | Workforce Health & Performance Monitoring",
    description:
      "Proactive wearable-based insights to reduce fatigue risks and support healthier, safer teams.",
    url: "https://bons-ai.example.com",
    siteName: "Bons AI",
    type: "website",
  },
  keywords: [
    "workforce monitoring",
    "wearable analytics",
    "fatigue risk",
    "HR dashboard",
    "occupational health",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
