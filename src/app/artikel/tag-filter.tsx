'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

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
  ];

  const createQueryUrl = (query: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('topic', query);
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
            className='bg-white text-gray-900 text-sm px-3 py-2 rounded-xl shadow-sm border border-gray-200/70'
          >
            {query[0].toUpperCase() + query.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
}
