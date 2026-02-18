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
  title: "FÖRGE Jiu Jitsu | Academia de BJJ en San Juan, Puerto Rico",
  description:
    "Academia líder de Jiu Jitsu Brasileño en San Juan, PR. Primera clase GRATIS. Gi, No-Gi, Kids BJJ. 10+ años de experiencia. ¡Forja tu mejor versión!",
  keywords: [
    "jiu jitsu puerto rico", "bjj san juan", "jiu jitsu brasileño pr", 
    "artes marciales puerto rico", "academia bjj san juan", "clases jiu jitsu",
    "no gi puerto rico", "kids bjj", "brazilian jiu jitsu pr", "forge jiu jitsu",
    "gym san juan", "entrenamiento funcional pr", "defensa personal pr"
  ],
  metadataBase: new URL("https://forge-mu-blush.vercel.app"),
  authors: [{ name: "FÖRGE Jiu Jitsu" }],
  creator: "Pulse Digital Studios",
  publisher: "FÖRGE Jiu Jitsu",
  category: "Sports",
  openGraph: {
    title: "FÖRGE Jiu Jitsu | Primera Clase Gratis | San Juan, PR",
    description: "Academia líder de BJJ en San Juan. 500+ estudiantes. Todos los niveles. Primera clase GRATIS.",
    siteName: "FÖRGE Jiu Jitsu",
    locale: "es_PR",
    type: "website",
    url: "https://forge-mu-blush.vercel.app",
    images: [
      {
        url: "https://forge-mu-blush.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FÖRGE Jiu Jitsu - Academia de BJJ en San Juan, Puerto Rico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@forgejiujitsupr",
    creator: "@forgejiujitsupr",
  },
  robots: { 
    index: true, 
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  verification: {
    google: "forge-bjj-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: 'FÖRGE Jiu Jitsu',
                custom_map: {'custom_parameter': 'custom_value'}
              });
              
              // Track form submissions
              function trackFormSubmission(formType) {
                gtag('event', 'form_submit', {
                  'form_type': formType,
                  'page_location': window.location.href
                });
              }
              
              // Track WhatsApp clicks
              function trackWhatsAppClick() {
                gtag('event', 'whatsapp_click', {
                  'event_category': 'engagement',
                  'event_label': 'contact'
                });
              }
            `,
          }}
        />
        
        {/* Facebook Pixel (optional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SportsActivityLocation",
                  "@id": "https://forge-mu-blush.vercel.app/#organization",
                  "name": "FÖRGE Jiu Jitsu",
                  "alternateName": ["FORGE BJJ", "FÖRGE Academy"],
                  "description": "Academia líder de Jiu Jitsu Brasileño en San Juan, Puerto Rico con más de 500 estudiantes",
                  "url": "https://forge-mu-blush.vercel.app",
                  "logo": "https://forge-mu-blush.vercel.app/logo.png",
                  "image": [
                    "https://forge-mu-blush.vercel.app/hero-image.jpg",
                    "https://forge-mu-blush.vercel.app/gym-interior.jpg"
                  ],
                  "telephone": "+1-787-000-0000",
                  "email": "info@forgejiujitsu.com",
                  "sameAs": [
                    "https://www.instagram.com/forgejiujitsupr",
                    "https://wa.me/17870000000"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "San Juan",
                    "addressRegion": "PR",
                    "addressCountry": "US",
                    "postalCode": "00926"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "18.4655",
                    "longitude": "-66.1057"
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "06:00",
                      "closes": "21:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification", 
                      "dayOfWeek": "Saturday", 
                      "opens": "08:00", 
                      "closes": "14:00"
                    }
                  ],
                  "sport": "Brazilian Jiu-Jitsu",
                  "priceRange": "$25-$250",
                  "paymentAccepted": ["Cash", "Credit Card", "ATH Móvil"],
                  "currenciesAccepted": "USD",
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "127",
                    "bestRating": "5"
                  }
                },
                {
                  "@type": "Service",
                  "name": "Clases de Jiu Jitsu Brasileño",
                  "provider": {
                    "@id": "https://forge-mu-blush.vercel.app/#organization"
                  },
                  "serviceType": "Martial Arts Training",
                  "description": "Clases profesionales de BJJ Gi, No-Gi, Kids BJJ y Strength & Conditioning",
                  "offers": {
                    "@type": "Offer",
                    "name": "Primera Clase Gratis",
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Clase de prueba gratuita para nuevos estudiantes"
                  },
                  "areaServed": [
                    {
                      "@type": "City",
                      "name": "San Juan",
                      "containedInPlace": {
                        "@type": "State",
                        "name": "Puerto Rico"
                      }
                    },
                    {
                      "@type": "City", 
                      "name": "Bayamón"
                    },
                    {
                      "@type": "City",
                      "name": "Carolina"
                    }
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://forge-mu-blush.vercel.app/#website",
                  "url": "https://forge-mu-blush.vercel.app",
                  "name": "FÖRGE Jiu Jitsu",
                  "publisher": {
                    "@id": "https://forge-mu-blush.vercel.app/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://forge-mu-blush.vercel.app/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
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
