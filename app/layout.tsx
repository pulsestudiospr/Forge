import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "FÖRGE Jiu Jitsu & Performance Club | San Juan, Puerto Rico",
  description:
    "Academia de Jiu Jitsu y entrenamiento funcional en San Juan, PR. Clase de prueba gratis. Todos los niveles bienvenidos. Abriendo 2026.",
  keywords: ["jiu jitsu puerto rico", "jiu jitsu san juan", "BJJ puerto rico", "artes marciales san juan", "gym hato rey"],
  metadataBase: new URL("https://forge-jiujitsu.vercel.app"),
  openGraph: {
    title: "FÖRGE Jiu Jitsu & Performance Club",
    description: "Jiu Jitsu y entrenamiento funcional en San Juan, PR. Clase gratis.",
    siteName: "FÖRGE Jiu Jitsu",
    locale: "es_PR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "FÖRGE Jiu Jitsu & Performance Club",
              "description": "Academia de Jiu Jitsu Brasileño y entrenamiento funcional",
              "url": "https://forge-jiujitsu.vercel.app",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "San Juan",
                "addressRegion": "PR",
                "addressCountry": "US"
              },
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "06:00", "closes": "21:00" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "14:00" }
              ],
              "sport": "Brazilian Jiu-Jitsu",
              "sameAs": ["https://www.instagram.com/forgejiujitsupr"]
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} antialiased bg-[#0a0a0a] text-white`}>
        {children}
      </body>
    </html>
  );
}
