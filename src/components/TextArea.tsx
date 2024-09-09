import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

const textareaVariants = cva(
  'block w-full rounded-lg text-gray-800 border-2 border-gray-200 focus:outline-none focus:ring-4 placeholder:text-gray-400',
  {
    variants: {
      sizes: {
        small: 'px-3.5 py-2.5',
        default: 'px-4 py-3',
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

type TextareaProps = {
  id: string;
  label: string | null;
  validation?: RegisterOptions;
  unregistered?: boolean;
  containerClassName?: string;
} & React.ComponentPropsWithoutRef<'textarea'> &
  VariantProps<typeof textareaVariants>;

export default function Textarea({
  id,
  label,
  validation,
  containerClassName,
  unregistered = false,
  className,
  disabled,
  sizes,
  rows,
  ...rest
}: TextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const isError = errors[id];
  const withLabel = label !== null;

  const getStateVariant = () => {
    if (unregistered) return 'default';
    else if (disabled) return 'disabled';
    else if (isError) return 'error';
    return 'default';
  };

  return (
    <div className={containerClassName}>
      {withLabel && (
        <label htmlFor={id} className='text-gray-500 text-sm font-medium'>
          {label}
        </label>
      )}

      <textarea
        {...register(id, validation)}
        {...rest}
        name={id}
        id={id}
        rows={rows ?? 3}
        disabled={disabled}
        className={clsxm(
          textareaVariants({ sizes, states: getStateVariant() }),
          withLabel && 'mt-1.5',
          className,
        )}
        aria-describedby={id}
      />

      {isError && (
        <p className='text-sm font-medium mt-2.5 font-secondary text-red-500'>
          {get(errors, id).message?.toString()}
        </p>
      )}
    </div>
  );
}
