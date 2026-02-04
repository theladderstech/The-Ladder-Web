// app/technical/blog/page.tsx
import type { Metadata } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import BlogGrid from '@/components/technical/blogcomponents/BlogGrid';

export const metadata: Metadata = {
  title: 'Technical Blog | Insights on AI, Automation & Web Development | The Ladder',
  description: 'Expert articles on AI assistants, automation solutions, data analytics, web development, and digital transformation. Practical insights for building scalable digital systems.',
  keywords: [
    'technical blog',
    'AI development',
    'automation solutions',
    'web development',
    'data analytics',
    'software engineering',
    'digital transformation',
    'system architecture',
    'technical insights',
    'programming tutorials'
  ],
  openGraph: {
    title: 'Technical Blog | The Ladder',
    description: 'Expert insights on AI, automation, and building digital systems that scale',
    url: 'https://www.theladders.tech/technical/blog',
    type: 'website',
    images: [
      {
        url: 'https://www.theladders.tech/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Ladder Technical Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical Blog | The Ladder',
    description: 'Expert insights on AI, automation, and building digital systems that scale',
    images: ['https://www.theladders.tech/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://www.theladders.tech/technical/blog',
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const allCategories = getAllCategories();

  return (
    <main className="bg-[#1E1E1E] min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 lg:py-24">
        <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32">

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-[#D8F209] uppercase tracking-wider font-medium text-[clamp(10px,2.5vw,13px)]">
                Blog
              </span>
            </div>

            <h1 className="text-[#D8F209] font-bold text-[clamp(32px,6vw,64px)] leading-tight mb-4">
              Insights, ideas, and practical<br />thinking
            </h1>

            <p className="text-[#FBFFDE]/70 text-[clamp(15px,3.5vw,18px)] max-w-2xl mx-auto">
              Articles on design, technology, automation, and building digital systems that actually scale.
            </p>
          </div>

          {/* Blog Grid with Filtering - Client Component */}
          <BlogGrid allPosts={allPosts} allCategories={allCategories} />
        </div>
      </section>
    </main>
  );
}
