import Image from 'next/image';
import React, { forwardRef,InputHTMLAttributes } from 'react';

import clsxm from '@/lib/clsxm';

type IconTextProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: string;
  iconWidth: number;
  iconHeight: number;
  className?: string;
  iconClassName?: string;
  inputClassName?: string;
  src: string;
};

const IconText = forwardRef<HTMLInputElement, IconTextProps>(
  (
    {
      id,
      iconWidth,
      iconHeight,
      className,
      iconClassName,
      inputClassName,
      src,
      ...inputProps
    },
    ref,
  ) => {
    return (
      <div
        className={clsxm(
          'flex items-center gap-[10px] border-2 rounded-lg border-gray-200',
          className,
        )}
      >
        <Image
          src={src}
          width={iconWidth}
          height={iconHeight}
          className={clsxm('object-contain ml-[12px]', iconClassName)}
          alt='input email icon'
        />
        <input
          {...inputProps}
          id={id}
          ref={ref}
          className={clsxm(
            'pr-[12px] py-[10px] bg-transparent border-none ring-0 outline-none w-full',
            inputClassName,
          )}
        />
      </div>
    );
  },
);

IconText.displayName = 'IconText';

export default IconText;
