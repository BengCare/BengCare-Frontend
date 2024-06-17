'use client';

import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import LogoInput from '@/components/LogoInput';
import useMutationToast from '@/hooks/useMutationToast';
import api from '@/lib/api';
import Accordion from '@/components/Accordion';

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
    <main>
      <title>Homepage | BengCare</title>
      <div className='layout'>
        <div className='mt-[60px] flex gap-[20px]'>
          <div className='relative flex justify-center flex-col gap-[16px] md:gap-[32px] xl:gap-[24px]'>
            <h1 className='text-4xl leading-normal lg:text-5xl xl:leading-[1.5] font-semibold md:border-b-2 md:pb-[20px]'>
              SOLUSI PENCARIAN{' '}
              <span className='font-bold text-primary-700 '>BENGKEL TERBAIK</span>{' '}
              DI GENGGAMAN ANDA
            </h1>
            <Image
              src='/homepage/border-horizontal-full.png'
              alt='logo'
              height={24}
              width={288}
              className='hidden sm:block md:hidden layout object-contain'
            />
            <Image
              src='/homepage/border-horizontal-small.png'
              alt='logo'
              height={24}
              width={288}
              className='sm:hidden layout object-contain'
            />
            <p className='text-sm xl:text-base'>
              Bergabung sekarang untuk menjadi pengguna bengCare dan nikmati
              informasi terkini dari BengCare.
            </p>
            <FormProvider {...methods}>
              <form
                className='flex gap-[20px] w-full'
                onSubmit={handleSubmit((data: EarlyAccess) => mutate(data))}
              >
                <LogoInput
                  className='w-full gap-[6px] lg:gap-[10px]'
                  src='/homepage/email-input.png'
                  iconWidth={18}
                  iconHeight={16}
                  id='email'
                  name='email'
                  placeholder='Masukkan email anda'
                  inputClassName='py-[6px] pr-[10px] lg:py-[8px] lg:pr-[12px] text-xs lg:text-base'
                  iconClassName='w-[14px] lg:w-[16px]'
                />
                <Button isPending={isPending} type='submit' className='text-sm lg:text-base py-[6px] px-[12px] lg:py-[8px] lg:px-[16px]'>
                  GABUNG
                </Button>
              </form>
            </FormProvider>
            <div className='h-[72px]'></div>
            <div className='absolute bottom-0'>
              <div className='flex flex-row lg:flex-row md:flex-col gap-[18px] w-[140px] lg:w-[180px]'>
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
                  className='cursor-pointer object-contain'
                />
              </div>
            </div>
          </div>
          <Image
            src='/homepage/hero-border-full.png'
            alt='logo'
            height={804}
            width={60}
            className='object-contain hidden md:block w-[50px] lg:w-auto'
          />
          <Image
            src='/homepage/hero-image.png'
            alt='person working on a car'
            height={652}
            width={438}
            className='object-contain hidden md:block w-1/2 lg:w-full'
          />
        </div>
      </div>
      <div className='pt-[100px]' id='tentang-kami'></div>
      <div className='bg-primary-100 border-y-8 border-primary-700'>
        <div className='layout py-16'>
          <div className='flex flex-col md:flex-row gap-12 items-center'>
            <div>
              <h1 className='text-primary-800 font-bold text-[32px]'>TENTANG KAMI</h1>
              <p className='text-black text-justify text-sm lg:text-base'>BengCare adalah aplikasi inovatif yang dirancang untuk memenuhi semua kebutuhan otomotif Sobat BengCare dengan mudah dan efisien. Kami memahami betapa merepotkannya mencari bengkel yang tepat dan mengatur jadwal perbaikan atau perawatan kendaraan. Oleh karena itu, kami hadir untuk mengubah pengalaman Anda menjadi lebih sederhana dan nyaman. Dengan BengCare, Anda bisa menemukan bengkel terbaik yang telah direkomendasikan oleh pengguna lain, memesan layanan hanya dengan beberapa klik, dan merasa tenang karena kendaraan Anda ditangani oleh profesional terpercaya. Apapun kebutuhan otomotif Anda, mulai dari perawatan rutin hingga perbaikan mendesak, BengCare siap menjadi solusi terbaik anda.</p>
            </div>
            <Image
              src='/homepage/coming-soon.png'
              alt='coming soon!'
              height={303}
              width={455}
              className='object-contain md:w-1/2 lg:w-full'
            />
          </div>
        </div>
      </div>
      <div className='layout py-12 md:py-16'>
        <div className='flex flex-col md:flex-row gap-12 items-center'>
          <Image
            src='/homepage/unkels.png'
            alt='Unkel'
            height={303}
            width={455}
            className='object-contain md:w-1/2 lg:w-full'
          />
          <div>
            <h1 className='text-primary-800 font-bold text-[32px]'>UNKEL</h1>
            <p className='text-black text-justify text-sm lg:text-base'>Unkel terinspirasi dari kata Uncle dan Bengkel. Unkel hadir untuk membuat perjalanan Anda di dunia bengkel kendaraan menjadi menyenangkan dan bebas masalah. Dengan senyum lebar dan hati yang besar, Unkel siap membantu Anda memilih bengkel terbaik untuk kendaraan Anda, baik itu untuk perawatan rutin maupun perbaikan kompleks, Unkel selalu siap membantu. Ayo berkendara bersama Unkel!</p>
          </div>
        </div>
      </div>
      <Image
        src='/homepage/border-horizontal-full.png'
        alt='logo'
        height={60}
        width={1200}
        className='hidden md:block layout object-contain'
      />
      <Image
        src='/homepage/border-horizontal-small.png'
        alt='logo'
        height={60}
        width={1200}
        className='md:hidden layout object-contain'
      />
      <div className='pt-[40px] md:pt-[60px]' id='faq'></div>
      <div className='layout pb-[40px] md:pb-[60px]'>
        <h1 className='text-[32px] font-bold text-primary-800'>FREQUENTLY ASKED QUESTIONS</h1>
        <Accordion title="Bagaimana cara menemukan bengkel terbaik di BengCare?">
          <p
            className='text-sm text-gray-400'
          >
            Anda dapat menggunakan fitur pencarian dan filter di BengCare untuk menemukan bengkel yang telah direkomendasikan oleh pengguna lain. Cukup masukkan lokasi dan jenis layanan yang Anda butuhkan, dan kami akan menunjukkan daftar bengkel terbaik di area Anda.
          </p>
        </Accordion>
        <Accordion title="Apakah saya bisa memilih jadwal layanan sesuai keinginan saya?">
          <p
            className='text-sm text-gray-400'
          >
            Anda dapat menggunakan fitur pencarian dan filter di BengCare untuk menemukan bengkel yang telah direkomendasikan oleh pengguna lain. Cukup masukkan lokasi dan jenis layanan yang Anda butuhkan, dan kami akan menunjukkan daftar bengkel terbaik di area Anda.
          </p>
        </Accordion>
        <Accordion title="Bagaimana saya tahu bahwa bengkel yang terdaftar di BengCare terpercaya?">
          <p
            className='text-sm text-gray-400'
          >
            Anda dapat menggunakan fitur pencarian dan filter di BengCare untuk menemukan bengkel yang telah direkomendasikan oleh pengguna lain. Cukup masukkan lokasi dan jenis layanan yang Anda butuhkan, dan kami akan menunjukkan daftar bengkel terbaik di area Anda.
          </p>
        </Accordion>
        <Accordion title="Apakah saya bisa membatalkan jadwal layanan?">
          <p
            className='text-sm text-gray-400'
          >
            Anda dapat menggunakan fitur pencarian dan filter di BengCare untuk menemukan bengkel yang telah direkomendasikan oleh pengguna lain. Cukup masukkan lokasi dan jenis layanan yang Anda butuhkan, dan kami akan menunjukkan daftar bengkel terbaik di area Anda.
          </p>
        </Accordion>
      </div>
    </main>
  );
}
