'use client';

import LogoInput from '@/components/LogoInput';
import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';
import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import Button from '@/components/Button';
import toast from 'react-hot-toast';

interface EarlyAccess {
  email: string;
}
export default function Home() {
  const methods = useForm<EarlyAccess>();
  const { handleSubmit } = methods;

  const { mutate, isPending } = useMutationToast<void, EarlyAccess>(
    useMutation({
      mutationFn: (data: EarlyAccess) => api.post('/early-access', data),
    }),
    {
      loading: 'Mendaftar...',
      success: 'Terima kasih sudah mendaftar!',
      error: 'Terjadi kesalahan. Coba lagi nanti.',
    },
  );

  return (
    <main className='layout'>
      <title>Homepage | BengCare</title>
      <div className='my-[60px] flex gap-[20px]'>
        <div className='relative flex justify-center flex-col gap-[20px]'>
          <p className='text-5xl font-semibold border-b-2 pb-[20px] leading-[1.5]'>
            SOLUSI PENCARIAN{' '}
            <span className='font-bold text-primary-700'>BENGKEL TERBAIK</span>{' '}
            DI GENGGAMAN ANDA
          </p>
          <p>
            Bergabung sekarang untuk menjadi pengguna bengCare dan nikmati
            informasi terkini dari BengCare.
          </p>
          <FormProvider {...methods}>
            <form
              className='flex gap-[20px] w-full'
              onSubmit={handleSubmit((data: EarlyAccess) => mutate(data))}
            >
              <LogoInput
                className='w-full'
                src='/homepage/email-input.png'
                iconWidth={18}
                iconHeight={16}
                id='email'
                name='email'
                placeholder='Masukkan email anda'
              />
              <Button isPending={isPending} type='submit'>
                GABUNG
              </Button>
            </form>
          </FormProvider>

          <div className='absolute bottom-0'>
            <div className='flex gap-[18px]'>
              <Image
                src='/download-googleplay.png'
                alt='download google play'
                height={72}
                width={209}
                className='cursor-pointer object-contain'
              />
              <Image
                src='/download-appstore.png'
                alt='download app store'
                height={72}
                width={193}
                className='cursor-pointe object-contain'
              />
            </div>
          </div>
        </div>
        <Image
          src='/homepage/hero-border-full.png'
          alt='logo'
          height={804}
          width={60}
          className='object-contain'
        />
        <Image
          src='/homepage/hero-image.png'
          alt='logo'
          height={652}
          width={438}
          className='object-contain'
        />
      </div>
    </main>
  );
}
