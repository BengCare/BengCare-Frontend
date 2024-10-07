'use client';

import Image from 'next/image';

import Accordion from '@/components/Accordion';
import SubscriptionForm from '@/components/ui/subscription-form';
import SupportSection from '@/components/ui/support-section';
import { COVERS, SUPPORTS } from '@/constant/support';

export default function Home() {
  return (
    <main>
      <div className='layout'>
        <div className='mt-[60px] flex gap-[20px]'>
          <div className='relative flex justify-center flex-col gap-[16px] md:gap-[10px] lg:gap-[24px] xl:gap-[24px]'>
            <h1 className='text-4xl leading-tight md:leading-normal lg:text-5xl lg:leading-normal font-semibold md:border-b-2 md:pb-[20px]'>
              SOLUSI PENCARIAN{' '}
              <span className='font-bold text-primary-700 '>
                BENGKEL TERBAIK
              </span>{' '}
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
              Bergabung sekarang untuk menjadi pengguna BengCare dan nikmati
              informasi terkini dari BengCare.
            </p>

            <div className='max-w-md'>
              <SubscriptionForm />
            </div>

            <div className='h-[72px]'></div>
            <div className='absolute bottom-0'>
              <div className='flex flex-row gap-[10px] sm:gap-[18px]'>
                <Image
                  src='/download-googleplay.svg'
                  alt='download google play'
                  height={72}
                  width={209}
                  className='cursor-pointer object-contain w-fit h-[50px] lg:h-[70px] object-left-bottom'
                />
                <Image
                  src='/download-appstore.svg'
                  alt='download app store'
                  height={60}
                  width={193}
                  className='cursor-pointer object-contain w-fit h-[50px] lg:h-[70px] object-left-bottom'
                />
              </div>
            </div>
          </div>
          <Image
            src='/homepage/hero-border-full.png'
            alt='logo'
            height={804}
            width={60}
            className='object-contain hidden md:block h-[432px] lg:h-[560px] xl:h-[804px]'
          />
          <Image
            src='/homepage/hero-image.png'
            alt='person working on a car'
            height={652}
            width={438}
            className='object-contain hidden md:block w-1/2 lg:w-full'
            priority
          />
        </div>
      </div>
      <div className='pt-[100px]' id='tentang-kami'></div>
      <div className='bg-primary-100 border-y-8 border-primary-700'>
        <div className='layout py-16'>
          <div className='flex flex-col md:flex-row gap-12 items-center'>
            <div className='flex-1'>
              <h1 className='text-primary-800 font-bold text-[32px]'>
                TENTANG KAMI
              </h1>
              <p className='text-black text-justify text-sm lg:text-base'>
                BengCare adalah aplikasi inovatif yang dirancang untuk memenuhi
                semua kebutuhan otomotif Sobat BengCare dengan mudah dan
                efisien. Kami memahami betapa merepotkannya mencari bengkel yang
                tepat dan mengatur jadwal perbaikan atau perawatan kendaraan.
                Oleh karena itu, kami hadir untuk mengubah pengalaman Anda
                menjadi lebih sederhana dan nyaman. Dengan BengCare, Anda bisa
                menemukan bengkel terbaik yang telah direkomendasikan oleh
                pengguna lain, memesan layanan hanya dengan beberapa klik, dan
                merasa tenang karena kendaraan Anda ditangani oleh profesional
                terpercaya. Apapun kebutuhan otomotif Anda, mulai dari perawatan
                rutin hingga perbaikan mendesak, BengCare siap menjadi solusi
                terbaik anda.
              </p>
            </div>

            <iframe
              width='480'
              height='270'
              src='https://www.youtube.com/embed/nCeEQVYyLLk?si=jZ1mCIRPgbGUUYfQ'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
              className='border-none w-full md:w-1/3 rounded-lg shrink-0'
              style={{ border: 'none' }}
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
            <p className='text-black text-justify text-sm lg:text-base'>
              Unkel adalah asisten AI di BengCare yang terinspirasi dari kata
              &quot;uncle&quot; dan &quot;bengkel&quot;. Dengan senyum lebar dan
              hati yang besar, Unkel siap menjawab pertanyaan Anda 24/7. Dari
              rekomendasi bengkel hingga solusi cepat atas masalah kendaraan,
              Unkel ada untuk Anda tanpa perlu menunggu. Coba konsultasi dengan
              Unkel sekarang dengan unduh BengCare gratis!
            </p>
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
        <h1 className='text-[32px] font-bold text-primary-800'>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <Accordion title='Bagaimana cara menemukan bengkel terbaik di BengCare?'>
          <p className='text-sm text-gray-400'>
            Anda dapat menemukan bengkel terbaik di BengCare dengan menggunakan
            fitur rekomendasi kami yang terdapat di Home Page, terdapat 2
            rekomendasi yang akan membantu Anda, rekomendasi berdasarkan
            kendaraan Anda dan rekomendasi berdasarkan lokasi Anda. Aplikasi
            BengCare dilengkapi dengan AI untuk merekomendasikan bengkel-bengkel
            terpercaya berdasarkan lokasi Anda dan ulasan dari pengguna lainnya.
          </p>
        </Accordion>
        <Accordion title='Apakah saya bisa memilih jadwal layanan sesuai keinginan saya?'>
          <p className='text-sm text-gray-400'>
            Benar, Anda dapat memilih jadwal layanan sesuai keinginan Anda
            melalui aplikasi BengCare. Anda dapat memilih layanan yang Anda
            butuhkan dan bengkel yang diinginkan, Anda dapat memilih tanggal dan
            waktu yang tersedia yang sesuai dengan jadwal Anda, setelah Anda
            berkonsultasi dengan Unkel (Chatbot BengCare) atau mendeskripsikan
            masalah kendaraan Anda secara manual.
          </p>
        </Accordion>
        <Accordion title='Bagaimana saya tahu bahwa bengkel yang terdaftar di BengCare terpercaya?'>
          <p className='text-sm text-gray-400'>
            BengCare melakukan proses verifikasi yang ketat terhadap setiap
            bengkel yang terdaftar di platform kami. Kami menilai kualitas
            layanan, kepuasan pelanggan, dan transparansi biaya untuk memastikan
            bahwa bengkel yang terdaftar adalah yang terbaik di kelasnya.
          </p>
        </Accordion>
        <Accordion title='Apakah saya bisa membatalkan jadwal layanan?'>
          <p className='text-sm text-gray-400'>
            Anda bisa membatalkan jadwal layanan melalui aplikasi BengCare
            dengan menekan tombol Riwayat, lalu Menuggu konfirmasi atau
            diproses. Anda dapat melakukan pembatalan dengan mudah melalui menu
            pemesanan di aplikasi, dan pastikan untuk memberitahukan bengkel
            terkait secepat mungkin jika ada perubahan jadwal.
          </p>
        </Accordion>
      </div>

      <SupportSection label='Didukung Oleh' images={SUPPORTS} />
      <SupportSection label='Pernah Diliput Oleh' images={COVERS} />
    </main>
  );
}
