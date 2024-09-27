import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/lib/clsxm';

export default function BengkelMainPage() {
  const MOCK_STATS_DATA = [
    {
      title: 'Akses Pasar Digital',
      desc: 'Peningkatan Pelanggan Baru',
      number: '28%',
    },
    {
      title: 'Peningkatan Pendapatan',
      desc: 'Lewat BengCare',
      number: '21%',
    },
    {
      title: 'Efisiensi Operasional',
      desc: 'Sistem Manajemen BengCare',
      number: '35%',
    },
  ];

  const MOCK_LIST_DATA = [
    {
      value: 'Business AI Assistant',
      children: [
        { value: 'Seperti memiliki asisten pribadi' },
        { value: 'Memudahkan pengambilan keputusan' },
        { value: 'Visualisasi Data' },
      ],
    },
    { value: 'Manajemen Keuangan' },
    { value: 'Manajemen Suku Cadangan' },
    { value: 'Manajemen Montir' },
  ];

  const MOCK_BENEFIT_DATA = [
    {
      title: 'BengCare App (untuk bengkel)',
      desc: [
        'Melalui aplikasi ini, Anda dapat dengan mudah mengelola bengkel melalui satu platform yang terintegrasi. Mulai dari melihat analitik pengunjung harian, hingga mengatur kuota servis setiap hari, semuanya bisa dilakukan dalam satu aplikasi.',
        'Fitur chat memudahkan komunikasi dengan pelanggan, sementara riwayat pesanan dan servis dapat dilacak dan diatur dengan detail, mulai dari analisa hingga penentuan biaya.',
      ],
      media: (
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/j0BZC5NLZc4?si=b2buFihxC-9qKPkz'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          className='border-none w-full rounded-lg shrink-0'
          style={{ border: 'none' }}
        />
      ),
    },
    {
      title: 'Sistem Manajemen BengCare',
      desc: [
        'BengCare hadir dengan sistem manajemen bengkel yang memudahkan Anda dalam manajemen bisnis Anda. Dengan BengCare, Anda dapat mengelola keuangan, montir, dan suku cadang dengan mudah.',
        'Fitur-fitur ini akan membantu Anda dalam mengoptimalkan bisnis Anda, sehingga Anda dapat fokus untuk meningkatkan kepuasaan pelanggan dengan meningkatkan kualitas servis dan pelayanan Anda.',
      ],
      media: (
        <Image
          src='/homepage/coming-soon.png'
          alt='Placeholder Image'
          width={455}
          height={303}
          className='w-full'
        />
      ),
    },
  ];

  return (
    <div>
      <section className='min-h-[calc(100vh-100px)] layout flex flex-col items-center gap-10 py-20'>
        <div className='space-y-4 text-center max-w-4xl'>
          <h1 className='text-4xl md:text-5xl font-semibold'>
            <span className='text-primary-700'>Tingkatkan</span> pendapatan Anda
            dengan <span className='text-primary-500'>BengCare</span>
          </h1>
          <p className='text-gray-800 md:text-lg'>
            BengCare merupakan sebuah aplikasi yang{' '}
            <span className='text-primary-700 font-semibold'>
              meningkatkan pendapatan
            </span>{' '}
            bengkel-bengkel UMKM di Indonesia dengan memberikan solusi untuk
            masalah kepercayaan pelanggan melalui sistem rekomendasi kami yang
            menjamin kualitas dan harga yang adil.
          </p>
        </div>

        <p className='text-primary-700 md:text-2xl font-semibold mt-14'>
          Mengapa Bergabung dengan BengCare?
        </p>
        <div className='w-full flex flex-col md:flex-row items-center justify-between gap-y-10'>
          {MOCK_STATS_DATA.map(({ title, desc, number }, index) => (
            <div key={index} className='text-center'>
              <h3 className='text-2xl font-medium'>{title}</h3>
              <p className='mt-1'>{desc}</p>
              <p className='text-4xl md:text-5xl font-semibold text-primary-700 mt-6'>
                {number}
              </p>
            </div>
          ))}
        </div>

        <Link
          href='/registrasi-bengkel'
          className='inline-flex items-center justify-center py-[8px] px-[16px] min-h-11 bg-primary-700 rounded-lg text-white font-medium hover:bg-primary-700/90'
        >
          Daftarkan Bengkel
        </Link>
      </section>

      <section className='bg-gray-100'>
        <div className='min-h-[calc(100vh-100px)] layout flex flex-col md:flex-row items-center gap-y-0 py-20'>
          <div className='md:w-1/2 space-y-4'>
            <p className='md:text-lg'>Kenapa BengCare?</p>
            <h2 className='text-3xl md:text-5xl font-semibold md:leading-tight'>
              Manajemen bengkel yang salah menghalangi{' '}
              <span className='text-primary-700'>pertumbuhan bengkel</span>{' '}
              Anda!
            </h2>

            <p className='md:text-lg pt-6'>
              BengCare hadir untuk menemukan Anda dengan pelanggan baru, dan
              juga mengoptimalkan bisnis Anda dengan sistem:
            </p>

            <ul className='list-disc list-inside md:text-lg'>
              {MOCK_LIST_DATA.map(({ value, children }) => (
                <li key={value}>
                  {value}
                  {children && (
                    <ul className='pl-6 list-[revert] list-inside'>
                      {children.map((c) => (
                        <li key={c.value}>{c.value}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className='md:w-1/2 flex items-center justify-end'>
            <Image
              src='/homepage/hero-image.png'
              alt='Placeholder Image'
              width={438}
              height={652}
              className=''
            />
          </div>
        </div>
      </section>

      <section className='min-h-[calc(100vh-100px)] layout flex flex-col items-center gap-12 py-20'>
        <div className='text-center space-y-2'>
          <h2 className='text-3xl md:text-4xl font-semibold'>
            Maksimalkan potensi bisnis Anda dengan{' '}
            <span className='text-primary-500'>BengCare</span>!
          </h2>
          <p className='md:text-lg text-gray-800'>
            Akses pasar digital yang lebih luas, tingkatkan pendapatan dan
            efisiensi operasional Anda
          </p>
        </div>

        <div className='max-w-4xl rounded-lg overflow-hidden border shadow-md divide-y'>
          <div className='bg-gray-100 p-4 md:p-6'>
            <h3 className='md:text-lg font-semibold'>
              Dengan BengCare, Anda dapat
            </h3>
          </div>

          <div className='p-6 md:p-8 space-y-6'>
            <h4 className='text-2xl md:text-3xl font-semibold'>
              Tingkatkan{' '}
              <span className='text-primary-700'>performa bisnis</span> Anda
              lewat
            </h4>

            <ul className='list-disc list-inside md:text-lg'>
              <li>Akses ke pasar digital yang lebih besar</li>
              <li>Pengelolaan bisnis yang lebih efisien</li>
              <li>Asisten AI Pribadi</li>
            </ul>

            <p className='md:text-lg'>
              Aplikasi BengCare membantu Anda untuk mengurus segala hal bisnis
              Anda dari bertemu dengan pelanggan hingga manajemen servis,
              montir, keuangan, dan analisis data bisnis Anda.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 py-14'>
        <div className='layout max-w-4xl mx-auto space-y-4'>
          <p className='md:text-lg'>Gabung dengan BengCare</p>
          <h2 className='text-3xl md:text-4xl font-semibold'>
            Kami maksimalkan{' '}
            <span className='text-primary-700'>pendapatan</span> bisnis Anda
          </h2>
        </div>
      </section>

      <section className='min-h-[calc(100vh-100px)] layout flex flex-col items-center gap-20 py-20'>
        {MOCK_BENEFIT_DATA.map(({ title, desc, media }, index) => (
          <div key={index} className='flex flex-col lg:flex-row gap-10'>
            <div
              className={clsxm(
                'lg:w-5/12 shrink-0',
                index % 2 == 0 ? 'lg:order-1' : 'lg:order-2',
              )}
            >
              {media}
            </div>
            <div
              className={clsxm(
                index % 2 == 0 ? 'lg:order-2' : 'lg:order-1 lg:text-right',
                'flex-1 space-y-6 py-3 md:py-6',
              )}
            >
              <h3 className='text-2xl md:text-4xl font-semibold'>{title}</h3>
              <div className='space-y-4'>
                {desc.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className='bg-gray-100 py-14'>
        <div className='layout space-y-9 flex flex-col items-center'>
          <h1 className='text-4xl md:text-5xl font-semibold text-center'>
            Ayo tumbuhkan bisnis Anda dengan{' '}
            <span className='text-primary-500'>BengCare</span>
          </h1>

          <Link
            href='/registrasi-bengkel'
            className='inline-flex items-center justify-center py-[8px] px-[16px] min-h-11 bg-primary-700 rounded-lg text-white font-medium hover:bg-primary-700/90'
          >
            Daftarkan Bengkel
          </Link>
        </div>
      </section>

      <section className='py-14'>
        <div className='layout space-y-4'>
          <h3 className='text-xl font-medium text-center text-gray-500 uppercase'>
            Di dukung oleh
          </h3>
          <div className='flex flex-col gap-y-4 md:flex-row items-center justify-evenly'>
            <div className='w-1/3 flex justify-center'>
              <Image
                src='/kemendikbud.png'
                alt='Google Logo'
                width={512}
                height={300}
                className='w-40'
              />
            </div>
            <div className='w-1/3 flex justify-center'>
              <Image
                src='/goto.png'
                alt='Goto Logo'
                width={1000}
                height={417}
                className='w-28'
              />
            </div>
            <div className='w-1/3 flex justify-center'>
              <Image
                src='/google.png'
                alt='Google Logo'
                width={512}
                height={300}
                className='w-40'
              />
            </div>
            <div className='w-1/3 flex justify-center'>
              <Image
                src='/traveloka.png'
                alt='Traveloka Logo'
                width={1350}
                height={595}
                className='w-56'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
