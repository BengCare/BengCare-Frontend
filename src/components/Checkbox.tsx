import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

const checkboxVariants = cva(
  'shrink-0 cursor-pointer shadow-sm peer appearance-none border-2 rounded checked:bg-primary-700 checked:border-primary-700 hover:checked:bg-primary-800 focus:checked:bg-primary-700 focus:ring-4 focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-1 focus-visible:ring-primary-500',
  {
    variants: {
      size: {
        small: 'w-4 h-4',
        default: 'w-5 h-5',
      },
      state: {
        default: 'accent-gray-500 border-gray-300 focus:ring-primary-100',
        error: 'accent-red-500 border-red-400 focus:ring-red-100',
      },
    },
    defaultVariants: {
      size: 'default',
      state: 'default',
    },
  },
);

type CheckboxProps = {
  name: string;
  label: string | null;
  value?: string | number;
  validation?: RegisterOptions;
  hideError?: boolean;
  customLabel?: React.ReactNode;
  containerClassname?: string;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> &
  VariantProps<typeof checkboxVariants>;

export default function Checkbox({
  name,
  label,
  value,
  validation,
  hideError = false,
  customLabel,
  containerClassname,
  size = 'default',
  className,
  ...rest
}: CheckboxProps) {
  const {
    register,
    formState: { errors, isSubmitted },
  } = useFormContext();

  const isError = isSubmitted && errors[name];
  const withLabel = label !== null;

  const getStateVariant = () => {
    if (isError) return 'error';
    return 'default';
  };

  return (
    <div>
      <label
        htmlFor={name + '_' + value}
        className={clsxm('flex items-center gap-3', containerClassname)}
      >
        <div className='relative flex items-center'>
          <input
            {...register(name, validation)}
            {...rest}
            id={name + '_' + value}
            name={name}
            type='checkbox'
            value={value}
            className={clsxm(
              checkboxVariants({ size, state: getStateVariant() }),
              className,
            )}
            aria-describedby={name}
          />
          <svg
            className={clsxm(
              'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden peer-checked:block pointer-events-none',
              size === 'small' && 'h-3 w-3',
              size === 'default' && 'h-3.5 w-3.h-3.5',
            )}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#fff'
            strokeWidth='3.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <polyline points='20 6 9 17 4 12' />
          </svg>
        </div>

        {customLabel}

        {withLabel && !customLabel && <p>{label}</p>}
      </label>
      {isError && !hideError && (
        <p className='text-sm font-medium mt-2.5 font-secondary text-red-500'>
          {get(errors, name).message?.toString()}
        </p>
      )}
    </div>
  );
}
