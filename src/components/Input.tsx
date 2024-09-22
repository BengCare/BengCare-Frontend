import { cva, VariantProps } from 'class-variance-authority';
import { Eye, EyeOff, LucideIcon } from 'lucide-react';
import Image, { ImageProps } from 'next/image';
import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

const inputVariants = cva(
  'flex w-full rounded-lg text-gray-800 border border-gray-200 shadow-sm focus:outline-none focus:ring-4 placeholder:text-gray-400',
  {
    variants: {
      sizes: {
        small: 'min-h-9 px-3.5',
        default: 'min-h-10 px-4',
        large: 'min-h-12 px-5',
      },
      states: {
        default:
          'focus:border-primary-500 !ring-primary-500/40 caret-primary-800',
        error: 'focus:border-red-500 !ring-red-500/40 caret-red-800',
        disabled: 'bg-transparent cursor-not-allowed',
      },
    },
    defaultVariants: {
      sizes: 'default',
      states: 'default',
    },
  },
);

type InputProps = {
  id: string;
  label: string | null;
  validation?: RegisterOptions;
  leftIcon?: LucideIcon | string;
  img?: ImageProps;
  unregistered?: boolean;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<'input'> &
  VariantProps<typeof inputVariants>;

export default function Input({
  id,
  label,
  validation,
  containerClassName,
  leftIcon: LeftIcon,
  img,
  unregistered = false,
  type = 'text',
  disabled,
  sizes,
  className,
  required,
  ...rest
}: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = errors[id];
  const withLabel = label !== null;

  const [showPassword, setShowPassword] = React.useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  const getStateVariant = () => {
    if (unregistered) return 'default';
    else if (disabled) return 'disabled';
    else if (isError) return 'error';
    return 'default';
  };

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={containerClassName}>
      {withLabel && (
        <label htmlFor={id} className='text-gray-500 text-sm font-medium'>
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}

      <div className={clsxm('relative', withLabel && 'mt-1.5')}>
        {LeftIcon && !img && (
          <LeftIcon
            className={clsxm(
              'pointer-events-none absolute top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400',
              sizes == 'small' && 'left-3.5',
              sizes == 'default' && 'left-4',
            )}
          />
        )}

        {img && (
          <Image
            {...img}
            alt={img.alt ?? 'Input Icon'}
            className='pointer-events-none absolute top-1/2 -translate-y-1/2 left-4 w-5 h-5 text-gray-400'
          />
        )}

        <input
          {...register(id, validation)}
          {...rest}
          type={inputType}
          id={id}
          name={id}
          disabled={disabled}
          className={clsxm(
            inputVariants({ sizes, states: getStateVariant() }),
            LeftIcon && [
              sizes == 'small' && 'pl-9',
              sizes == 'default' && 'pl-10',
            ],
            className,
          )}
          aria-describedby={id}
        />
        {type == 'password' && (
          <button
            type='button'
            onClick={togglePassword}
            className={clsxm(
              'absolute top-1/2 right-0 -translate-y-1/2 mr-4',
              'flex items-center justify-center rounded w-5 h-5',
              'focus:outline-none focus:ring ring-gray-400',
              'text-gray-400 text-lg',
            )}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        )}
      </div>

      {isError && (
        <p className='text-sm font-medium mt-2.5 font-secondary text-red-500'>
          {get(errors, id).message?.toString()}
        </p>
      )}
    </div>
  );
}
