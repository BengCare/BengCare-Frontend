import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getPostData } from '@/lib/post';

interface PostPageProps {
  params: { slug: string };
}

function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
  );
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const articleTitle = toTitleCase(params.slug.split('-').join(' '));
  return {
    title: articleTitle + ' | Artikel BengCare',
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    notFound();
  }

  return (
    <article className='layout'>
      <h1 className='mt-10 text-center text-[#29407F] font-bold text-[26px]'>
        {postData.title}
      </h1>
      <p className=' text-xs text-center'>{postData.date}</p>
      <Image
        src={postData.image}
        alt='article hero image'
        height={60}
        width={1200}
        className='object-contain md:max-w-fit mx-auto my-[20px]'
      />
      <div
        className='text-justify'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
      <Image
        src='/homepage/border-horizontal-full.png'
        alt='border horizontal full'
        height={60}
        width={1200}
        className='object-contain my-10'
      />
    </article>
  );
}
