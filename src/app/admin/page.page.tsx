import Image from 'next/image';
import Link from 'next/link';

import { baseURL } from '@/lib/api';
import { ApiReturn } from '@/types/api';

export interface Image {
  image_name: string;
  image_path: string;
}

export interface Bengkel {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
  open_hour: string;
  close_hour: string;
  available_vehicle_type: string[];
  images: Image[];
  list_of_service: string[];
  is_promise: boolean;
  info_from: string;
}

export const revalidate = 0;

export default async function AdminPage() {
  const data = await fetch(baseURL + '/bengkel_temp', {
    next: { revalidate: 0 },
  });
  const bengkels: ApiReturn<Bengkel[]> = await data.json();

  return (
    <main className='layout py-10 space-y-2.5'>
      <section className='flex justify-between'>
        <h1 className='text-2xl font-semibold'>List Bengkel</h1>
        <Link
          href='/api/auth/signout'
          className='inline-flex items-center justify-center py-[8px] px-[16px] min-h-11 bg-primary-700 rounded-lg text-white font-medium hover:bg-primary-700/90'
        >
          Sign out
        </Link>
      </section>

      <ul className='space-y-10'>
        {bengkels.data.map((props, index) => (
          <li
            key={props.id}
            className='space-y-2 p-4 rounded-lg border bg-gray-100'
          >
            <p className='text-lg font-medium'>
              {index + 1}. {props.name}
            </p>

            <div className='grid md:grid-cols-2 gap-4 p-4 border rounded-lg shadow-sm bg-white'>
              {Object.entries(props).map(
                ([key, value]) =>
                  ![
                    'id',
                    'name',
                    'description',
                    'images',
                    'list_of_service',
                    'available_vehicle_type',
                    'is_promise',
                  ].includes(key) && (
                    <DataCard key={key} label={key} content={value} />
                  ),
              )}

              <div className='space-y-1'>
                <p className='text-sm text-gray-500'>Available vehicle type</p>
                <p className='font-medium text-gray-800'>
                  {props.available_vehicle_type.join(', ') || '-'}
                </p>
              </div>

              <DataCard
                label='Description'
                content={props.description}
                className='whitespace-pre-wrap'
              />

              <div className='space-y-1'>
                <p className='text-sm text-gray-500'>List of services</p>
                <ul className='list-inside list-[revert]'>
                  {props.available_vehicle_type.length > 0 ? (
                    props.list_of_service.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))
                  ) : (
                    <p className='font-medium text-gray-800'>-</p>
                  )}
                </ul>
              </div>

              <div className='space-y-1'>
                <div className='flex flex-wrap gap-4 items-center'>
                  {props.images?.map(({ image_name, image_path }, index) => {
                    return (
                      <Link
                        key={index}
                        href={`https://storage.googleapis.com/bengcare-development/${image_path}`}
                        target='_blank'
                        className='block rounded-lg overflow-hidden hover:bg-blend-darken'
                      >
                        <Image
                          src={`https://storage.googleapis.com/bengcare-development/${image_path}`}
                          alt={image_name}
                          width={400}
                          height={400}
                          className='w-24 h-24 object-cover'
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

type DataCard = {
  label: string;
  content: boolean | string;
} & React.ComponentPropsWithoutRef<'div'>;

function DataCard({ label, content, ...rest }: DataCard) {
  return (
    <div className='space-y-1' {...rest}>
      <p className='text-sm text-gray-500 capitalize'>
        {label.split('_').join(' ')}
      </p>
      <p className='font-medium text-gray-800'>{content.toString() || '-'}</p>
    </div>
  );
}
