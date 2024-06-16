import Image from 'next/image';
import React, { InputHTMLAttributes } from 'react';

import clsxm from '@/lib/clsxm';

interface IconTextProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  iconWidth: number;
  iconHeight: number;
  className?: string;
  iconClassName?: string;
  inputClassName?: string;
  src: string;
}

const IconText: React.FC<IconTextProps> = ({
  id,
  iconWidth,
  iconHeight,
  className,
  iconClassName,
  inputClassName,
  src,
  ...inputProps
}) => {
  return (
    <div
      className={clsxm(
        className,
        'flex items-center gap-[10px] border-2 rounded-lg border-gray-200',
      )}
    >
      <Image
        src={src}
        width={iconWidth}
        height={iconHeight}
        className={clsxm(iconClassName, 'object-contain ml-[12px]')}
        alt='input email icon'
      ></Image>
      <input
        {...inputProps}
        id={id}
        className={clsxm(
          inputClassName,
          'pr-[12px] py-[10px] bg-transparent border-none ring-0 outline-none',
        )}
      />
    </div>
  );
};

export default IconText;
