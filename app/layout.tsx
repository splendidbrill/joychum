import type { Metadata, Viewport } from "next";
import "./globals.css";

const description =
  "A friendly voice coach for adults 65+ that trains balance and memory together — one short session a day, hands-free, at home.";

export const metadata: Metadata = {
  title: "JOYchum: stay steady, stay sharp, stay home",
  description,
  openGraph: {
    type: "website",
    title: "JOYchum: Stay steady. Stay sharp. Stay home.",
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // PageEffects adds the "js" class on mount, hence suppressHydrationWarning.
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
