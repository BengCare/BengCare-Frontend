/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  skipMiddlewareUrlNormalize: false,
  reactStrictMode: true,
  swcMinify: true,

  pageExtensions: ['page.tsx', 'api.ts', 'page.ts', 'api.tsx'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value:
              process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
                ? 'noindex'
                : 'index, follow',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/bug-report',
        destination: 'https://forms.gle/j1Yqko6S5wyrUpLa6',
        permanent: true, 
      },
      {
        source: '/beta-app',
        destination: 'https://play.google.com/store/apps/details?id=com.bengcare.bengcare',
        permanent: true, 
      },
      {
        source: '/daily-log',
        destination: 'https://forms.gle/jy1VBRaPysoqK7U6A',
        permanent: true, 
      },
    ];
  }
};

export default nextConfig;
