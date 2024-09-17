import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import TagFilter from '@/app/artikel/tag-filter';
import SubscriptionForm from '@/components/ui/subscription-form';
import { getAllPostSlugs } from '@/lib/post';

export const metadata: Metadata = {
  title: 'Artikel | BengCare',
  description:
    'Artikel-artikel BengCare mengenai informasi perawatan dan perbaikan terbaik kendaraan mobil atau motor',
};

export default async function Artikel() {
  const allPostsData = await getAllPostSlugs();

  return (
    <div className='layout'>
      <h1 className='mt-10 mb-4 text-[#29407F] font-bold text-[26px] text-center sm:text-left'>
        Artikel
      </h1>
      <section className='flex gap-10'>
        <ul className='flex-1 grid gap-y-6 mb-20'>
          {allPostsData.map(({ params }) => (
            <li key={params.slug}>
              <Link href={`/artikel/${params.slug}`}>
                <div className='flex flex-col md:flex-row md:justify-start items-center gap-8'>
                  <Image
                    src={params.image}
                    alt={params.title}
                    height={250}
                    width={250}
                    className='object-cover w-full md:w-48 h-44 rounded-lg'
                  />
                  <div>
                    <p className='font-semibold text-lg text-justify'>
                      {params.title.replace(/-/g, ' ')}
                    </p>
                    <p className='mt-2 text-sm text-gray-600 text-justify line-clamp-2'>
                      {params.desc}
                    </p>
                    <p className='text-xs text-gray-400 mt-4'>{params.date}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <aside className='hidden lg:block w-1/3 space-y-8'>
          <SubscriptionForm />
          <TagFilter />
        </aside>
      </section>
    </div>
  );
}
