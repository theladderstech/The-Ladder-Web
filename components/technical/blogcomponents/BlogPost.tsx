// app/technical/blog/[slug]/page.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  const posts = await getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="bg-[#1E1E1E] min-h-screen flex items-center justify-center">
        <h1 className="text-white text-2xl font-bold">Post not found.</h1>
      </main>
    );
  }

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
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-12">

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
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12 bg-[#252525]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* MDX Content */}
          <article className="prose prose-invert prose-lg max-w-none
            prose-headings:text-[#D8F209] prose-headings:font-bold
            prose-h1:text-[clamp(32px,5vw,48px)]
            prose-h2:text-[clamp(24px,4vw,36px)]
            prose-h3:text-[clamp(20px,3.5vw,28px)]
            prose-p:text-[#FBFFDE]/80 prose-p:leading-relaxed prose-p:text-[clamp(15px,3.5vw,18px)]
            prose-a:text-[#D8F209] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-code:text-[#D8F209] prose-code:bg-[#252525] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
            prose-pre:bg-[#252525] prose-pre:border prose-pre:border-[#333333] prose-pre:rounded-lg
            prose-ul:text-[#FBFFDE]/80 prose-ol:text-[#FBFFDE]/80
            prose-li:marker:text-[#D8F209] prose-li:text-[clamp(15px,3.5vw,17px)]
            prose-blockquote:border-l-4 prose-blockquote:border-l-[#D8F209] prose-blockquote:text-[#FBFFDE]/70 prose-blockquote:italic
            prose-img:rounded-xl prose-img:shadow-lg
          ">
            <MDXRemote source={post.content} />
          </article>
        </div>
      </section>
    </main>
  );
}
