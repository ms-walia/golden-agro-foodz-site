import { SITE_URL } from './site';

export function pageMeta({ title, description, path }) {
  const url = SITE_URL + path;
  const image = SITE_URL + '/images/og-image.jpg';
  return {
    metadataBase: new URL(SITE_URL),
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true, 'max-image-preview': 'large' },
    icons: { icon: '/images/logo-gaf.webp', apple: '/images/logo-gaf.webp' },
    openGraph: { type: 'website', siteName: 'Golden Agro Foodz', locale: 'en_IN', title, description, url, images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}
export const siteViewport = { themeColor: '#0b7a3b', width: 'device-width', initialScale: 1 };
export const FONTS = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Manrope:wght@400;500;600;700&display=swap';
