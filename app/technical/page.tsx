// app/technical/page.tsx
import type { Metadata } from "next";
import TechHomeHero from '@/components/technical/techhomecomponents/TechHomeHero';
import ImpactStats from '@/components/technical/techhomecomponents/ImpactStats';
import TServices from '@/components/technical/techhomecomponents/TServices';
import TWhyChooseUs from '@/components/technical/techhomecomponents/TWhyChooseUs';
import TTestimonials from '@/components/technical/techhomecomponents/TTestimonials';
import CTAHero from '@/components/technical/techhomecomponents/CTAHero';
import FAQSection from '@/components/technical/techhomecomponents/FAQSection';
import ContactSection from '@/components/technical/techhomecomponents/TContactSection';
import TechFooter from '@/components/technical/TechCommonComponents/TechFooter';
import DesignShowcase from "@/components/technical/techhomecomponents/DesignShowcase";

export const metadata: Metadata = {
  title: "Technical Solutions | AI, Automation & Analytics | The Ladder",
  description: "Enterprise technical solutions including AI assistants, automation, data analytics, and web development to drive business transformation.",
  keywords: [
    "AI assistants",
    "automation solutions",
    "data analytics",
    "data warehousing",
    "software development",
    "website development",
    "enterprise solutions",
    "digital transformation",
    "technical consulting",
    "business intelligence",
    "machine learning",
    "cloud solutions"
  ],
  openGraph: {
    title: "Technical Solutions | The Ladder",
    description: "Enterprise technical solutions for digital transformation.",
    url: "https://www.theladders.tech/technical",
    type: "website",
    images: [
      {
        url: "https://www.theladders.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Ladder Technical Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Solutions | The Ladder",
    description: "Enterprise technical solutions for digital transformation.",
    images: ["https://www.theladders.tech/twitter-image.png"],
  },
  alternates: {
    canonical: "https://www.theladders.tech/technical",
  },
};

export default function TechnicalHome() {
  return (
    <>
      <TechHomeHero />
      <ImpactStats />
      <TServices />
      <TWhyChooseUs />
      <DesignShowcase />
      {/* <TTestimonials /> */}
      <CTAHero />
      <FAQSection />
      <ContactSection />
      <TechFooter />
    </>
  );
}
