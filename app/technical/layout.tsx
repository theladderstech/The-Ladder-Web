import type { Metadata, Viewport } from "next";
import Navbar from '@/components/common/Navbar';

export const metadata: Metadata = {
  title: "Technical Solutions | The Ladder Tech",
  description: "Unlock technical excellence with The Ladder Tech. AI, automation, data analytics, and web development for enterprise growth.",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function TechnicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 text-gray-100">
        {children}
      </main>
    </>
  );
}
