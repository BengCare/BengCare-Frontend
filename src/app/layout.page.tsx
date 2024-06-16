import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import Image from 'next/image';
import IconText from '@/components/IconText';
import Toast from '@/components/Toast';
import Providers from '@/components/Providers';

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
    <html lang='en'>
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <body className={poppins.className}>
        <NextTopLoader />
        <Toast />
        <nav className='bg-white h-[100px] shadow-sm'>
          <div className='layout flex items-center h-full justify-between'>
            <Image
              src='/logo-primary500-white.svg'
              alt='logo'
              height={48}
              width={200}
              className='object-contain'
            />
            <div className='grid gap-8 grid-flow-col text-black font-medium'>
              <a href='/#'>BERANDA</a>
              <a href='/#tentang-kami'>TENTANG KAMI</a>
              <a href='/#faq'>FAQ</a>
            </div>
          </div>
        </nav>
        <main className='layout min-h-screen'>
          <Providers>{children}</Providers>
        </main>
        <footer className='h-[400px] bg-primary-700'>
          <div className='layout grid grid-cols-2 py-[60px]'>
            <div className='grid gap-6'>
              <div className='grid gap-3'>
                <p className='text-white font-medium'>Kontak Kami</p>
                <IconText
                  iconWidth={40}
                  iconHeight={40}
                  src='/footer/instagram.png'
                >
                  <a
                    href='https://www.instagram.com/bengcare.id/'
                    className='text-white font-semibold'
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
                    className='text-white font-semibold'
                  >
                    admin@bengcare.com
                  </a>
                </IconText>
                <IconText
                  iconWidth={40}
                  iconHeight={40}
                  src='/footer/youtube.png'
                >
                  <a href='#' className='text-white font-semibold'>
                    @BengCareID
                  </a>
                </IconText>
              </div>
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
            <div className='flex justify-between flex-col items-end'>
              <Image
                src='/logo-white-primary700.svg'
                alt='logo'
                height={62}
                width={257}
                className='object-contain'
              />
              <p className='text-white font-medium text-lg'>
                BengCare @ 2024. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
