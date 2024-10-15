'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import clsxm from '@/lib/clsxm';

export default function TagFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const tags = [
    'servis',
    'perawatan',
    'tips',
    'motor',
    'mobil',
    'suku cadang',
    'konsultasi',
    'teknologi',
    'edukasi',
    'unik',
  ];

  const currentQuery = searchParams.getAll('topics');

  const createQueryUrl = (query: string) => {
    const params = new URLSearchParams(searchParams);

    if (!currentQuery?.includes(query)) {
      params.append('topics', query);
    } else {
      params.delete('topics', query);
    }

    return `${pathname}?${params}`;
  };

  return (
    <div className='space-y-4'>
      <h3 className='font-medium uppercase text-xl tracking-wider text-primary-800'>
        TEMUKAN LEBIH BANYAK HAL YANG PENTING BAGI DIRIMU
      </h3>

      <div className='flex flex-wrap gap-2.5'>
        {tags.map((query, index) => (
          <Link
            key={index}
            href={createQueryUrl(query)}
            className={clsxm(
              'bg-white text-gray-900 text-sm px-3 py-2 rounded-xl shadow-sm border border-gray-200/70 hover:bg-gray-100 transition',
              currentQuery.includes(query) &&
              'border-primary-500 text-primary-700 bg-primary-100 hover:bg-primary-100',
            )}
          >
            {query[0].toUpperCase() + query.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}
