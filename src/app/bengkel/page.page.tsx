import Image from 'next/image';
import Link from 'next/link';

import clsxm from '@/lib/clsxm';

export default function BengkelMainPage() {
  const MOCK_STATS_DATA = [
    { title: 'Customer Pay Hours', desc: 'Per Repair Order', number: '0,23' },
    {
      title: 'Added Service Recommendations',
      desc: 'Closing Rate',
      number: '14%',
    },
    {
      title: 'Monthly Gross Profit',
      desc: 'After paying technicians',
      number: '$23,000',
    },
  ];

  const MOCK_LIST_DATA = [
    { value: 'Essential tool for Service Advisors and BDC' },
    {
      value: 'Estimates reflect high quality and fair (not low) pricing',
      children: [
        { value: 'Labor Time/Hours: MOTOR Labor' },
        { value: 'Parts: OEM MSRP and quality aftermarket MSRP' },
        { value: 'Labor Rates: Local dealer and quality independents' },
      ],
    },
    { value: 'Presented as a range' },
  ];

  const MOCK_BENEFIT_DATA = [
    {
      title: 'Signage',
      desc: [
        'BengCare Certified Dealers are provided free signage to showcase your prices are fair and help you build trust with customers. This includes indoor, outdoor, and service advisor desk signage.',
        'BengCare Certification calls out your dedication to fair pricing and high-quality work and our goal is to make it easier for you to show off your qualifications to potential customers at all stages of the car repair process.',
      ],
    },
    {
      title: 'Marketing Resources',
      desc: [
        "Your Marketing team will receive content and designs to showcase your validated fair pricing, and we provide custom assets based on your store's needs. This includes signage, full access to our marketing resources and social media.",
        "We also provide the Fair Price Estimator to put on your website to help increase conversion and boost your Google ranking by leveraging BengCare's industry leading SEO.",
      ],
    },
    {
      title: 'Training & Account Management',
      desc: [
        "Improve customer conversion and increase the value you get from BengCare with your Dedicated Account Manager. We'll meet with you regularly to review your KPIs, metrics, and store performance to ensure you are maximizing revenue.",
        "Your service advisors and BDC team will get hands-on training on the features of BengCare's Fair Price Estimator, leveraging the BengCare brand to overcome price objections, and turning shoppers into customers. You'll get ongoing training and access to our video resource center for refresher and new employee training on BengCare's tools.",
      ],
    },
    {
      title: 'Talk Tracks',
      desc: [
        'Service Advisors and BDC will be trained on how to share your BengCare validation and use the Estimator to overcome price objections. Your staff will receive talk tracks and your BDC team will receive assets to keep at their desk to reference when booking appointments.',
      ],
    },
  ];

  return (
    <div>
      <section className='min-h-[calc(100vh-100px)] layout flex flex-col items-center gap-20 py-20'>
        <div className='space-y-4 text-center max-w-4xl'>
          <h1 className='text-4xl md:text-5xl font-semibold'>
            <span className='text-primary-700'>Unlock</span> a $266 billion
            dollar market
          </h1>
          <p className='text-gray-800 md:text-lg'>
            BengCare has helped service departments increase customer pay
            hours, added service recommendations, and gross profit by directly
            overcoming the dominant reason customers stop getting their vehicles
            repaired at dealerships post warranty: price perception.{' '}
          </p>
        </div>

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
          Gabung BengCare
        </Link>
      </section>

      <section className='bg-gray-100'>
        <div className='min-h-[calc(100vh-100px)] layout flex flex-col md:flex-row items-center gap-y-20 py-20'>
          <div className='md:w-1/2 space-y-8'>
            <p className='md:text-lg'>Why BengCare?</p>
            <h2 className='text-3xl md:text-5xl font-semibold md:leading-tight'>
              Negative price perception is hurting your{' '}
              <span className='text-primary-700'>revenue potential</span>
            </h2>

            <p className='md:text-lg'>
              BengCare&apos;s Fair Price Estimator provides 3rd party
              validation that your prices are fair and builds trust with
              consumers.
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
            Maximize earnings for the whole service team
          </h2>
          <p className='md:text-lg text-gray-800'>
            Increase same day sales. Book more appointments. Decrease declined
            services.
          </p>
        </div>

        <div className='max-w-4xl rounded-lg overflow-hidden border shadow-md divide-y'>
          <div className='bg-gray-100 p-4 md:p-6'>
            <h3 className='md:text-lg font-semibold'>Service Advisor</h3>
          </div>

          <div className='p-6 md:p-8 space-y-6'>
            <h4 className='text-2xl md:text-3xl font-semibold'>
              Sell more work with{' '}
              <span className='text-primary-700'>ease.</span>
            </h4>

            <ul className='list-disc list-inside md:text-lg'>
              <li>Close more Added Service Recommendations</li>
              <li>Save time creating estimates</li>
              <li>Increase hours per repair order</li>
            </ul>

            <p className='md:text-lg'>
              BengCare&apos;s Fair Price Estimator empowers Service Advisors
              with 3rd party proof of fair prices to combat price objections and
              provide confidence that your dealership is fair priced.{' '}
            </p>
          </div>
        </div>
      </section>

      <section className='bg-gray-100 py-14'>
        <div className='layout max-w-4xl mx-auto space-y-4'>
          <p className='md:text-lg'>Become BengCare Certified.</p>
          <h2 className='text-3xl md:text-4xl font-semibold'>
            We&apos;ll give you the tools to generate more{' '}
            <span className='text-primary-700'>profit</span>
          </h2>
        </div>
      </section>

      <section className='min-h-[calc(100vh-100px)] layout flex flex-col items-center gap-20 py-20'>
        {MOCK_BENEFIT_DATA.map(({ title, desc }, index) => (
          <div key={index} className='flex flex-col lg:flex-row gap-10'>
            <div
              className={clsxm(
                'lg:w-5/12 shrink-0',
                index % 2 == 0 ? 'lg:order-1' : 'lg:order-2',
              )}
            >
              <Image
                src='/homepage/coming-soon.png'
                alt='Placeholder Image'
                width={455}
                height={303}
                className='w-full'
              />
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
            Let&apos;s grow your{' '}
            <span className='text-primary-700'>Fixed Ops business</span>
          </h1>

          <Link
            href='/registrasi-bengkel'
            className='inline-flex items-center justify-center py-[8px] px-[16px] min-h-11 bg-primary-700 rounded-lg text-white font-medium hover:bg-primary-700/90'
          >
            Gabung BengCare
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
                src='/google.png'
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
