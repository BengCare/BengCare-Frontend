import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import {} from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

import IconText from '@/components/IconText';
import Providers from '@/components/Providers';
import Toast from '@/components/Toast';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'BengCare',
  description: 'BengCare, Connecting you to trusted automotive services!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' style={{ scrollBehavior: 'smooth' }}>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body className={poppins.className}>
        <NextTopLoader />
        <Toast />
        <nav className='fixed top-0 w-full bg-white h-[100px] shadow-sm z-50'>
          <div className='layout flex items-center h-full justify-between gap-6'>
            <Link href='/'>
              <Image
                src='/logo-primary500-white.svg'
                alt='logo'
                height={48}
                width={200}
                className='object-contain'
              />
            </Link>
            <div className='sm:flex items-center gap-4 lg:gap-8 text-black font-medium'>
              <Link href='/#' className='hidden md:block text-sm md:text-base'>
                BERANDA
              </Link>
              <Link href='/#tentang-kami' className='hidden md:block text-sm md:text-base'>
                TENTANG KAMI
              </Link>
              <Link href='/#faq' className='hidden md:block text-sm md:text-base'>
                FAQ
              </Link>
              <Link href='/artikel' className='hidden sm:block text-sm md:text-base'>
                ARTIKEL
              </Link>

              <Link
                href='/registrasi-bengkel'
                className='inline-flex items-center justify-center text-center sm:h-11 text-xs sm:text-base px-2 py-2 bg-primary-700 rounded-lg text-white font-medium hover:bg-primary-700/90'
              >
                Daftarkan Bengkel
              </Link>
            </div>
          </div>
        </nav>
        <main className='min-h-screen text-black pt-[100px]'>
          <Providers>{children}</Providers>
        </main>
        <footer className='md:h-[400px] bg-primary-700'>
          <div className='layout grid md:grid-cols-2 py-[60px]'>
            <div className='grid gap-6'>
              <Image
                src='/logo-white-primary700.svg'
                alt='logo'
                height={62}
                width={257}
                className='object-contain md:hidden'
              />
              <div className='grid gap-3'>
                <p className='text-white font-medium'>Kontak Kami</p>
                <IconText
                  iconWidth={40}
                  iconHeight={40}
                  src='/footer/instagram.png'
                >
                  <a
                    href='https://www.instagram.com/bengcare.id/'
                    className='text-white font-semibold text-sm md:text-base'
                  >
                    @bengcare.id
                  </a>
                </IconText>
                <IconText
                  iconWidth={40}
                  iconHeight={40}
                  src='/footer/email.png'
                >
                  <a
                    href='mailto:admin@bengcare.com'
                    className='text-white font-semibold text-sm md:text-base'
                  >
                    admin@bengcare.com
                  </a>
                </IconText>
                <IconText
                  iconWidth={40}
                  iconHeight={40}
                  src='/footer/youtube.png'
                >
                  <a
                    href='https://www.youtube.com/@bengcareid'
                    className='text-white font-semibold text-sm md:text-base'
                  >
                    @BengCareID
                  </a>
                </IconText>
              </div>
              <div className='flex flex-col md:flex-row gap-[12px] lg:gap-[18px]'>
                <Image
                  src='/download-googleplay.svg'
                  alt='download google play'
                  height={72}
                  width={209}
                  className='cursor-pointer object-contain h-[60px] lg:h-[70px] object-left'
                />
                <Image
                  src='/download-appstore.svg'
                  alt='download app store'
                  height={72}
                  width={193}
                  className='cursor-pointer object-contain h-[60px] lg:h-[70px] object-left'
                />
              </div>
              <p className='text-white font-medium text-sm md:hidden'>
                BengCare @ 2024. All rights reserved.
              </p>
            </div>
            <div className='hidden md:flex justify-between flex-col items-end'>
              <Image
                src='/logo-white-primary700.svg'
                alt='logo'
                height={62}
                width={257}
                className='object-contain'
              />
              <div>
                <p className='text-white font-medium text-lg'>
                  BengCare @ 2024. All rights reserved.
                </p>
                <p className='text-white text-sm text-right'>
                  <a href='/privacy-policy'>Privacy Policy</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
