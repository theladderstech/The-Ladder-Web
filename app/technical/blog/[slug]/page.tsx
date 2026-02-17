// app/technical/blog/[slug]/page.tsx
import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import {
  Callout,
  CodeTitle,
  StatsBox,
  FeatureBox,
  Quote,
  ComparisonTable,
  Steps,
  Step
} from '@/components/technical/blogcomponents/MDXComponents';

const components = {
  Callout,
  CodeTitle,
  StatsBox,
  FeatureBox,
  Quote,
  ComparisonTable,
  Steps,
  Step,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return {
    title: `${post.title} | The Ladder Technical Blog`,
    description: post.excerpt,
    keywords: [
      post.category,
      'technical blog',
      'software development',
      'web development',
      'programming',
      'technology',
    ],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.theladders.tech/technical/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image || 'https://www.theladders.tech/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image || 'https://www.theladders.tech/twitter-image.png'],
    },
    alternates: {
      canonical: `https://www.theladders.tech/technical/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return (
    <main className="bg-[#1E1E1E] min-h-screen">
      {/* Back Button */}
      <div className="relative w-full max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 pt-8">
        <Link
          href="/technical/blog"
          className="inline-flex items-center gap-2 text-[#D8F209] hover:gap-3 transition-all duration-300 text-[clamp(14px,3vw,15px)] font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 md:py-16">
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
          {/* ↑ Changed from max-w-4xl to max-w-6xl */}

          {/* Category Badge */}
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#D8F209]/10 text-[#D8F209] text-[clamp(11px,2.5vw,13px)] font-medium rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[#D8F209] font-bold text-[clamp(32px,6vw,56px)] leading-tight mb-6">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#333333]">
            <div className="w-12 h-12 rounded-full bg-[#D8F209]/20 flex items-center justify-center">
              <span className="text-[#D8F209] font-bold text-lg">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="text-white text-[clamp(14px,3vw,16px)] font-medium">
                {post.author}
              </p>
              <p className="text-[#FBFFDE]/60 text-[clamp(12px,2.5vw,14px)]">
                {post.date} • {post.readTime}
              </p>
            </div>
          </div>

          {/* Featured Image */}
          {post.image && !post.image.includes('placeholder') ? (
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 bg-[#252525]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-[#252525] to-[#1E1E1E] flex items-center justify-center border border-[#333333]">
              <span className="text-[#D8F209] font-bold text-[clamp(48px,8vw,96px)]">
                {post.category}
              </span>
            </div>
          )}

          {/* MDX Content */}
          <article className="prose prose-invert prose-lg max-w-none overflow-x-hidden
            prose-headings:text-[#D8F209] prose-headings:font-bold
            prose-h1:text-[clamp(28px,5vw,48px)] prose-h1:mb-6 prose-h1:mt-12 prose-h1:break-words
            prose-h2:text-[clamp(22px,4vw,36px)] prose-h2:mb-4 prose-h2:mt-10 prose-h2:break-words
            prose-h3:text-[clamp(18px,3.5vw,28px)] prose-h3:mb-3 prose-h3:mt-8 prose-h3:break-words
            prose-p:text-[#FBFFDE]/80 prose-p:leading-relaxed prose-p:text-[clamp(14px,3.5vw,18px)] prose-p:mb-6 prose-p:break-words
            prose-a:text-[#D8F209] prose-a:no-underline hover:prose-a:underline prose-a:transition-all prose-a:break-words
            prose-strong:text-white prose-strong:font-bold
            prose-code:text-[clamp(11px,2.5vw,13px)] prose-code:text-[#D8F209] prose-code:bg-[#252525] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:break-words
            prose-pre:bg-[#0a0a0a] prose-pre:border prose-pre:border-[#333333] prose-pre:rounded-xl prose-pre:p-3 md:prose-pre:p-6 prose-pre:overflow-x-auto prose-pre:my-6 prose-pre:text-[clamp(12px,2.5vw,14px)]
            prose-ul:text-[#FBFFDE]/80 prose-ul:my-6 prose-ul:space-y-2
            prose-ol:text-[#FBFFDE]/80 prose-ol:my-6 prose-ol:space-y-2
            prose-li:marker:text-[#D8F209] prose-li:text-[clamp(14px,3.5vw,17px)] prose-li:leading-relaxed prose-li:break-words
            prose-blockquote:border-l-4 prose-blockquote:border-l-[#D8F209] prose-blockquote:text-[#FBFFDE]/70 prose-blockquote:italic prose-blockquote:pl-4 md:prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:text-[clamp(14px,3.5vw,16px)]
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:w-full prose-img:h-auto
            prose-hr:border-[#333333] prose-hr:my-12
            prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:text-sm
            prose-th:bg-[#252525] prose-th:text-[#D8F209] prose-th:font-bold prose-th:p-2 md:prose-th:p-4 prose-th:border prose-th:border-[#333333] prose-th:text-[clamp(12px,2.5vw,14px)]
            prose-td:p-2 md:prose-td:p-4 prose-td:border prose-td:border-[#333333] prose-td:text-[#FBFFDE]/80 prose-td:text-[clamp(12px,2.5vw,14px)]
          ">
            <MDXRemote
              source={post.content}
              components={components}
              options={{
                mdxOptions: {
                  /* @ts-ignore */
                  development: process.env.NODE_ENV === 'development',
                },
                /* next-mdx-remote v6 security options */
                parseFrontmatter: false,
                /* @ts-ignore */
                blockJS: false,
              }}
            />
          </article>
        </div>
      </section>

      {/* Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image || "https://www.theladders.tech/og-image.png",
            "datePublished": post.date,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Ladder",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.theladders.tech/ladder-icon.svg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.theladders.tech/technical/blog/${slug}`
            }
          })
        }}
      />
    </main>
  );
}
