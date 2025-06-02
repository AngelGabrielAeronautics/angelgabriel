import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

// Load environment variables if using a .env file locally
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const BING_API_KEY = process.env.BING_API_KEY;

// For debugging API Key issues:
if (BING_API_KEY) {
  console.log(`Using API Key (redacted): ${BING_API_KEY.substring(0, 4)}...${BING_API_KEY.substring(BING_API_KEY.length - 4)}`);
} else {
  console.log('BING_API_KEY is not loaded into the script environment.');
}

const SITE_URL = 'https://flyangelgabriel.com'; // Your primary site URL
const SITEMAP_PATH = path.resolve(process.cwd(), 'public', 'sitemap.xml');
// Bing can also handle sitemap index files directly if SubmitSitemap is preferred,
// but for SubmitUrlBatch, we extract individual URLs.
// If your main sitemap is sitemap-0.xml, adjust SITEMAP_PATH or logic.

async function getUrlsFromSitemap(): Promise<string[]> {
  try {
    if (!fs.existsSync(SITEMAP_PATH)) {
      console.error(`Sitemap index file not found at ${SITEMAP_PATH}. Make sure to build your project first (npm run build).`);
      return [];
    }

    const sitemapIndexContent = fs.readFileSync(SITEMAP_PATH, 'utf-8');
    const $index = cheerio.load(sitemapIndexContent, { xmlMode: true });
    let sitemapLocations = $index('sitemap > loc').map((i, el) => $index(el).text()).get();

    let allUrls: string[] = [];

    // If sitemap.xml is not an index but a direct sitemap, its <url><loc> tags will be processed.
    const directUrls = $index('urlset > url > loc').map((i, el) => $index(el).text()).get();
    if (directUrls.length > 0) {
      console.log(`Found ${directUrls.length} URLs directly in ${SITEMAP_PATH}`);
      allUrls = allUrls.concat(directUrls);
    }
    
    // If sitemap.xml IS an index file, sitemapLocations will have entries.
    // If sitemap.xml was meant to be an index but next-sitemap only generated sitemap-0.xml and sitemap.xml is empty or not an index,
    // we explicitly check for sitemap-0.xml.
    if (sitemapLocations.length === 0 && directUrls.length === 0 && fs.existsSync(path.resolve(process.cwd(), 'public', 'sitemap-0.xml'))) {
        const siteUrlForSitemap = SITE_URL.endsWith('/') ? SITE_URL.slice(0, -1) : SITE_URL;
        sitemapLocations.push(`${siteUrlForSitemap}/sitemap-0.xml`);
        console.log(`Sitemap index ${SITEMAP_PATH} had no direct URLs or sitemap locations. Adding ${sitemapLocations[0]} as a fallback.`);
    }

    for (const loc of sitemapLocations) {
      const sitemapFilename = loc.substring(loc.lastIndexOf('/') + 1);
      const individualSitemapPath = path.resolve(process.cwd(), 'public', sitemapFilename);
      
      if (fs.existsSync(individualSitemapPath)) {
        const sitemapContent = fs.readFileSync(individualSitemapPath, 'utf-8');
        const $ = cheerio.load(sitemapContent, { xmlMode: true });
        const urls = $('url > loc').map((i, el) => $(el).text()).get();
        allUrls = allUrls.concat(urls);
        console.log(`Found ${urls.length} URLs in ${sitemapFilename}`);
      } else {
        console.warn(`Sitemap file ${sitemapFilename} (from ${loc}) referenced in index not found at ${individualSitemapPath}`);
      }
    }
    
    if (allUrls.length > 0) {
      console.log(`Total ${allUrls.length} URLs extracted from sitemap structure.`);
      // Deduplicate URLs just in case
      return [...new Set(allUrls)];
    } else if (directUrls.length === 0 && sitemapLocations.length === 0) {
       console.error(`No URLs or sitemap locations found in ${SITEMAP_PATH}. Ensure sitemaps are generated correctly.`);
       return [];
    }
    return []; // Should be covered by above, but as a fallback.
  } catch (error) {
    console.error('Error reading or parsing sitemap:', error);
    return [];
  }
}

async function submitUrlsToBing(urls: string[]): Promise<void> {
  if (!BING_API_KEY) {
    console.error('BING_API_KEY environment variable is not set.');
    return;
  }
  if (urls.length === 0) {
    console.log('No URLs to submit.');
    return;
  }

  const apiUrl = `https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=${BING_API_KEY}`;
  const payload = {
    siteUrl: SITE_URL,
    urlList: urls,
  };

  console.log(`Submitting ${urls.length} URLs to Bing...`);

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });

    if (response.ok) {
      // Bing API returns 200 OK with d:null for successful batch submission.
      // For other success codes or detailed responses, you might need to parse response.json()
      console.log('Successfully submitted URLs to Bing.');
      console.log('Response Status:', response.status);
      try {
        const jsonResponse = await response.json();
        console.log('Response Body:', JSON.stringify(jsonResponse, null, 2));
      } catch (e) {
        console.log('Response Body (not JSON):', await response.text());
      }
    } else {
      console.error('Error submitting URLs to Bing:');
      console.error('Status:', response.status, response.statusText);
      try {
        const errorBody = await response.json(); // Bing often returns JSON error details
        console.error('Error Body:', JSON.stringify(errorBody, null, 2));
      } catch (e) {
        console.error('Error Body (not JSON):', await response.text());
      }
    }
  } catch (error) {
    console.error('Failed to make the request to Bing API:', error);
  }
}

async function main() {
  const urls = await getUrlsFromSitemap();
  if (urls && urls.length > 0) {
    await submitUrlsToBing(urls);
  } else {
    console.log('No URLs found in sitemap or sitemap could not be processed.');
  }
}

main().catch(error => {
  console.error('An unexpected error occurred:', error);
});

// To run this script:
// 1. Ensure you have your BING_API_KEY in .env.local or as an environment variable.
// 2. Build your project: npm run build (this generates the sitemap)
// 3. Execute: npx ts-node --project tsconfig.scripts.json scripts/submit-urls-to-bing.ts
//    (or node dist/scripts/submit-urls-to-bing.js if you compile it separately)

// Note: You might need to create a tsconfig.scripts.json if you don't have one
// or adjust your main tsconfig.json to correctly compile/run scripts with ESModules.
// A simple tsconfig.scripts.json could be:
/*
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "commonjs", // Or "esnext" if your node environment supports it well for scripts
    "outDir": "dist/scripts", // Optional: if you want to compile scripts
    "skipLibCheck": true
  },
  "include": [
    "scripts/**\/*.ts"
  ]
}
*/ 