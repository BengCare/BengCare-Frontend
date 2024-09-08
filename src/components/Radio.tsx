import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

enum RadioSize {
  'small',
  'base',
  'large',
}

type RadioProps = {
  name: string;
  label: string | null;
  value?: string | boolean;
  validation?: RegisterOptions;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  customLabel?: React.ReactNode;
  errorExample?: boolean;
  size?: keyof typeof RadioSize;
  containerClassName?: string;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;

export default function Radio({
  name,
  label,
  value,
  validation,
  helperText,
  readOnly = false,
  hideError = false,
  customLabel,
  errorExample = false,
  disabled,
  size = 'base',
  containerClassName,
  ...rest
}: RadioProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, name);
  const withLabel = label !== null;

  return (
    <div className={containerClassName}>
      <div
        className={clsxm(
          'flex items-center gap-2.5 ml-[2px]',
          disabled && 'cursor-not-allowed',
        )}
      >
        <div className='relative leading-[0]'>
          <input
            {...register(name, validation)}
            {...rest}
            name={name}
            type='radio'
            id={`${name}_${value}`}
            value={value}
            readOnly={readOnly}
            disabled={disabled}
            className={clsxm(
              'shrink-0 cursor-pointer shadow-sm peer appearance-none',
              // accent class for changing input base color (the content color adjust the accent)
              'ring-1 ring-base-icon rounded-full accent-primary-700',
              'checked:bg-primary-700 checked:ring-primary-700 hover:checked:ring-primary-800 hover:checked:!bg-primary-800 focus:checked:bg-primary-700 active:checked:bg-primary-800 active:checked:ring-primary-800 focus:checked:ring-primary-100 focus:checked:ring-4 focus:ring-primary-100 focus:ring-4',
              (readOnly || disabled) &&
                'cursor-not-allowed bg-gray-50 disabled:ring-gray-300 disabled:checked:bg-primary-500 disabled:checked:ring-primary-500 hover:disabled:checked:!bg-primary-500',
              (error || errorExample) &&
                'accent-red-500 ring-red-400 !shadow-error',
              //#region  //*=========== size ===========
              size === 'small' && ['h-3.5 w-3.5'],
              size === 'base' && ['h-4 w-4'],
              size === 'large' && ['h-[1.125rem] w-[1.125rem]'],
              //#endregion  //*======== size ===========
            )}
            aria-describedby={name}
          />
          <svg
            className={clsxm(
              'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 hidden peer-checked:block pointer-events-none',
              size === 'small' && ['h-3 w-3'],
              size === 'base' && ['h-3.5 w-3.5'],
              size === 'large' && ['h-4 w-4'],
            )}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#fff'
          >
            <circle cx='12' cy='12' r='6.5' />
          </svg>
        </div>

        {customLabel}

        {withLabel && !customLabel && (
          <label
            className={clsxm(
              'text-gray-800',
              (readOnly || disabled) && '!cursor-not-allowed',
              size === 'large' && 'font-normal',
            )}
            htmlFor={`${name}_${value}`}
          >
            {label}
          </label>
        )}
      </div>
      {helperText && (
        <p className='text-sm font-medium mt-1.5 text-base-secondary'>
          {helperText}
        </p>
      )}
      {!hideError && error && (
        <p className='text-sm font-medium mt-1.5 text-red-500'>
          {error.message?.toString()}
        </p>
      )}
    </div>
  );
}
