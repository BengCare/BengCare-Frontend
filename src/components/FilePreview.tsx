import 'react-image-lightbox-rotation/style.css';

import { Link2, Trash, View } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';
import { TbPhotoCheck, TbPhotoShare } from 'react-icons/tb';
import Lightbox from 'react-image-lightbox-rotation';

import Button from '@/components/Button';
import { FileWithPreview } from '@/components/Dropzone';

type FilePreviewProps = {
  file: FileWithPreview;
  deleteFile?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    file: FileWithPreview,
  ) => void;
  readOnly?: boolean;
};

export default function FilePreview({
  deleteFile,
  file,
  readOnly,
}: FilePreviewProps): React.ReactElement {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteFile?.(e, file);
  };

  const imagesType = ['image/png', 'image/jpg', 'image/jpeg'];
  const typeIncluded = imagesType.includes(file.type);

  return (
    <>
      <li
        className='flex min-h-12 items-center justify-between py-0 pl-3 pr-3 z-50'
        key={file.name}
      >
        <div className='flex w-0 flex-1 items-center'>
          {typeIncluded ? (
            <TbPhotoCheck
              className='h-5 w-5 flex-shrink-0 text-gray-400'
              aria-hidden='true'
            />
          ) : (
            <TbPhotoShare
              className='h-5 w-5 flex-shrink-0 text-gray-400'
              aria-hidden='true'
            />
          )}
          <p className='ml-2 w-0 flex-1 truncate'>{file.name}</p>
        </div>
        <div className='ml-4 flex flex-shrink-0 items-center gap-1'>
          {typeIncluded ? (
            <Button
              type='button'
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className='aspect-square w-7 h-7 inline-flex items-center justify-center text-gray-500 bg-transparent p-0 hover:text-gray-400 rounded-md focus:outline-none'
            >
              <View className='w-5 h-5' />
            </Button>
          ) : (
            <Link
              href={file.preview}
              target='_blank'
              className='w-7 h-7 aspect-square inline-flex items-center justify-center'
            >
              <Link2 className='w-5 h-5 text-gray-500 hover:text-gray-400' />
            </Link>
          )}
          {!readOnly && (
            <Button
              type='button'
              onClick={handleDelete}
              className='aspect-square w-7 h-7 inline-flex items-center justify-center text-red-500 bg-transparent p-0 hover:text-red-400 rounded-md focus:outline-none'
            >
              <Trash className='w-5 h-5' />
            </Button>
          )}
        </div>
      </li>
      {isOpen && (
        <Lightbox
          mainSrc={file.preview}
          rotate={0}
          onCloseRequest={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
