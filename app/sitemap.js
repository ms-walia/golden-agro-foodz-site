import { SITE_URL } from '../lib/site';
export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE_URL + '/', lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: SITE_URL + '/shop', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: SITE_URL + '/whatwedo', lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
  ];
}
