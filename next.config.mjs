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
};

export default nextConfig;
