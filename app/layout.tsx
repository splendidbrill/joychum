import type { Metadata } from "next";
import PrintPlates from "./components/PrintPlates";
import "./globals.css";

export const metadata: Metadata = {
  title: "JoyCare Club — steady body, sharp mind, independent life",
  description:
    "JoyCare Club trains body and mind together — the way real life asks for them — so older adults can keep living independently, at home, on their own terms.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PrintPlates />
        {children}
      </body>
    </html>
  );
}
