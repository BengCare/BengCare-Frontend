import clsxm from '@/lib/clsxm';
import React, { ButtonHTMLAttributes } from 'react';
import { ImSpinner2 } from 'react-icons/im';

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
    <button  {...buttonProps} className={clsxm(className, "bg-primary-700 rounded-lg py-[8px] px-[16px] text-white font-medium hover:brightness-90")}>{!isPending ? children : <ImSpinner2 className='animate-spin' />}</button>
  );
};

export default Button;