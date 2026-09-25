import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JOYchum — stay steady, stay sharp, stay home",
  description:
    "A voice coach that trains balance and memory together — in one short daily session, hands-free. Cognitive-motor training for 65+.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* The scroll-reveal animations start elements hidden inline, so
            without JS they would never appear. This forces them visible. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
