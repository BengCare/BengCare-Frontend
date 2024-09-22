import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import SubscriptionForm from '@/components/ui/subscription-form';
import { getPostData, getRelatedArticles } from '@/lib/post';
import { toTitleCase } from '@/lib/util';

interface PostPageProps {
  params: { slug: string };
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

  const allPostsData = getRelatedArticles(params.slug, postData.topics);

  return (
    <article className='layout'>
      <h1 className='mt-10 text-[#29407F] font-bold text-[26px] md:w-2/3'>
        {postData.title}
      </h1>

      <div className='flex flex-col md:flex-row md:items-center gap-y-2 gap-x-3 text-sm text-gray-400 mt-3'>
        <p>{postData.readTime} menit membaca</p>

        <div className='w-[5px] h-[5px] bg-gray-400 rounded-full hidden md:block' />

        <p>
          Ditulis oleh{' '}
          <span className='text-primary-700'>{postData.author}</span>
        </p>

        <div className='w-[5px] h-[5px] bg-gray-400 rounded-full hidden md:block' />

        <p>{postData.date}</p>
      </div>

      <main className='flex gap-10 mt-5 mb-10'>
        <section className='flex-1'>
          <Image
            src={postData.image}
            alt='article hero image'
            height={400}
            width={600}
            className='w-full h-80 rounded-lg object-cover'
          />

          <div
            className='text-justify mt-5'
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </section>

        <aside className='hidden lg:block w-1/3 space-y-8'>
          <SubscriptionForm />
          <div className='space-y-4'>
            <h3 className='font-medium uppercase text-xl tracking-wider text-primary-800'>
              ARTIKEL TERKAIT
            </h3>

            <ul className='grid gap-y-3'>
              {allPostsData.map(({ params }) => (
                <li key={params.slug}>
                  <Link href={`/artikel/${params.slug}`}>
                    <div className='flex items-center gap-4'>
                      <Image
                        src={params.image}
                        alt={params.title}
                        height={250}
                        width={250}
                        className='object-cover w-24 h-20 rounded-lg'
                      />

                      <p className='font-medium line-clamp-3'>
                        {params.title.replace(/-/g, ' ')}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Image
            src='/homepage/border-horizontal-small.png'
            alt='border horizontal full'
            height={168}
            width={1152}
            className='my-10'
          />
        </aside>
      </main>
    </article>
  );
}
