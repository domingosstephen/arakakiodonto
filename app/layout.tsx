import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arakakiodonto.com.br"),
  title: {
    default: "Arakaki Odonto | Implantes Dentários e HOF em São Paulo",
    template: "%s | Arakaki Odonto",
  },
  description:
    "Clínica especializada em Implantes Dentários e Harmonização Orofacial em São Paulo. Dra. Jéssica Arakaki, CRO 59293. Agende sua avaliação via WhatsApp.",
  keywords: [
    "implantes dentários",
    "harmonização orofacial",
    "HOF",
    "clínica odontológica",
    "Dra Jéssica Arakaki",
    "dentista São Paulo",
    "prótese dentária",
    "clareamento dental",
    "CRO 59293",
  ],
  authors: [{ name: "Dra. Jéssica Arakaki" }],
  creator: "Arakaki Odonto",
  publisher: "Arakaki Odonto",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://arakakiodonto.com.br",
    siteName: "Arakaki Odonto",
    title: "Arakaki Odonto | Implantes Dentários e HOF",
    description:
      "Transforme seu sorriso com especialistas em Implantes Dentários e Harmonização Orofacial. Dra. Jéssica Arakaki, CRO 59293.",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Arakaki Odonto — Clínica de Implantes e HOF",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arakaki Odonto | Implantes e HOF",
    description:
      "Especialistas em Implantes Dentários e Harmonização Orofacial. Dra. Jéssica Arakaki, CRO 59293.",
    images: ["/images/og-home.jpg"],
  },
  alternates: {
    canonical: "https://arakakiodonto.com.br",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://arakakiodonto.com.br/#organization",
      name: "Arakaki Odonto",
      url: "https://arakakiodonto.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://arakakiodonto.com.br/logo.svg",
        width: 200,
        height: 60,
      },
      image: "https://arakakiodonto.com.br/images/clinica.webp",
      description:
        "Clínica odontológica especializada em Implantes Dentários e Harmonização Orofacial (HOF), dirigida pela Dra. Jéssica Arakaki, CRO 59293.",
      address: {
        "@type": "PostalAddress",
        addressCountry: "BR",
        addressLocality: "São Paulo",
        addressRegion: "SP",
      },
      telephone: "+5511999999999",
      sameAs: [
        "https://www.instagram.com/arakakiodonto",
      ],
      medicalSpecialty: [
        "Implantodontia",
        "Harmonização Orofacial",
        "Odontologia Estética",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Serviços Odontológicos",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Implantes Dentários",
              description:
                "Reabilitação oral completa com implantes de titânio. Devolvemos função mastigatória e estética para sorrisos totais.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Harmonização Orofacial (HOF)",
              description:
                "Procedimentos estéticos faciais minimamente invasivos que harmonizam o rosto com o sorriso.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: "Clareamento Dental",
              description:
                "Clareamento dental profissional com tecnologia de ponta para um sorriso mais claro e natural.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://arakakiodonto.com.br/#dentist",
      name: "Jéssica Arakaki",
      honorificPrefix: "Dra.",
      jobTitle: "Cirurgiã Dentista",
      identifier: "CRO 59293",
      worksFor: { "@id": "https://arakakiodonto.com.br/#organization" },
      knowsAbout: [
        "Implantodontia",
        "Harmonização Orofacial",
        "Odontologia Estética",
        "Prótese Dentária",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://arakakiodonto.com.br/#website",
      url: "https://arakakiodonto.com.br",
      name: "Arakaki Odonto",
      publisher: { "@id": "https://arakakiodonto.com.br/#organization" },
      inLanguage: "pt-BR",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${dmSans.variable} ${dancingScript.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preload" as="video" href="/video/hero.mp4" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
