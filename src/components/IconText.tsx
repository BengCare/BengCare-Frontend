import Image from 'next/image';
import React from 'react';

import clsxm from '@/lib/clsxm';

const IconText: React.FC<{
  children: React.ReactNode;
  iconWidth: number;
  iconHeight: number;
  className?: string;
  src: string;
}> = ({ children, iconWidth, iconHeight, className, src }) => {
  return (
    <div className={clsxm(className, 'flex items-center gap-3')}>
      <Image
        src={src}
        alt={children ? children.toString() : 'icon'}
        width={iconWidth}
        height={iconHeight}
        objectFit='contain'
      />
      <span className='leading-none'>{children}</span>
    </div>
  );
};

export default IconText;
