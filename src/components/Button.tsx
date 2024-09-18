import React, { ButtonHTMLAttributes } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  isPending?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isPending,
  className,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      className={clsxm(
        'bg-primary-700 rounded-lg py-[8px] px-[16px] min-h-10 text-white font-medium hover:brightness-90 disabled:bg-primary-700/80 disabled:brightness-100 disabled:cursor-not-allowed',
        className,
      )}
    >
      {!isPending ? children : <ImSpinner2 className='animate-spin' />}
    </button>
  );
};

export default Button;
