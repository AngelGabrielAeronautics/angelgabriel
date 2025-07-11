/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://flyangelgabriel.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: [
    '/style-guide', // Internal use only
    '/responsive-test', // Development page
    '/test*', // Any test pages
    '/blank-*', // Legacy pages that redirect
    '/index', // Redirects to home
    '/index.php', // Old PHP redirects
    '/index.php/*', // All PHP paths
    '/get-a-quote', // Redirects to rates-and-quotes
    '/quote', // Redirects to rates-and-quotes
    '/quotes', // Redirects to rates-and-quotes
    '/post/*', // Old blog structure that redirects
    '/_frog', // Spam URL
    '/_api/*', // Invalid API endpoints
    '/api/*', // API routes
    '/_serverless/*', // Serverless URLs
    '/_next/*', // Next.js internal
    '/static/*', // Static assets
    '/.well-known/*', // Well-known URLs
    '/css/*', // CSS files
    '/js/*', // JavaScript files
    '/assets/*', // Asset files
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/style-guide',
          '/responsive-test',
          '/test',
          '/blank-*',
          '/api/',
          '/_api/',
          '/_frog',
          '/post/',
          '/index.php',
          '/_serverless/',
          '/_next/',
          '/static/',
          '/.well-known/',
          '/css/',
          '/js/',
          '/assets/',
          '/*?*utm_*',
          '/*?*fbclid*',
          '/*?*gclid*',
          '/*?cat=*',
          '/*?currency=*',
          '/*?thank-you*',
          '/*?thankYou*',
          '/*?ver=*',
          '/*?id=comp-*',
          '/*?items=*',
          '/*?container=*',
        ]
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://flyangelgabriel.com'}/sitemap.xml`,
    ],
  },
  // Ensure trailing slashes are consistent (no trailing slashes)
  trailingSlash: false,
  // Transform function to ensure all URLs are canonical and clean
  transform: async (config, path) => {
    // Remove any trailing slashes to ensure consistency
    const cleanPath = path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
    
    // Skip problematic paths that should never be in sitemap
    const skipPaths = [
      '/blank-', '/test', '/api/', '/_api/', '/_frog', '/post/', 
      '/style-guide', '/responsive-test', '/index', '/index.php',
      '/_serverless/', '/_next/', '/static/', '/.well-known/',
      '/css/', '/js/', '/assets/'
    ];
    
    if (skipPaths.some(skip => cleanPath.includes(skip))) {
      return null;
    }
    
    // Skip URLs with query parameters that create duplicates
    if (cleanPath.includes('?')) {
      return null;
    }
    
    // Skip serverless and technical URLs
    if (cleanPath.startsWith('/_') || cleanPath.includes('serverless')) {
      return null;
    }
    
    return {
      loc: cleanPath,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  // Additional sitemap options to handle duplicate content
  additionalPaths: async (config) => {
    // Ensure only canonical URLs are included
    return [];
  },
}; 