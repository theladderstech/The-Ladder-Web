// lib/blog.ts
import { createClient } from 'contentful';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

// Ensure the environment variables exist
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space || '',
  accessToken: accessToken || '',
  // environment: 'master', // Optional, will default to master
});

import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Document } from '@contentful/rich-text-types';

// Helper function to map Contentful response to your BlogPost interface
function mapContentfulPost(item: any): BlogPost {
  // Excerpt might be a Rich Text document or a simple string
  const excerptRaw = item.fields.excerpt;
  const excerptStr = typeof excerptRaw === 'string'
    ? excerptRaw
    : excerptRaw
      ? documentToPlainTextString(excerptRaw as Document)
      : '';

  // Content might also be Rich Text instead of Markdown depending on configuration
  // For now, we assume it's stored as a Long Text (markdown string) based on your early setup
  // but if it's Rich Text, we'll extract the plain text for the MDX parser
  const contentRaw = item.fields.content;
  const contentStr = typeof contentRaw === 'string'
    ? contentRaw
    : contentRaw
      ? documentToPlainTextString(contentRaw as Document)
      : '';

  // Handle multiple image formats
  let imageUrl = '';
  if (item.fields.image) {
    if (typeof item.fields.image === 'string') {
      imageUrl = item.fields.image;
    } else if (item.fields.image.fields && item.fields.image.fields.file) {
      imageUrl = `https:${item.fields.image.fields.file.url}`;
    }
  }

  return {
    slug: item.fields.slug as string || '',
    title: item.fields.title as string || 'Untitled',
    excerpt: excerptStr,
    category: item.fields.category as string || 'Uncategorized',
    author: item.fields.author as string || 'Unknown Author',
    date: item.fields.date as string || new Date().toISOString().split('T')[0],
    readTime: item.fields.readTime as string || '5 min read',
    image: imageUrl,
    content: contentStr,
  };
}

// Get all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost', // this must match the Content Type ID in Contentful
      order: ['-fields.date'], // sorts by date descending
    });

    return response.items.map(mapContentfulPost);
  } catch (error) {
    console.error('Error fetching Contentful posts:', error);
    return [];
  }
}

// Get all blog post slugs
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Get single blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return mapContentfulPost(response.items[0]);
  } catch (error) {
    console.error('Error fetching single Contentful post:', error);
    return null;
  }
}

// Get all unique categories
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories));
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.category === category);
}
