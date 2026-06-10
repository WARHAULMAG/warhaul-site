import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WARHAUL Studio",
  description:
    "WARHAUL is a Toronto creative studio for photo, audio, DJ, events, radio, and multimedia production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}