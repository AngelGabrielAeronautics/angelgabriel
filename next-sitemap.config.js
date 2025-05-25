/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://flyangelgabriel.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://flyangelgabriel.com'}/sitemap.xml`,
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/private/'],
        crawlDelay: 10,
      },
    ],
  },
}; 