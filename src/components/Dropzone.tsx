import * as React from 'react';
import { Accept, FileRejection, useDropzone } from 'react-dropzone';
import { FileWithPath } from 'react-dropzone';
import { Controller, get, useFormContext } from 'react-hook-form';
import { TbPhotoOff, TbPhotoPlus } from 'react-icons/tb';

import FilePreview from '@/components/FilePreview';
import clsxm from '@/lib/clsxm';

export type FileWithPreview = FileWithPath & { preview: string };

type DropzoneInputProps = {
  id: string;
  label: string | null;
  accept?: Accept;
  maxFiles?: number;
  maxSize?: number;
  helperText?: string;
  readOnly?: boolean;
  hideError?: boolean;
  validation?: Record<string, unknown>;
};

export default function DropzoneInput({
  id,
  label,
  accept,
  maxFiles = 1,
  maxSize = 1000000,
  helperText,
  readOnly = false,
  hideError = false,
  validation,
}: DropzoneInputProps) {
  const {
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();
  const error = get(errors, id);
  const withLabel = label !== null;

  //#region  //*=========== error focus ===========
  const dropzoneRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    error && dropzoneRef.current?.focus();
  }, [error]);
  //#endregion  //*======== error focus ===========

  //#region  //*=========== sync files with RHF ===========
  const fileValue = getValues(id);
  const [files, setFiles] = React.useState<FileWithPreview[]>(fileValue ?? []);

  React.useEffect(() => {
    setFiles(fileValue ?? []);
  }, [fileValue]);
  //#endregion  //*======== sync files with RHF ===========

  const onDrop = React.useCallback(
    <T extends File>(acceptedFiles: T[], rejectedFiles: FileRejection[]) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(id, files ? [...files] : null);
        setError(id, {
          type: 'manual',
          message:
            rejectedFiles &&
            rejectedFiles[0].errors[0].code === 'file-too-large'
              ? `File tidak boleh lebih dari ${maxSize / 1000000}MB`
              : rejectedFiles[0].errors[0].code === 'file-invalid-type'
                ? 'Tipe file tidak didukung'
                : rejectedFiles[0].errors[0].message,
        });
      } else {
        const acceptedFilesPreview = acceptedFiles.map((file: T) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        );

        setFiles(
          files
            ? [...files, ...acceptedFilesPreview].slice(0, maxFiles)
            : acceptedFilesPreview,
        );

        setValue(
          id,
          files
            ? [...files, ...acceptedFiles].slice(0, maxFiles)
            : acceptedFiles,
          {
            shouldValidate: true,
          },
        );
        clearErrors(id);
      }
    },
    [clearErrors, files, id, maxFiles, maxSize, setError, setValue],
  );

  React.useEffect(() => {
    return () => {
      () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    };
  }, [files]);

  const deleteFile = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    file: FileWithPreview,
  ) => {
    e.preventDefault();
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);

    setFiles(newFiles.length > 0 ? newFiles : []);
    setValue(id, newFiles.length > 0 ? newFiles : null, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const { getRootProps, getInputProps, isDragActive, isFocused, isDragReject } =
    useDropzone({
      onDrop,
      accept,
      maxFiles,
      maxSize,
    });

  return (
    <div>
      {withLabel && (
        <label className='text-gray-500 text-sm font-medium' htmlFor={id}>
          {label}
        </label>
      )}

      {readOnly && !files && (
        <div
          className={clsxm(
            'flex items-center gap-2.5 w-full rounded-lg',
            'border border-gray-300 shadow-sm',
            'min-h-[2.25rem] md:min-h-[2.5rem]',
            'px-3.5 py-0 border border-gray-300 text-base-secondary',
          )}
        >
          <TbPhotoOff className='h-5 w-5 flex-shrink-0 text-base-secondary' />
          <p> No file uploaded</p>
        </div>
      )}

      {!readOnly && files.length < maxFiles && (
        <Controller
          name={id}
          control={control}
          rules={validation}
          render={({ field }) => (
            <div
              className={clsxm([
                'focus:ring-primary-800 group focus:outline-none',
                withLabel && 'mt-1',
              ])}
              {...getRootProps()}
              ref={dropzoneRef}
            >
              <input {...field} value={undefined} {...getInputProps()} />
              <div className='pr-[.1px] w-full'>
                <div
                  className={clsxm(
                    'w-full cursor-pointer rounded-lg min-h-[10rem]',
                    'flex flex-col items-center justify-center gap-y-2 px-4 py-6',
                    error || isDragReject
                      ? 'dropzone-border-error border-red-500 group-focus:border-red-500'
                      : isDragActive || isFocused
                        ? 'dropzone-border-ondrag group-focus:border-primary-500'
                        : 'dropzone-border group-focus:border-primary-500',
                  )}
                >
                  <div className='w-10 h-10 text-gray-500 -z-10'>
                    <TbPhotoPlus className='w-full h-full' />
                  </div>
                  <div className='text-center -z-10 text-gray-500'>
                    {!isDragReject ? (
                      <p>
                        Seret dan lepas di sini
                        <span className={clsxm(isDragActive && 'hidden')}>
                          , atau klik untuk unggah file
                        </span>
                      </p>
                    ) : (
                      <p className='text-red-500'>
                        Unggah file dengan ekstensi .png, .jpg, atau .jpeg.
                      </p>
                    )}
                    <p className='text-sm mt-1'>{`max ${maxFiles} file, ${
                      maxFiles - (files?.length || 0)
                    } lagi`}</p>
                  </div>
                </div>
              </div>
              {helperText && (
                <p className='text-sm mt-1.5 text-gray-500'>{helperText}</p>
              )}
              {!hideError && error && (
                <p className='text-sm mt-1.5 text-red-500'>
                  {error.message?.toString()}
                </p>
              )}
            </div>
          )}
        />
      )}

      {files.length > 0 && (
        <ul className='mt-2 divide-y divide-gray-300 rounded-lg border-2 border-gray-200'>
          {files.map((file, index) => (
            <FilePreview
              key={index}
              readOnly={readOnly}
              file={file}
              deleteFile={deleteFile}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
