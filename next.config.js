/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flyangelgabriel.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Legacy page redirects
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/blank-1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blank-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blank-3',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blank-4',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blank-5',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blank-6',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blank-7',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blank-8',
        destination: '/',
        permanent: true,
      },
      // Handle parameter-based duplicate URLs
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'cat',
          },
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'currency',
          },
        ],
        destination: '/',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'thank-you',
          },
        ],
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/',
        has: [
          {
            type: 'query',
            key: 'thankYou',
          },
        ],
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/index.php',
        has: [
          {
            type: 'query',
            key: 'currency',
          },
        ],
        destination: '/',
        permanent: true,
      },
      // Gallery-specific parameter redirects
      {
        source: '/gallery',
        has: [
          {
            type: 'query',
            key: 'currency',
          },
        ],
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/index.php/gallery',
        destination: '/gallery',
        permanent: true,
      },
      // Handle common variations and old URLs
      {
        source: '/get-a-quote',
        destination: '/rates-and-quotes',
        permanent: true,
      },
      {
        source: '/quote',
        destination: '/rates-and-quotes',
        permanent: true,
      },
      {
        source: '/quotes',
        destination: '/rates-and-quotes',
        permanent: true,
      },
      // Fix old blog post URL structure
      {
        source: '/post/exploring-the-wild-why-chartering-an-aircraft-with-angel-gabriel-is-safer-and-faster-than-driving',
        destination: '/blog/exploring-the-wild',
        permanent: true,
      },
      {
        source: '/post/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      // Handle trailing slash inconsistencies for main pages
      {
        source: '/contact/',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services/',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/fleet/',
        destination: '/fleet',
        permanent: true,
      },
      {
        source: '/gallery/',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/links/',
        destination: '/links',
        permanent: true,
      },
      {
        source: '/blog/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/rates-and-quotes/',
        destination: '/rates-and-quotes',
        permanent: true,
      },
      {
        source: '/terms/',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/privacy-policy/',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/cookie-policy/',
        destination: '/cookie-policy',
        permanent: true,
      },
      // Handle common query parameters that might cause redirects
      {
        source: '/:path*',
        has: [
          {
            type: 'query',
            key: 'utm_source',
          },
        ],
        destination: '/:path*',
        permanent: false,
      },
    ]
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
}

module.exports = nextConfig 