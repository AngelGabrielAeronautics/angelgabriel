import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { load } from 'cheerio';
// Optional override for local testing (e.g. BASE_URL=http://localhost:3000)
const BASE_URL = process.env.BASE_URL;

async function getUrls() {
  // Read the sitemap index and all nested sitemaps for URL entries
  const indexContent = fs.readFileSync(path.resolve('public/sitemap.xml'), 'utf8');
  const $index = load(indexContent, { xmlMode: true });
  const sitemapLocs = $index('sitemap > loc').map((i, el) => $index(el).text()).get();
  const urls = [];
  for (const loc of sitemapLocs) {
    const fileName = path.basename(loc);
    const xmlContent = fs.readFileSync(path.resolve('public', fileName), 'utf8');
    const $ = load(xmlContent, { xmlMode: true });
    $('url > loc').each((i, el) => {
      urls.push($(el).text());
    });
  }
  return urls;
}

async function checkPage(url) {
  // Use BASE_URL if provided to test local server
  const fetchUrl = BASE_URL ? url.replace(/^https?:\/\/[^\/]+/, BASE_URL) : url;
  try {
    const res = await fetch(fetchUrl);
    const html = await res.text();
    const $ = load(html);

    const ogImage = $('meta[property="og:image"]').attr('content');
    const twImage = $('meta[name="twitter:image"]').attr('content');

    const missing = [];
    if (!ogImage) missing.push('og:image');
    if (!twImage) missing.push('twitter:image');

    const broken = [];
    for (const [label, imgUrl] of [['og:image', ogImage], ['twitter:image', twImage]]) {
      if (imgUrl) {
        const imgRes = await fetch(imgUrl);
        if (!imgRes.ok) broken.push(`${label} (${imgUrl}) → ${imgRes.status}`);
      }
    }

    return { url, missing, broken };
  } catch (err) {
    return { url, error: err.message };
  }
}

(async () => {
  const urls = await getUrls();
  console.log(`Checking ${urls.length} pages…\n`);

  for (const url of urls) {
    const { missing, broken, error } = await checkPage(url);
    if (error) {
      console.log(`[ERROR] ${url} → ${error}`);
    } else {
      if (missing.length || broken.length) {
        console.log(`\n${url}`);
        if (missing.length) console.log(`  • Missing tags: ${missing.join(', ')}`);
        if (broken.length)  console.log(`  • Broken images: ${broken.join(', ')}`);
      }
    }
  }
  console.log('\nDone.');
})(); 