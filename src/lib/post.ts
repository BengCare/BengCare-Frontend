import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import strip from 'strip-markdown';

const postsDirectory = path.join(process.cwd(), 'src/app/artikel/posts');

export interface PostData {
  slug: string;
  title: string;
  author: string;
  date: string;
  contentHtml: string;
  image: string;
  desc: string;
  readTime: number;
}

function titleToSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

async function calculateReadTime(content: string): Promise<number> {
  const wordsPerMinute = 200;

  const processedContent = await remark().use(strip).process(content);
  const plainText = processedContent.toString();

  const wordCount = plainText.split(/\s+/).filter((word) => word).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);

  return readTime;
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = remark().use(html).process(matterResult.content);

    const _contentHtml = processedContent.toString();

    return {
      params: {
        slug: titleToSlug(matterResult.data.title as string),
        title: matterResult.data.title as string,
        image: matterResult.data.image as string,
        desc: matterResult.data.desc.slice(0, 550) as string,
        date: matterResult.data.date as string,
      },
    };
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const fileNames = fs.readdirSync(postsDirectory);
  const fileName = fileNames.find((name) => {
    const fullPath = path.join(postsDirectory, name);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return titleToSlug(matterResult.data.title as string) === slug;
  });

  if (!fileName) {
    throw new Error(`Post with slug "${slug}" not found`);
  }

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const readTime = await calculateReadTime(matterResult.content);

  return {
    slug: titleToSlug(matterResult.data.title as string) as string,
    contentHtml,
    title: matterResult.data.title as string,
    author: matterResult.data.author as string,
    date: matterResult.data.date as string,
    image: matterResult.data.image as string,
    desc: matterResult.data.desc.slice(0, 150) as string,
    readTime,
  };
}
