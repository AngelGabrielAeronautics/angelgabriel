/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://angelgabriel.co.za',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://angelgabriel.co.za'}/sitemap.xml`,
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}; 