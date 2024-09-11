import Image from 'next/image';
import Link from 'next/link';

import { getAllPostSlugs } from '@/lib/post';

export default async function Home() {
  const allPostsData = await getAllPostSlugs();

  return (
    <div className='layout'>
      <h1 className='mt-10 mb-4 text-[#29407F] font-bold text-[26px]'>
        Artikel
      </h1>
      <ul className='grid gap-y-6 mb-10'>
        {allPostsData.map(({ params }) => (
          <li key={params.slug}>
            <Link href={`/artikel/${params.slug}`}>
              <div className='flex justify-start items-start gap-8'>
                <Image
                  src={params.image}
                  alt={params.title}
                  height={250}
                  width={250}
                  className='object-cover'
                />
                <div>
                  <p className='font-bold text-lg'>
                    {params.title.replace(/-/g, ' ')}
                  </p>
                  <p className='text-sm text-gray-600'>{params.desc}...</p>
                  <p className='text-xs text-gray-400 mt-4'>{params.date}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
