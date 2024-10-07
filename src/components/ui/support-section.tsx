import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

type SupportSectionProps = {
  label: string;
  images: ImageProps[];
} & React.ComponentPropsWithoutRef<'section'>;

export default function SupportSection({
  label,
  images,
  className,
  ...rest
}: SupportSectionProps) {
  return (
    <section className={clsxm('py-14', className)} {...rest}>
      <div className='layout space-y-4'>
        <h3 className='text-xl font-medium text-center text-gray-500 capitalize'>
          {label}
        </h3>
        <div className='flex flex-col gap-x-4 gap-y-6 md:flex-row justify-evenly'>
          {images?.map((img, index) => (
            <div
              key={index}
              className='flex-1 flex justify-center items-center'
            >
              <Image
                {...img}
                alt={img.alt ?? 'Google Logo'}
                className={clsxm(img.className)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
